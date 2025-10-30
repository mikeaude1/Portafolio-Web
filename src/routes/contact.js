const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const { Resend } = require('resend')
const sgMail = require('@sendgrid/mail')
const https = require('https')

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASS,
  MAIL_TO,
  MAIL_PROVIDER,
  MAIL_FROM,
  RESEND_API_KEY,
  SENDGRID_API_KEY,
  PHP_ENDPOINT,
} = process.env

function createTransporterWith(port, secure) {
  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port,
    secure,
    auth: { user: MAIL_USER, pass: MAIL_PASS },
    requireTLS: !secure,
    tls: { minVersion: 'TLSv1.2' },
    connectionTimeout: 20000,
    socketTimeout: 20000,
    logger: true,
    debug: true,
  })
  return transporter
}

function createTransporter() {
  if (!MAIL_HOST || !MAIL_PORT || !MAIL_USER || !MAIL_PASS || !MAIL_TO) {
    throw new Error('Faltan variables de entorno SMTP: MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_TO')
  }
  const port = Number(MAIL_PORT) || 587
  const secure = (MAIL_SECURE === 'true') || port === 465
  return createTransporterWith(port, secure)
}

async function sendWithFallback(mailOpts) {
  const primaryPort = Number(MAIL_PORT) || 587
  const primarySecure = (MAIL_SECURE === 'true') || primaryPort === 465
  try {
    const t = createTransporterWith(primaryPort, primarySecure)
    await t.verify()
    const info = await t.sendMail(mailOpts)
    return { info, attempt: `${primaryPort}/${primarySecure ? 'secure' : 'starttls'}`, provider: 'smtp' }
  } catch (err) {
    const code = err?.code || err?.name
    const retriable = code === 'ETIMEDOUT' || code === 'ECONNECTION' || code === 'ESOCKET'
    if (!retriable) throw err
    const fallbackPort = primarySecure ? 587 : 465
    const fallbackSecure = !primarySecure
    const t2 = createTransporterWith(fallbackPort, fallbackSecure)
    await t2.verify()
    const info2 = await t2.sendMail(mailOpts)
    return { info: info2, attempt: `${fallbackPort}/${fallbackSecure ? 'secure' : 'starttls'}`, provider: 'smtp' }
  }
}

async function sendViaResend(mailOpts) {
  if (!RESEND_API_KEY) {
    throw new Error('Falta RESEND_API_KEY para enviar con Resend')
  }
  const resend = new Resend(RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: mailOpts.from,
    to: mailOpts.to,
    reply_to: mailOpts.replyTo,
    subject: mailOpts.subject,
    text: mailOpts.text,
  })
  if (error) throw error
  return { info: { messageId: data?.id }, attempt: 'resend/http', provider: 'resend' }
}

async function sendViaSendgrid(mailOpts) {
  if (!SENDGRID_API_KEY) {
    throw new Error('Falta SENDGRID_API_KEY para enviar con SendGrid')
  }
  sgMail.setApiKey(SENDGRID_API_KEY)
  const [resp] = await sgMail.send({
    to: mailOpts.to,
    from: mailOpts.from,
    replyTo: mailOpts.replyTo,
    subject: mailOpts.subject,
    text: mailOpts.text,
  })
  const msgId = (resp?.headers && (resp.headers['x-message-id'] || resp.headers['x-sendgrid-message-id'])) || undefined
  return { info: { messageId: msgId }, attempt: 'sendgrid/http', provider: 'sendgrid' }
}

function sendViaPhpProxy(email, message, name) {
  return new Promise((resolve, reject) => {
    try {
      const endpoint = PHP_ENDPOINT || 'https://audedev.com/api/contact'
      const url = new URL(endpoint)
      const payload = JSON.stringify({ email, message, name })
      const opts = {
        method: 'POST',
        hostname: url.hostname,
        path: url.pathname + (url.search || ''),
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
      }
      const req = https.request(opts, (res) => {
        let data = ''
        res.on('data', (chunk) => { data += chunk })
        res.on('end', () => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            const err = new Error(`php_proxy_failed ${res.statusCode}`)
            err.code = 'PHP_PROXY_FAILED'
            err.response = data.slice(0, 160)
            return reject(err)
          }
          try {
            const json = JSON.parse(data)
            return resolve({ info: { messageId: json?.messageId }, attempt: 'php/proxy', provider: 'php_proxy' })
          } catch {
            return resolve({ info: { messageId: undefined }, attempt: 'php/proxy', provider: 'php_proxy' })
          }
        })
      })
      req.on('error', (e) => reject(e))
      req.write(payload)
      req.end()
    } catch (e) {
      reject(e)
    }
  })
}
router.post('/', async (req, res) => {
  const { email, message, name } = req.body || {}
  if (!email || !message) {
    return res.status(400).json({ ok: false, error: 'email y message son requeridos' })
  }
  try {
    const mailOpts = {
      from: MAIL_FROM || MAIL_USER,
      replyTo: email,
      to: MAIL_TO,
      subject: 'Nuevo mensaje desde el sitio web',
      text: `Nombre: ${name || '-'}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    }
    const provider = (MAIL_PROVIDER || '').toLowerCase()
    let result
    if (provider === 'php' || provider === 'php_proxy') {
      result = await sendViaPhpProxy(email, message, name)
    } else if (provider === 'resend') {
      result = await sendViaResend(mailOpts)
    } else if (provider === 'sendgrid') {
      result = await sendViaSendgrid(mailOpts)
    } else {
      try {
        result = await sendWithFallback(mailOpts)
      } catch (err) {
        const code = err?.code || err?.name
        const retriable = code === 'ETIMEDOUT' || code === 'ECONNECTION' || code === 'ESOCKET'
        if (retriable && PHP_ENDPOINT) {
          result = await sendViaPhpProxy(email, message, name)
        } else {
          throw err
        }
      }
    }
    return res.status(200).json({ ok: true, messageId: result.info.messageId, transport: result.attempt, provider: result.provider })
  } catch (err) {
    console.error('Error SMTP/Nodemailer:', {
      name: err?.name,
      code: err?.code,
      message: err?.message,
      response: err?.response,
    })
    return res.status(500).json({
      ok: false,
      error: 'send_failed',
      code: err?.code || err?.name || 'unknown',
      message: (err?.message || '').slice(0, 160),
    })
  }
})

module.exports = router
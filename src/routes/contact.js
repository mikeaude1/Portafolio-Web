const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASS,
  MAIL_TO,
} = process.env

function createTransporter() {
  if (!MAIL_HOST || !MAIL_PORT || !MAIL_USER || !MAIL_PASS || !MAIL_TO) {
    throw new Error('Faltan variables de entorno SMTP: MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_TO')
  }
  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure: (MAIL_SECURE === 'true') || Number(MAIL_PORT) === 465,
    auth: { user: MAIL_USER, pass: MAIL_PASS },
    logger: true,
    debug: true,
  })
  return transporter
}

router.post('/', async (req, res) => {
  const { email, message, name } = req.body || {}
  if (!email || !message) {
    return res.status(400).json({ ok: false, error: 'email y message son requeridos' })
  }
  try {
    const transporter = createTransporter()
    // Verifica conexión SMTP antes de enviar (mejores mensajes de error en logs)
    await transporter.verify()

    const info = await transporter.sendMail({
      from: MAIL_USER, // usar el remitente autenticado para evitar DMARC
      replyTo: email,  // para poder responder al remitente original
      to: MAIL_TO,
      subject: 'Nuevo mensaje desde el sitio web',
      text: `Nombre: ${name || '-'}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    })
    return res.status(200).json({ ok: true, messageId: info.messageId })
  } catch (err) {
    console.error('Error SMTP/Nodemailer:', {
      name: err?.name,
      code: err?.code,
      message: err?.message,
      response: err?.response,
    })
    return res.status(500).json({ ok: false, error: 'send_failed' })
  }
})

module.exports = router
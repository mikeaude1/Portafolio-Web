const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// Middlewares
// Configuración CORS: en desarrollo permite todo; en producción restringe a dominios conocidos
const isProd = process.env.NODE_ENV === 'production'
const allowEnvRaw = (process.env.CORS_ORIGINS ?? process.env.CORS_ORIGIN ?? '')
const allowedFromEnv = allowEnvRaw.split(',').map(s => s.trim()).filter(Boolean)
const defaultProdOrigins = [
  'https://audedev.com',
  'https://www.audedev.com',
]
function sanitizeOriginString(s) {
  return s.replace(/[\'"`]/g, '').trim()
}
function normalizeOrigin(o) {
  try {
    const cleaned = sanitizeOriginString(o)
    const url = new URL(cleaned.includes('://') ? cleaned : `https://${cleaned}`)
    return url.origin
  } catch {
    return o
  }
}
function hostKey(originStr) {
  try {
    const u = new URL(originStr)
    return u.host.replace(/^www\./, '')
  } catch {
    return originStr
  }
}

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true) // llamadas server-side o same-origin
    if (!isProd) return cb(null, true)

    const rawAllowList = allowedFromEnv.length ? allowedFromEnv : defaultProdOrigins
    const normalizedAllow = [...new Set(rawAllowList.map(normalizeOrigin))]
    const originNorm = normalizeOrigin(origin)

    const originHost = hostKey(originNorm)
    const allowedByList = normalizedAllow.some(a => hostKey(a) === originHost)
    const allowedBySuffix = originHost === 'audedev.com' || originHost.endsWith('.audedev.com')
    if (allowedByList || allowedBySuffix) return cb(null, true)

    console.error('CORS bloqueado', {
      origin: originNorm,
      originHost,
      allowList: normalizedAllow,
      isProd,
    })
    return cb(new Error('Not allowed by CORS'))
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.options('/api/contact', cors())

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas mínimas para portafolio
const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

// Health check simple (sin BD)
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

// Raíz
app.get('/', (req, res) => {
  res.send('Backend de portafolio funcionando');
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
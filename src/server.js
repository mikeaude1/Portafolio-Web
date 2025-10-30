const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// Middlewares
// Configuración CORS: en desarrollo permite todo; en producción restringe a dominios conocidos
const isProd = process.env.NODE_ENV === 'production'
const allowedFromEnv = (process.env.CORS_ORIGINS ?? '').split(',').map(s => s.trim()).filter(Boolean)
const defaultProdOrigins = [
  'https://audedev.com',
  'https://www.audedev.com',
]
app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true) // llamadas server-side o same-origin
    if (!isProd) return cb(null, true)
    const allowList = allowedFromEnv.length ? allowedFromEnv : defaultProdOrigins
    if (allowList.includes(origin)) return cb(null, true)
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
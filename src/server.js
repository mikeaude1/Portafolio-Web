const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { MongoMemoryServer } = require('mongodb-memory-server');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a MongoDB (con fallback en memoria para desarrollo)
async function connectDB() {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cursos_alumnos';
  try {
    await mongoose.connect(uri);
    console.log('Conectado a MongoDB');
    return;
  } catch (err) {
    console.warn('No se pudo conectar a MongoDB, se intentará usar base de datos en memoria:', err.message);
  }
  try {
    const mongod = await MongoMemoryServer.create();
    const memUri = mongod.getUri();
    await mongoose.connect(memUri);
    console.log('MongoDB en memoria inicializado');
    const cleanup = async () => {
      await mongoose.disconnect();
      await mongod.stop();
      process.exit(0);
    };
    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);
  } catch (err) {
    console.error('Error iniciando MongoDB en memoria:', err.message);
    process.exit(1);
  }
}

// Routers
const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');
const seedRouter = require('./routes/seed');
const contactRouter = require('./routes/contact');

app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/seed', seedRouter);
app.use('/api/contact', contactRouter);

// Health check
app.get('/healthz', (req, res) => {
  const state = mongoose.connection.readyState;
  const states = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
  res.status(200).json({
    status: 'ok',
    uptime: Math.round(process.uptime()),
    db: states[state],
    timestamp: new Date().toISOString(),
  });
});

app.get('/', (req, res) => {
  res.send('API de Cursos y Alumnos funcionando');
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;
function start() {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
  // Conexión a MongoDB en segundo plano para no bloquear el arranque
  connectDB().catch((err) => {
    console.error('Error conectando a MongoDB:', err?.message || err);
  });
}
start();
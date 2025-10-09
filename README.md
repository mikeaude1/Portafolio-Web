<div align="center">

<!-- Icono SVG inline -->
<svg width="88" height="88" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="3" width="18" height="14" rx="2" ry="2" stroke="#2563EB" stroke-width="1.5" fill="#EFF6FF"/>
  <path d="M7 7h6M7 10h10M7 13h8" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="8" cy="20" r="2" fill="#10B981"/>
  <circle cx="16" cy="20" r="2" fill="#F59E0B"/>
</svg>

<h1>API de Cursos y Estudiantes</h1>
<p>CRUD, búsqueda, paginación y relación Cursos ↔ Estudiantes</p>

<!-- Badges -->
<img src="https://img.shields.io/badge/node-18+-3c873a?logo=node.js&labelColor=222" />
<img src="https://img.shields.io/badge/express-4.x-black?logo=express&labelColor=222" />
<img src="https://img.shields.io/badge/mongoose-7.x-47A248?logo=mongodb&labelColor=222" />

</div>

---

## Índice
- Introducción • Características • Arquitectura • Instalación • Endpoints • UI • Curl • Tecnologías • Buenas prácticas • Licencia

## Introducción
API para gestionar Cursos y Estudiantes. Incluye una UI amigable en `src/public/index.html` con formularios en modales para crear, editar y borrar.

## Características
- CRUD de Cursos y Estudiantes
- Paginación, búsqueda y ordenamiento
- Inscripción y retiro de estudiantes en cursos
- UI ligera (HTML/CSS/JS) lista para probar

## Arquitectura
```
c:\Proyectos\Apis
├── .env
├── package.json
└── src\
    ├── controllers\
    ├── models\
    ├── public\ (index.html)
    ├── routes\
    └── server.js
```

## Instalación y ejecución
1) Instala dependencias:
```
npm install
```
2) (Opcional) `.env`:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/cursos
```
3) Ejecuta:
```
npm run dev
```
Servidor: http://localhost:3000 • UI: http://localhost:3000/public/index.html

## Endpoints principales
Cursos: GET /api/courses, GET /api/courses/:id, POST /api/courses, PUT /api/courses/:id, DELETE /api/courses/:id, POST /api/courses/:id/enroll, POST /api/courses/:id/withdraw

Estudiantes: GET /api/students, GET /api/students/:id, POST /api/students, PUT /api/students/:id, DELETE /api/students/:id

## Probar en la UI
Abre: http://localhost:3000/public/index.html
- Listar, buscar y paginar
- Agregar/Editar/Borrar en modales
- Inscribir/retirar estudiantes

## Ejemplos curl
```bash
# Crear curso
curl -X POST http://localhost:3000/api/courses \
  -H "Content-Type: application/json" \
  -d '{"name":"Node.js Avanzado","description":"Curso intensivo"}'

# Crear estudiante
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jane","lastName":"Doe","email":"jane@doe.com"}'
```

## Tecnologías
Express, Mongoose, Nodemon, HTML/CSS/JS (sin librerías externas)

## Buenas prácticas
Valida entradas, maneja errores de forma consistente y nunca subas secretos al repositorio.

## Licencia
MIT
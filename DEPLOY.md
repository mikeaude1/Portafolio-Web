# Guía de despliegue: React (Vite) + Node/Express + MongoDB

Esta guía te lleva a producción usando:
- Frontend estático en cPanel (public_html)
- Backend Node/Express en Render (o Railway)
- Base de datos MongoDB Atlas

## 1) Preparar el repo
- Asegúrate de tener este proyecto en GitHub.
- `package.json` ya define `start: node src/server.js`.

## 2) Backend en Render (Node/Express)
1. Crea cuenta en https://render.com y **New Web Service**.
2. Conecta tu repo.
3. Configura:
   - **Environment**: `Node`
   - **Start Command**: `node src/server.js`
   - **Build Command**: vacío (no necesario)
   - **Region**: cercana a tus usuarios
4. Añade **Environment Variables**:
   - `MAIL_HOST=smtp.titan.email`
   - `MAIL_PORT=465`
   - `MAIL_SECURE=true`
   - `MAIL_USER=maude@audedev.com`
   - `MAIL_PASS=Porra123.`
   - `MAIL_TO=miguelaude@ymail.com`
   - `MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/myportfolio?retryWrites=true&w=majority`
5. Deploy. Render te dará una URL (`https://<service>.onrender.com`).
6. Prueba:
   - `GET https://<service>.onrender.com/api/` → "API de Cursos y Alumnos funcionando"
   - `POST https://<service>.onrender.com/api/contact` con JSON `{ email, message }` → `{"ok":true}`

> Opcional: **Custom Domain** `api.audedev.com`.
- En tu DNS del dominio, crea un `CNAME` a la URL del servicio Render.
- Activa el dominio en Render y espera la propagación.

## 3) MongoDB Atlas
1. Crea cuenta en https://www.mongodb.com/atlas.
2. Crea un **Cluster** y un **Database User**.
3. En **Network Access**, añade IPs permitidas.
   - Añade la IP de salida del proveedor (Render) o temporalmente `0.0.0.0/0`.
4. Copia el `MONGO_URI` y colócalo en las variables del backend.

## 4) Frontend en cPanel
1. Define la API del backend para producción:
   - Crea/edita `.env.production`:
     ```
     VITE_API_BASE=https://REPLACE_WITH_BACKEND_DOMAIN/api
     ```
   - Reemplaza `REPLACE_WITH_BACKEND_DOMAIN` con tu dominio/URL de Render.
2. Genera build local:
   ```bash
   npm run web:build
   ```
3. Sube el contenido de `dist/` a `public_html/` en cPanel (Administrador de archivos o FTP).
4. Verifica el sitio y el formulario de contacto.

## 5) Titan Mail (SMTP)
- En Titan, activa **Third‑party email access** (ya lo hiciste).
- Usa las variables `MAIL_*` anteriores.
- Si aparece `535 authentication failed`, suele ser por bloqueo temporal de IP o credenciales; espera unos minutos o revisa soporte Titan.

## 6) CORS y seguridad
- Tu backend usa `cors()` abierto. En producción puedes restringir:
  ```js
  const allowed = process.env.CORS_ORIGIN || 'https://audedev.com';
  app.use(cors({ origin: allowed }));
  ```
- Mantén secretos solo en backend; no subas `.env` con claves privadas.

## 7) Pruebas rápidas
```bash
# Health
curl -s https://<backend>/api/
# Contacto
curl -s -X POST https://<backend>/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"email":"tu@correo.com","message":"Prueba prod"}'
```

## 8) Problemas comunes
- **No corre en cPanel**: hosting compartido sin Node. Usa Render/Railway (backend) + cPanel (frontend).
- **MongoDB falla**: revisa `MONGO_URI`, usuario y IPs permitidas en Atlas.
- **Correo no llega**: verifica `MAIL_TO`, revisa Spam, y logs del backend.

## 9) Mantenimiento
- Cualquier cambio en backend → despliegue en Render.
- Cambios en frontend → `npm run web:build` y subir `dist/`.
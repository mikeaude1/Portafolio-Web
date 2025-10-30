# Portafolio Web — Miguel Aude

Un portafolio moderno construido con React + Vite + TypeScript. Presenta proyectos, enlaces a producción y repositorios, página de diplomas, sección de contacto y más.

## 🚀 Demo en producción
- Sitio: https://www.audedev.com/

## 📦 Repositorio
- Repo: https://github.com/mikeaude1/Portafolio-Web.git

## 🛠️ Stack tecnológico
- React 18 + TypeScript
- Vite (bundler y servidor de desarrollo)
- CSS (App.css, index.css)
- Node.js >= 18 recomendado

## 📁 Estructura del proyecto (resumen)
```
MyPortFolio/
├── public/            # Assets estáticos (sirven como /)
│   ├── audedev-logo.svg
│   ├── audedev-photo.svg
│   ├── foto-cv.png
│   └── diplomas/
├── src/
│   ├── assets/        # Imágenes y SVG usados dentro del código
│   ├── components/    # Navbar, Footer, etc.
│   ├── pages/         # About, Contact, Diplomas, Home, Projects
│   ├── main.tsx       # Punto de entrada
│   ├── App.tsx        # Router y layout
│   └── index.css
├── index.html         # HTML raíz
├── package.json       # Scripts y dependencias
├── vite.config.ts     # Configuración Vite
└── README.md
```

## ⚙️ Requisitos
- Node.js >= 18
- npm (o pnpm/yarn, ajusta los comandos si usas otro gestor)

## 📥 Instalación
1) Clonar el repositorio
```
git clone https://github.com/mikeaude1/Portafolio-Web.git
cd Portafolio-Web
```
2) Instalar dependencias
```
npm install
```

## 🧪 Scripts disponibles
- Desarrollo con HMR
```
npm run dev
```
- Construcción de producción
```
npm run build
```
- Previsualización de la build
```
npm run preview
```

## 🧭 Navegación principal
- Home: Presentación y avatar (usa `public/foto-cv.png`).
- Projects: Tarjetas con enlaces a producción y repositorios.
- Diplomas: Documentos y certificados.
- About / Contact: Información personal y formas de contacto.

## 🌟 Características destacadas
- Diseño responsive y navegación sencilla.
- Enlaces directos a producción y GitHub.
- Build optimizada con Vite.
- Assets estáticos servidos desde `public/`.

## 🧑‍💻 Desarrollo local
1) Inicia el servidor de desarrollo:
```
npm run dev
```
2) Abre el navegador:
- http://localhost:5175/ (por defecto de Vite)

## 📦 Producción
Para generar la versión de producción:
```
npm run build
```
Luego puedes servir `dist/` en cualquier hosting estático (Netlify, Vercel, GitHub Pages, Nginx, etc.). Para una verificación local rápida:
```
npm run preview
```
- http://localhost:4173/

## 🤝 Contribuciones
¡Se agradecen ideas y PRs! Abre issues en el repositorio para discutir mejoras.

## 📄 Licencia
Este proyecto se publica con fines de portafolio. La licencia puede ser definida en futuras versiones.

## ✨ Autor
- Miguel Aude — https://www.audedev.com/
- GitHub: https://github.com/mikeaude1
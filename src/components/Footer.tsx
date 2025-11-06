export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="brand">
        <img src="/audedev-logo.svg" alt="AudeDev logo" width={20} height={20} />
        <strong>AudeDev</strong>
      </div>
      <div className="links">
        <a className="btn" href="https://github.com/mikeaude1" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5s0-1 0-2c-2.9.6-3.5-1.4-3.5-1.4a2.8 2.8 0 0 0-1.2-1.5c-1-.7.1-.7.1-.7a2.1 2.1 0 0 1 1.6 1.1c1 .1 2-.8 2-.8a2.2 2.2 0 0 1 .6-1.4c-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5a2.5 2.5 0 0 1 .7 2c0 1.4 0 2.4 0 2.7s.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>
          <span className="label">GitHub</span>
        </a>
        <a className="btn" href="https://www.linkedin.com/in/miguel-aude-alcaraz-845aa4205/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 0 0 5.01 2.5 2.5 0 0 0 0-5.01ZM3.5 9h3v12h-3V9Zm7 0h2.9v1.7h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V21h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-3V9Z"/></svg>
          <span className="label">LinkedIn</span>
        </a>
        <a className="btn" href="https://wa.me/526144069420" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 3.9A10 10 0 0 0 4 17.2L3 21l3.9-1A10 10 0 0 0 20 3.9Zm-8 16a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm4.7-5.3c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1-.5.7-.7.8-.3.2-.5.1a6.5 6.5 0 0 1-3.8-3.3c-.3-.5.3-.5.8-1.8a.4.4 0 0 0 0-.4c-.1-.2-.5-1.2-.7-1.6s-.4-.4-.5-.4h-.4a.8.8 0 0 0-.5.3 2.1 2.1 0 0 0-.7 1.6 3.6 3.6 0 0 0 .8 1.9 8.1 8.1 0 0 0 4.2 4.5 3.6 3.6 0 0 0 1.9.5 2 2 0 0 0 1.3-.9 1.6 1.6 0 0 0 .1-1.3c0-.1-.3-.1-.5-.2Z"/></svg>
          <span className="label">WhatsApp</span>
        </a>
      </div>
      <small>Copyright © {year} Miguel Aude (AudeDev). Todos los derechos reservados.</small>
      <small>Este portafolio es informativo y muestra proyectos y experiencias de Miguel Aude (AudeDev).</small>
    </footer>
  )
}
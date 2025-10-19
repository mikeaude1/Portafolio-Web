import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="brand" style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
        <img src="/audedev-logo.svg" alt="AudeDev logo" width={24} height={24} />
        <span>AudeDev</span>
      </div>

      <button
        className="menu-toggle"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="primary-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          {open ? (
            <>
              <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      <nav id="primary-menu" className={`links ${open ? 'open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeMenu}><span className="label">Inicio</span></NavLink>
        <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeMenu}><span className="label">Sobre mí</span></NavLink>
        <NavLink to="/diplomas" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeMenu}><span className="label">Diplomas</span></NavLink>
        <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeMenu}><span className="label">Proyectos</span></NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : undefined} onClick={closeMenu}><span className="label">Contacto</span></NavLink>
      </nav>
    </header>
  )
}
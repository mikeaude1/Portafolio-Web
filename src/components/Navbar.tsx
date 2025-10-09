import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand" style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
        <img src="/audedev-logo.svg" alt="AudeDev logo" width={24} height={24} />
        <span>AudeDev</span>
      </div>
      <nav className="links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}><span className="label">Inicio</span></NavLink>
        <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'active' : undefined}><span className="label">Sobre mí</span></NavLink>
        <NavLink to="/diplomas" className={({ isActive }) => isActive ? 'active' : undefined}><span className="label">Diplomas</span></NavLink>
        <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : undefined}><span className="label">Proyectos</span></NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : undefined}><span className="label">Contacto</span></NavLink>
      </nav>
    </header>
  )
}
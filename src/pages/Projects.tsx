import { Link } from 'react-router-dom'

export default function Projects() {
  const projects = [
    {
      name: 'Encuesta a Empresas',
      description: 'Modulo en pagina https://proyecta.utch.edu.mx/ para evaluar a la satisfacción de las empresas a cerca de las practicas profecionales de los alumnos.',
      image: '/images/projects/EvaluacionEmpresa.jpg',
      repo: '',
      demo: '',
      tags: ['Java 8', 'Play Framework', 'jQuery' , 'MetroUI','MySql','html5','css3','javascript'],
      status: ['info'],
      info: '/evaluacion',
    },
    {
      name: 'Portfolio Web',
      description: 'Sitio personal con React + Vite y diseño moderno.',
      image: '/images/projects/portafolio.jpg',
      repo: 'https://github.com/mikeaude1/Portafolio-Web.git',
      demo: 'https://www.audedev.com/',
      tags: ['React', 'Vite', 'CSS'],
      status: ['online','repo'],
      info: '',
    },
    {
      name: 'API de Cursos',
      description: 'API REST para gestionar cursos y alumnos.',
      image: '/images/projects/api.jpg',
      repo: 'https://github.com/mikeaude1/API-REST-COURSES-ALUMNS.git',
      demo: '',
      tags: ['Node.js', 'Express', 'MongoDB'],
      status: ['repo','online'],
      info: '',
    },
    {
      name: 'Molinar-slayer',
      description: 'Proyecto Django para despacho legal. Demo en línea disponible.',
      image: '/images/projects/molinarslayer.jpg',
      repo: 'https://github.com/mikeaude1/Molinar-slayer',
      demo: 'https://molinarlayer.audedev.com/',
      tags: ['javascript', 'css', 'python', 'django', 'html5','React', 'Vite', 'CSS'],
      status: ['repo','online'],
      info: '',
    },
  ] as const;

  return (
    <section className="page projects">
      <h2>Proyectos</h2>
      <p>Lista de proyectos personales con enlaces a repositorios y demos.</p>

      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-thumb">
              {p.image ? (
                <img src={p.image} alt={p.name} />
              ) : (
                <div className="thumb-fallback">{(p as typeof projects[number]).name.charAt(0)}</div>
              )}
            </div>
            <div className="project-info">
              <h3 className="project-title">
                {p.name}
                {Array.isArray(p.status) && p.status.includes('local') && (
                  <span className="badge local" title="Solo ambiente local">Local</span>
                )}
              </h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-actions">
              {p.repo && (
                <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">Repo</a>
              )}
              {p.demo && (
                <a className="btn" href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
              )}
              {p.info && (
                <Link className="btn" to={p.info}>Info</Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
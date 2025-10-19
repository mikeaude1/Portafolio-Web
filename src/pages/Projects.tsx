export default function Projects() {
  const projects = [
    {
      name: 'Portfolio Web',
      description: 'Sitio personal con React + Vite y diseño moderno.',
      image: '/projects/portfolio-cover.png',
      repo: 'https://github.com/mikeaude1/Portafolio-Web.git',
      demo: 'https://www.audedev.com/',
      tags: ['React', 'Vite', 'CSS'],
      status: 'online',
    },
    {
      name: 'API de Cursos',
      description: 'API REST para gestionar cursos y alumnos.',
      image: '/projects/api-cursos.png',
      repo: 'https://github.com/mikeaude1/API-REST-COURSES-ALUMNS.git',
      demo: '',
      tags: ['Node.js', 'Express', 'MongoDB'],
      status: 'repo',
    },
    {
      name: 'Molinar-slayer',
      description: 'Proyecto Django para despacho legal. Solo ambiente local (sin acceso a producción).',
      image: '',
      repo: 'https://github.com/mikeaude1/Molinar-slayer',
      demo: '',
      tags: ['javascript', 'css', 'python', 'django', 'html5'],
      status: 'local',
    },
  ] as const;

  // Resolver rutas con base y proveer fallback de imagen en caso de error
  const toSrc = (path: string) => import.meta.env.BASE_URL + (path?.startsWith('/') ? path.slice(1) : path);
  const fallbackImage = '/audedev-logo.svg';

  return (
    <section className="page projects">
      <h2>Proyectos</h2>
      <p>Lista de proyectos personales con enlaces a repositorios y demos.</p>

      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-thumb">
              {p.image ? (
                <img
                  src={toSrc(p.image)}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = toSrc(fallbackImage); }}
                />
              ) : (
                <div className="thumb-fallback">{p.name.charAt(0)}</div>
              )}
            </div>
            <div className="project-info">
              <h3 className="project-title">{p.name} {p.status === 'local' && (<span className="badge local" title="Solo ambiente local">Local</span>)}</h3>
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
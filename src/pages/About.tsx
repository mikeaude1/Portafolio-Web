import reactLogo from '../assets/react.svg'
import { useEffect, useRef } from 'react'

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const compute = () => {
      const carousel = track.parentElement as HTMLElement | null
      if (!carousel) return

      const children = Array.from(track.children) as HTMLElement[]
      const originalCount = Math.floor(children.length / 2) || children.length
      const gapVar = getComputedStyle(carousel).getPropertyValue('--gap')
      const gap = parseFloat(gapVar) || 12

      const originalWidth = children.slice(0, originalCount)
        .reduce((sum, el) => sum + el.offsetWidth, 0) + gap * (originalCount - 1)

      track.style.setProperty('--marquee-end', `-${originalWidth}px`)

      const speed = 120 // px por segundo (más rápido)
      const duration = originalWidth / speed
      track.style.setProperty('--marquee-duration', `${duration}s`)
    }

    compute()
    const onResize = () => compute()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section className="page about">
      <h2>Sobre mí:</h2>

      <p>
        Soy Miguel Aude Alcaraz, ingeniero en sistemas computacionales egresado de la Universidad Tecnológica de Chihuahua.
      </p>
      <p>
        Cuento con experiencia en el desarrollo de aplicaciones web completas, desde la lógica de negocio y el manejo de bases de datos hasta la creación de interfaces intuitivas y funcionales.
      </p>
      <p>
        A lo largo de mi trayectoria he participado en proyectos académicos y profesionales que me han permitido fortalecer mis conocimientos en programación, diseño estructurado y buenas prácticas de desarrollo.
      </p>
      <p>
        Entre mis principales logros destacan la finalización del programa de inglés de la Facultad de Filosofía y Letras, la aprobación del examen en la Escuela Judicial como técnico en videograbación, y la culminación de mi carrera universitaria como ingeniero en sistemas.
      </p>
      <p>
        Me considero una persona comprometida, analítica y autodidacta, con gusto por el aprendizaje continuo y la resolución de problemas.
      </p>
      <p>
        Mis habilidades principales incluyen el trabajo en equipo, la organización, la adaptabilidad, la atención al detalle y la capacidad para transformar ideas en soluciones tecnológicas efectivas.
      </p>
      <p>
        Actualmente sigo fortaleciendo mis conocimientos y buscando nuevos retos que me permitan crecer como desarrollador y aportar valor a cada proyecto en el que participo.
      </p>

      <div className="tech-section">
        <h3 style={{ textAlign: 'center' }}>Tecnologías y herramientas que utilizo</h3>
        <div className="tech-carousel" aria-label="Carrusel de tecnologías">
          <div className="tech-track" ref={trackRef}>
          {/* React + ecosistema del proyecto */}
          <a className="tech react" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} alt="React" className="icon" />
            <span className="label">React</span>
          </a>
          <a className="tech router" href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h6m4 0h6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="10" cy="12" r="3" fill="currentColor" />
              <circle cx="14" cy="12" r="3" fill="currentColor" opacity="0.4" />
            </svg>
            <span className="label">React Router</span>
          </a>
          <a className="tech vite" href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
            <img src="/vite.svg" alt="Vite" className="icon" />
            <span className="label">Vite</span>
          </a>
          <a className="tech ts" href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
              <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(255,255,255)">TS</text>
            </svg>
            <span className="label">TypeScript</span>
          </a>
          <a className="tech eslint" href="https://eslint.org/docs/latest/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" fill="currentColor" />
              <circle cx="12" cy="12" r="4" fill="rgb(255,255,255)" />
            </svg>
            <span className="label">ESLint</span>
          </a>
          <a className="tech plugin-react" href="https://github.com/vitejs/vite-plugin-react" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
            </svg>
            <span className="label">@vitejs/plugin-react</span>
          </a>
          <a className="tech node" href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgb(255,255,255)">Node</text>
            </svg>
            <span className="label">Node.js</span>
          </a>

          {/* Herramientas y tecnologías del README */}
          <a className="tech java" href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="currentColor" />
            </svg>
            <span className="label">Java</span>
          </a>
          <a className="tech play" href="https://www.playframework.com/documentation/latest/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="7,5 19,12 7,19" fill="currentColor" />
            </svg>
            <span className="label">Play Framework</span>
          </a>
          <a className="tech python" href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="5" width="16" height="7" rx="3" fill="currentColor" />
              <rect x="4" y="12" width="16" height="7" rx="3" fill="currentColor" opacity="0.6" />
            </svg>
            <span className="label">Python</span>
          </a>
          <a className="tech django" href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgb(255,255,255)">Dj</text>
            </svg>
            <span className="label">Django</span>
          </a>
          <a className="tech angular" href="https://angular.io/docs" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgb(255,255,255)">A</text>
            </svg>
            <span className="label">Angular</span>
          </a>
          <a className="tech javascript" href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="currentColor" />
              <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="800">JS</text>
            </svg>
            <span className="label">JavaScript</span>
          </a>
          {/* ya está TypeScript arriba */}
          <a className="tech jquery" href="https://api.jquery.com/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 15c3-6 11-6 14 0" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="label">jQuery</span>
          </a>
          <a className="tech html" href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 6h14M5 12h10M5 18h14" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="label">HTML5</span>
          </a>
          <a className="tech css" href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6h12L16 18H8z" fill="currentColor" />
            </svg>
            <span className="label">CSS3</span>
          </a>
          <a className="tech mysql" href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <ellipse cx="12" cy="6" rx="7" ry="3" fill="currentColor" />
              <rect x="5" y="6" width="14" height="9" fill="currentColor" />
              <ellipse cx="12" cy="15" rx="7" ry="3" fill="currentColor" />
            </svg>
            <span className="label">MySQL</span>
          </a>
          <a className="tech tortoisesvn" href="https://tortoisesvn.net/docs/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="6" width="16" height="12" rx="3" fill="currentColor" />
            </svg>
            <span className="label">TortoiseSVN</span>
          </a>
          <a className="tech svn" href="https://subversion.apache.org/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="label">Subversion (SVN)</span>
          </a>
          <a className="tech navicat" href="https://docs.navicat.com/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="8" cy="12" r="4" fill="currentColor" />
              <circle cx="16" cy="12" r="4" fill="currentColor" opacity="0.6" />
            </svg>
            <span className="label">Navicat</span>
          </a>
          <a className="tech firebase" href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="6,18 10,6 14,12 18,4 18,18" fill="currentColor" />
            </svg>
            <span className="label">Firebase</span>
          </a>
          {/* Duplicado para loop continuo sin saltos */}
          <a className="tech react" href="https://react.dev/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <img src={reactLogo} alt="React" className="icon" />
            <span className="label">React</span>
          </a>
          <a className="tech router" href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h6m4 0h6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="10" cy="12" r="3" fill="currentColor" />
              <circle cx="14" cy="12" r="3" fill="currentColor" opacity="0.4" />
            </svg>
            <span className="label">React Router</span>
          </a>
          <a className="tech vite" href="https://vite.dev/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <img src="/vite.svg" alt="Vite" className="icon" />
            <span className="label">Vite</span>
          </a>
          <a className="tech ts" href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
              <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(255,255,255)">TS</text>
            </svg>
            <span className="label">TypeScript</span>
          </a>
          <a className="tech eslint" href="https://eslint.org/docs/latest/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" fill="currentColor" />
              <circle cx="12" cy="12" r="4" fill="rgb(255,255,255)" />
            </svg>
            <span className="label">ESLint</span>
          </a>
          <a className="tech plugin-react" href="https://github.com/vitejs/vite-plugin-react" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
            </svg>
            <span className="label">@vitejs/plugin-react</span>
          </a>
          <a className="tech node" href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgb(255,255,255)">Node</text>
            </svg>
            <span className="label">Node.js</span>
          </a>
          <a className="tech java" href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="currentColor" />
            </svg>
            <span className="label">Java</span>
          </a>
          <a className="tech play" href="https://www.playframework.com/documentation/latest/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="7,5 19,12 7,19" fill="currentColor" />
            </svg>
            <span className="label">Play Framework</span>
          </a>
          <a className="tech python" href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="5" width="16" height="7" rx="3" fill="currentColor" />
              <rect x="4" y="12" width="16" height="7" rx="3" fill="currentColor" opacity="0.6" />
            </svg>
            <span className="label">Python</span>
          </a>
          <a className="tech django" href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgb(255,255,255)">Dj</text>
            </svg>
            <span className="label">Django</span>
          </a>
          <a className="tech angular" href="https://angular.io/docs" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgb(255,255,255)">A</text>
            </svg>
            <span className="label">Angular</span>
          </a>
          <a className="tech javascript" href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="currentColor" />
              <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="800">JS</text>
            </svg>
            <span className="label">JavaScript</span>
          </a>
          <a className="tech jquery" href="https://api.jquery.com/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 15c3-6 11-6 14 0" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="label">jQuery</span>
          </a>
          <a className="tech html" href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 6h14M5 12h10M5 18h14" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="label">HTML5</span>
          </a>
          <a className="tech css" href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6h12L16 18H8z" fill="currentColor" />
            </svg>
            <span className="label">CSS3</span>
          </a>
          <a className="tech mysql" href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <ellipse cx="12" cy="6" rx="7" ry="3" fill="currentColor" />
              <rect x="5" y="6" width="14" height="9" fill="currentColor" />
              <ellipse cx="12" cy="15" rx="7" ry="3" fill="currentColor" />
            </svg>
            <span className="label">MySQL</span>
          </a>
          <a className="tech tortoisesvn" href="https://tortoisesvn.net/docs/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="6" width="16" height="12" rx="3" fill="currentColor" />
            </svg>
            <span className="label">TortoiseSVN</span>
          </a>
          <a className="tech svn" href="https://subversion.apache.org/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="label">Subversion (SVN)</span>
          </a>
          <a className="tech navicat" href="https://docs.navicat.com/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="8" cy="12" r="4" fill="currentColor" />
              <circle cx="16" cy="12" r="4" fill="currentColor" opacity="0.6" />
            </svg>
            <span className="label">Navicat</span>
          </a>
          <a className="tech firebase" href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="6,18 10,6 14,12 18,4 18,18" fill="currentColor" />
            </svg>
            <span className="label">Firebase</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}
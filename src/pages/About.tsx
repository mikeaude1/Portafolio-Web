import reactLogo from '../assets/react.svg'
import { useEffect, useRef } from 'react'

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const compute = () => {
      const half = track.scrollWidth / 2
      track.style.setProperty('--marquee-end', `-${half}px`)
      const speed = 80 // px por segundo
      const duration = half / speed
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
              <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">TS</text>
            </svg>
            <span className="label">TypeScript</span>
          </a>
          <a className="tech eslint" href="https://eslint.org/docs/latest/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" fill="currentColor" />
              <circle cx="12" cy="12" r="4" fill="#fff" />
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
              <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Node</text>
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
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Dj</text>
            </svg>
            <span className="label">Django</span>
          </a>
          <a className="tech angular" href="https://angular.io/docs" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">A</text>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" version="1.0" viewBox="-23.58021 -23.5205 204.36182 141.123"><path d="M129.539.875H21.576v78.762H129.54V.875z" fill="#809cc9"/><path d="M130.473 0l1.662 6.583c-15.285 2.216-28.886 4.828-40.802 7.837-12.857 3.247-23.198 6.546-31.025 9.896-7.844 3.284-11.507 5.952-10.99 8 .456 1.807 3.735 2.626 9.863 2.453 3.141-.058 8.252-.399 15.335-1.028 7.083-.626 16.221-1.536 27.415-2.726 20.599-2.144 34.762-3.077 42.491-2.8 7.711.21 11.944 1.784 12.688 4.725 1.007 3.988-6.304 9.331-21.931 16.026-15.657 6.633-35.88 13.076-60.652 19.332-20.854 5.265-38.833 9.029-53.939 11.291l-1.645-6.51c17.868-2.555 33.937-5.633 48.205-9.236 13.326-3.364 23.594-6.629 30.8-9.799 7.205-3.169 10.533-5.84 9.983-8.019-.477-1.886-3.805-2.849-9.973-2.891-3.159.034-7.51.257-13.062.668-5.566.414-12.479 1.056-20.739 1.923-12.814 1.375-23.462 2.415-31.93 3.121-8.48.709-14.801 1.051-18.976 1.03-8.01-.074-12.39-1.62-13.15-4.628-1.024-4.061 5.74-9.195 20.295-15.403 14.707-6.268 34.63-12.576 59.795-18.93C97.595 6.521 114.355 2.883 130.473 0z" fill="#fff"/><path d="M26.226 56.078c.279 0 .521.105.728.316.205.205.309.451.309.736 0 .297-.104.548-.309.754-.206.205-.454.308-.745.308-.297 0-.548-.103-.753-.309-.206-.211-.309-.462-.309-.753 0-.297.103-.545.309-.745.21-.204.467-.307.77-.307zm0 6.803c.279 0 .521.107.728.318.205.207.309.456.309.748s-.104.541-.309.748c-.217.201-.465.301-.745.301-.148 0-.287-.027-.415-.082a1.0751 1.0751 0 01-.338-.223 1.0053 1.0053 0 01-.228-.336c-.055-.129-.081-.268-.081-.417 0-.292.103-.542.309-.748.21-.206.467-.309.77-.309zm3.654-6.803c.28 0 .522.105.728.316.206.205.309.451.309.736 0 .297-.103.548-.309.754-.205.205-.453.308-.744.308-.297 0-.549-.103-.754-.309-.206-.211-.309-.462-.309-.753 0-.297.103-.545.309-.745.211-.204.468-.307.77-.307zm0 6.803c.28 0 .522.107.728.318.206.207.309.456.309.748s-.103.541-.309.748c-.217.201-.465.301-.744.301-.148 0-.287-.027-.416-.082a1.0751 1.0751 0 01-.338-.223 1.0027 1.0027 0 01-.227-.336c-.055-.129-.082-.268-.082-.417 0-.292.103-.542.309-.748.211-.206.468-.309.77-.309z" fill="#fff"/><path d="M27.813 87.417c0 .433-.111.822-.334 1.167-.223.345-.549.615-.979.811-.429.195-.938.293-1.525.293-.706 0-1.288-.134-1.746-.4-.326-.191-.591-.448-.794-.769-.204-.321-.306-.633-.306-.936 0-.176.061-.326.184-.452.121-.125.277-.188.466-.188.153 0 .282.049.389.146.107.097.196.243.271.436.091.228.189.418.296.571.105.153.254.279.447.379.191.1.444.149.758.149.43 0 .779-.101 1.048-.301.269-.2.403-.451.403-.75 0-.238-.072-.432-.218-.58-.145-.147-.332-.261-.562-.339-.23-.078-.537-.161-.922-.249-.515-.121-.945-.262-1.293-.424-.347-.16-.622-.381-.825-.659-.204-.278-.306-.625-.306-1.038 0-.395.107-.745.322-1.051.215-.307.525-.542.932-.707.407-.164.885-.246 1.436-.246.438 0 .818.055 1.139.163.32.109.587.255.798.435.212.182.366.371.464.57.098.198.146.393.146.581 0 .173-.061.328-.182.467-.122.139-.273.208-.455.208-.165 0-.291-.042-.376-.125-.086-.083-.179-.219-.279-.408-.131-.271-.287-.481-.47-.633-.183-.152-.476-.227-.88-.227-.374 0-.677.082-.906.246-.229.165-.345.363-.345.594 0 .144.039.268.117.372.078.104.186.193.322.269.136.076.275.134.416.176.141.043.371.104.694.186.402.095.767.199 1.093.313.326.114.604.252.832.415.229.163.408.369.536.618.128.249.194.556.194.917zm5.752-.813V83.16c0-.293.066-.513.198-.659.132-.146.306-.22.521-.22.226 0 .404.073.536.22.132.147.198.367.198.661v3.529c0 .401.045.736.134 1.006.089.27.247.479.475.627.227.148.545.223.954.223.564 0 .963-.151 1.196-.453.233-.302.351-.76.351-1.373v-3.559c0-.297.065-.519.195-.664.131-.145.305-.217.523-.217.218 0 .396.072.531.217.135.146.203.366.203.663v3.448c0 .561-.055 1.028-.164 1.403-.109.375-.315.705-.619.989-.26.238-.562.412-.906.521-.346.109-.748.165-1.21.165-.55 0-1.022-.061-1.419-.179-.396-.119-.721-.303-.971-.552-.25-.249-.434-.568-.551-.958-.117-.388-.175-.853-.175-1.394zm15.137 2.958h-2.19c-.316 0-.542-.071-.677-.213-.136-.142-.203-.367-.203-.676v-5.38c0-.315.069-.542.208-.681.138-.139.362-.207.672-.207h2.323c.342 0 .639.021.89.062.251.041.476.123.675.242.169.101.318.229.448.383s.229.325.298.512c.068.188.103.385.103.593 0 .716-.357 1.239-1.073 1.571.939.3 1.41.884 1.41 1.751 0 .401-.103.763-.308 1.083-.205.321-.481.559-.829.712-.219.091-.47.154-.754.191-.284.039-.615.057-.993.057zm-1.618-6.078v1.859h1.33c.361 0 .641-.035.838-.104.197-.069.348-.199.453-.393.081-.137.122-.291.122-.461 0-.363-.129-.604-.387-.724-.257-.119-.65-.179-1.178-.179h-1.178zm1.511 2.891h-1.511v2.109h1.56c.981 0 1.472-.357 1.472-1.07 0-.364-.127-.629-.381-.793-.255-.164-.635-.246-1.14-.246z" fill="#809cc9"/><path d="M58.396 83.232l1.618 4.799 1.624-4.833c.085-.254.147-.431.19-.529.042-.099.111-.188.209-.269.098-.081.231-.119.4-.119.123 0 .238.03.344.092.105.062.188.145.248.247.061.103.091.206.091.311 0 .071-.01.149-.029.231-.02.084-.044.165-.073.245-.029.079-.059.162-.088.246l-1.73 4.681c-.062.179-.124.35-.186.511-.062.161-.133.303-.215.425-.081.122-.189.223-.324.301-.135.077-.3.117-.494.117-.195 0-.36-.039-.495-.115a.934.934 0 01-.327-.303c-.083-.125-.155-.268-.217-.428a16.42 16.42 0 01-.186-.508l-1.701-4.642c-.029-.084-.06-.167-.091-.249-.03-.081-.057-.169-.077-.264-.021-.094-.032-.174-.032-.239 0-.166.066-.317.2-.454.133-.137.301-.205.502-.205.247 0 .422.075.524.227.102.152.208.392.315.724zm15.043.284h-3.267v1.766h3.008c.221 0 .387.049.496.148.108.1.163.23.163.393s-.054.296-.161.398c-.107.102-.273.154-.498.154h-3.008v2.047h3.379c.228 0 .399.052.516.156.115.105.173.244.173.418 0 .168-.058.305-.173.409-.116.104-.288.157-.516.157H69.61c-.316 0-.544-.07-.683-.211-.139-.14-.208-.365-.208-.678v-5.38c0-.208.031-.378.093-.51s.159-.228.291-.288c.132-.06.301-.09.507-.09h3.829c.231 0 .403.051.515.152.113.102.169.234.169.399 0 .168-.056.303-.169.404-.112.105-.284.156-.515.156zm8.394 2.984h-.507v2.303c0 .303-.066.525-.201.669-.133.144-.308.216-.523.216-.231 0-.41-.075-.538-.225-.127-.15-.19-.37-.19-.66v-5.508c0-.312.07-.539.21-.68.14-.14.366-.209.679-.209h2.357c.325 0 .604.014.835.041.23.027.439.083.625.166.224.095.423.23.595.406.173.176.304.38.393.612.09.233.135.479.135.74 0 .534-.15.96-.451 1.279-.301.319-.758.546-1.369.679.257.137.502.339.736.605.234.268.443.552.628.854.184.301.327.573.429.815.104.243.154.41.154.501 0 .095-.03.188-.09.281-.061.093-.143.166-.247.22-.104.054-.224.081-.36.081-.163 0-.3-.039-.41-.115-.111-.076-.206-.174-.285-.291-.08-.117-.188-.29-.324-.519l-.581-.968c-.208-.355-.395-.625-.559-.812-.164-.186-.331-.312-.5-.381-.169-.069-.384-.1-.641-.1zm.83-3.016h-1.336v1.984h1.297c.348 0 .641-.031.878-.092s.419-.164.544-.31c.125-.146.188-.348.188-.604 0-.2-.051-.377-.151-.529-.1-.152-.24-.267-.419-.343-.17-.07-.503-.106-1.001-.106zm14.352 3.933c0 .433-.111.822-.334 1.167-.223.345-.549.615-.978.811-.43.195-.938.293-1.527.293-.705 0-1.287-.134-1.745-.4-.326-.191-.591-.448-.794-.769-.204-.321-.306-.633-.306-.936 0-.176.062-.326.183-.452.123-.125.278-.188.467-.188.153 0 .283.049.389.146.106.097.196.243.271.436.091.228.189.418.295.571.106.153.256.279.447.379.193.1.445.149.758.149.431 0 .779-.101 1.049-.301.269-.2.403-.451.403-.75 0-.238-.072-.432-.218-.58-.145-.147-.332-.261-.562-.339-.229-.078-.536-.161-.921-.249-.515-.121-.945-.262-1.292-.424-.348-.16-.623-.381-.826-.659-.204-.278-.306-.625-.306-1.038 0-.395.107-.745.322-1.051.215-.307.525-.542.932-.707.407-.164.886-.246 1.435-.246.439 0 .819.055 1.14.163.32.109.587.255.798.435.212.182.366.371.464.57.098.198.146.393.146.581 0 .173-.061.328-.183.467-.121.139-.272.208-.454.208-.165 0-.29-.042-.376-.125-.086-.083-.18-.219-.279-.408-.131-.271-.287-.481-.47-.633-.183-.152-.476-.227-.88-.227-.375 0-.677.082-.906.246-.23.165-.345.363-.345.594 0 .144.039.268.117.372.078.104.186.193.323.269.137.075.275.134.415.176.14.043.371.104.694.186.402.095.767.199 1.093.313.326.114.604.252.833.415.229.163.406.369.535.618.129.25.193.556.193.917zm5.799 1.386V83.16c0-.293.066-.513.2-.659.134-.146.307-.22.52-.22.218 0 .395.072.53.217.136.146.203.365.203.662v5.643c0 .297-.067.518-.203.664-.136.146-.312.221-.53.221-.209 0-.382-.074-.517-.223-.136-.149-.203-.369-.203-.662zm10.715-6.522c.741 0 1.377.15 1.908.451.531.302.934.73 1.207 1.285.272.556.409 1.207.409 1.957 0 .553-.075 1.057-.225 1.51-.149.452-.373.845-.672 1.177-.3.332-.667.587-1.103.763-.436.175-.935.264-1.496.264-.56 0-1.06-.091-1.501-.271-.442-.181-.812-.436-1.107-.765-.295-.329-.519-.725-.67-1.187-.151-.463-.227-.963-.227-1.5 0-.551.078-1.056.236-1.515.158-.46.386-.851.686-1.173.299-.322.662-.569 1.092-.74.43-.171.917-.256 1.463-.256zm2.055 3.684c0-.527-.084-.984-.254-1.37-.168-.386-.409-.679-.723-.876-.313-.198-.674-.297-1.079-.297-.289 0-.556.055-.802.164-.244.109-.456.27-.633.479-.177.209-.316.477-.419.803-.103.326-.153.691-.153 1.098 0 .408.051.778.153 1.109.103.33.247.604.434.822.187.217.401.38.643.488.242.107.508.162.797.162.37 0 .71-.094 1.021-.28.311-.186.557-.475.74-.864.184-.389.275-.87.275-1.438zm9.107-2.815l2.798 4.225v-4.264c0-.276.059-.484.178-.623.118-.139.277-.207.479-.207.208 0 .371.068.492.207.119.139.18.346.18.623v5.633c0 .629-.26.943-.78.943-.13 0-.247-.02-.351-.057a.8943.8943 0 01-.293-.179 1.7269 1.7269 0 01-.254-.286c-.078-.109-.155-.221-.233-.335l-2.729-4.175v4.199c0 .274-.063.481-.19.621-.128.141-.29.211-.489.211-.205 0-.37-.071-.494-.213-.124-.142-.186-.348-.186-.618V83.33c0-.234.025-.418.078-.552.062-.146.164-.267.309-.359.143-.093.298-.139.465-.139.13 0 .242.021.335.063.093.042.174.099.244.171.07.072.142.164.216.278.071.116.146.235.225.358z" fill="#999"/><path d="M21.08 93.582h108.255" fill="none" stroke="#809cc9"/></svg>
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

          {/* Duplicación para scroll infinito */}
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
              <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">TS</text>
            </svg>
            <span className="label">TypeScript</span>
          </a>
          <a className="tech eslint" href="https://eslint.org/docs/latest/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" fill="currentColor" />
              <circle cx="12" cy="12" r="4" fill="#fff" />
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
              <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Node</text>
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
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Dj</text>
            </svg>
            <span className="label">Django</span>
          </a>
          <a className="tech angular" href="https://angular.io/docs" target="_blank" rel="noopener noreferrer">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="currentColor" />
              <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">A</text>
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
        </div>
      </div>
      </div>
    </section>
  )
}
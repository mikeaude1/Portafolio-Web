export default function Home() {
  return (
    <section className="page">
      <div className="hero-header">
        <div className="hero-avatar">
          <img src="/foto-cv.png" alt="Foto de AudeDev" width={140} height={140} />
        </div>
        <h1>Hola, soy Miguel</h1>
      </div>
      <p>
        Soy <span className="accent-cyan">Ingeniero en Sistemas Computacionales</span> egresado de la Universidad Autónoma de Chihuahua de la facultad de Ingeniería.</p>
      <p>
        Me apasiona crear aplicaciones web funcionales y optimizadas, combinando frontend moderno <span className="accent-cyan">(React, Node, Angular)</span> con backend sólido <span className="accent-cyan">(Java, Play Framework o Python, Django Framework)</span>.
        En este portafolio encontrarás una muestra de mis proyectos personales, certificaciones y logros profesionales, además de un vistazo a mi camino como programador en constante aprendizaje.
      </p>
    </section>
  )
}
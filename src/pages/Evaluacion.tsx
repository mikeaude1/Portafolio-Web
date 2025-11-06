import { Link } from 'react-router-dom'

export default function Evaluacion() {
  return (
    <section className="page projects">
      <div className="project-container">
        <div className="actions" style={{ marginBottom: '0.75rem' }}>
          <Link className="btn" to="/proyectos">
            <span className="label">Volver a Proyectos</span>
          </Link>
        </div>

        <h2 className="project-title">Evaluación de Satisfacción a Empresas</h2>

        <p>
          Este proyecto fue desarrollado para crear un <strong>módulo de evaluación de satisfacción</strong> que permite a la universidad obtener retroalimentación de las empresas que
          reciben estudiantes para realizar sus <strong>Prácticas Profesionales</strong>. El objetivo fue diseñar una plataforma dinámica y fácil de usar que facilitara la recopilación,
          análisis y visualización de datos sobre el desempeño de los alumnos y la satisfacción general de las empresas.
        </p>

        <p>
          El desarrollo de este módulo me permitió aplicar mis conocimientos de <strong>Java (Play Framework), MySQL, jQuery, HTML, CSS y JavaScript</strong>, siguiendo el patrón
          <strong> MVC </strong> y principios de <strong>Programación Orientada a Objetos</strong> para garantizar una arquitectura limpia, mantenible y escalable.
        </p>

        <p>
          La solución se divide en dos secciones principales: una para el área administrativa y otra para las empresas que participan en el programa de prácticas profesionales.
        </p>

        <p>La primera parte corresponde a la <strong>sección del administrador</strong>, donde se crean los formularios de evaluación.</p>

        <p>
          Estos formularios constan de dos tipos de preguntas: <strong>abiertas</strong> y <strong>calificables</strong>. Las preguntas abiertas permiten a las empresas expresar sus
          opiniones libremente, mientras que las calificables ayudan a medir la satisfacción numéricamente para facilitar el análisis y la comparación de resultados.
        </p>

        <p>
          El usuario del área correspondiente puede crear formularios personalizados, definir la cantidad de estrellas para cada pregunta, publicar las encuestas cuando estén listas y
          administrar su ciclo de vida de forma sencilla y segura.
        </p>

        <strong>Puedes ver un ejemplo de cómo se ve el formulario de evaluación a continuación:</strong>

        <div className="img-container">
          <img src="/images/projects/paneldecontrol.jpg" alt="Panel de Control" />
        </div>
        <div className="img-container">
          <img src="/images/projects/EvaluacionEmpresa.jpg" alt="Tabla de Preguntas" />
        </div>
        <div className="img-container">
          <img src="/images/projects/crearpregunta.jpg" alt="Nueva Pregunta" />
        </div>

        <p>
          Una vez recopiladas las respuestas, se procesan mediante un módulo de <strong>análisis de datos</strong> que identifica patrones, tendencias y áreas de mejora en la
          satisfacción de las empresas.
        </p>

        <p>
          Los resultados se presentan mediante <strong>tablas y gráficos interactivos</strong>, y se pueden consultar por periodos escolares específicos, lo que facilita el seguimiento
          histórico de los niveles de satisfacción.
        </p>

        <p>
          Además, el usuario puede <strong>exportar los resultados a Excel</strong> para realizar análisis adicionales o compartirlos con otras áreas.
        </p>

        <strong>Puedes ver un ejemplo de cómo se ve la tabla de resultados a continuación:</strong>

        <div className="section-image">
          <div className="img-container">
            <img src="/images/projects/resultados.jpg" alt="Tabla de Resultados" />
          </div>
          <div className="img-container">
            <img src="/images/projects/resultados2.jpg" alt="Tabla de Resultados" />
          </div>
        </div>

        <p>
          La segunda parte corresponde a la <strong>sección de la empresa</strong>, donde se muestran las encuestas pendientes de contestar. Las empresas pueden iniciar sesión,
          consultar sus encuestas disponibles y responder de manera intuitiva.
        </p>

        <p>
          Al acceder, las empresas verán un listado de encuestas pendientes asociadas a sus vacantes expiradas. Un <strong>popup</strong> les notifica las vacantes pendientes de cierre,
          y antes de finalizar el proceso, se les solicita completar la encuesta correspondiente.
        </p>

        <p>
          Esto garantiza que la universidad reciba retroalimentación antes de cerrar formalmente una vacante, manteniendo actualizado el registro de prácticas profesionales.
        </p>

        <strong>Puedes ver un ejemplo de cómo se ve la encuesta pendiente de contestar a continuación:</strong>

        <div className="section-image">
          <div className="img-container">
            <img src="/images/projects/cerrarvacante.jpg" alt="Cerrar Vacante" />
          </div>
          <div className="img-container">
            <img src="/images/projects/encuesta.jpg" alt="Contestar Encuesta" />
          </div>
        </div>

        <div className="conclucion">
          <h3>Conclusión y Resultados</h3>
          <p>
            El módulo de <strong>Evaluación de Satisfacción a Empresas</strong> fortaleció significativamente la comunicación entre la universidad y las empresas, además de mejorar la
            calidad de los datos recolectados y optimizar la toma de decisiones institucionales.
          </p>

          <ul>
            <li>Automatizó la creación, publicación y análisis de encuestas en un solo flujo controlado.</li>
            <li>Mejoró la trazabilidad del proceso y la calidad de la información obtenida.</li>
            <li>Agilizó el cierre de vacantes al integrar el llenado de encuestas como paso previo obligatorio.</li>
            <li>Facilitó la generación de reportes estadísticos y el seguimiento de la satisfacción empresarial por periodos.</li>
          </ul>

          <p><strong>Tecnologías y modelo aplicados:</strong></p>
          <ul>
            <li><strong>Java 8 + Play Framework</strong>: arquitectura <strong>MVC</strong> con controladores, modelos y vistas independientes.</li>
            <li><strong>JavaScript + jQuery</strong>: manejo dinámico de formularios, eventos y peticiones asíncronas.</li>
            <li><strong>MySQL</strong>: consultas optimizadas, relaciones bien estructuradas e índices para alto rendimiento.</li>
            <li><strong>CSS con Metro UI v2</strong>: interfaz consistente, responsiva y accesible.</li>
            <li><strong>POO</strong>: encapsulación de entidades (empresas, encuestas, respuestas) y lógica reutilizable.</li>
          </ul>

          <p>
            En conjunto, este proyecto demuestra mi capacidad para desarrollar soluciones web completas bajo una arquitectura profesional, integrando frontend, backend y base de datos,
            aplicando buenas prácticas de desarrollo y entregando una herramienta funcional y eficiente para el área institucional.
          </p>
        </div>
      </div>
    </section>

  );
}
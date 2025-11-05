export default function Evaluacion() {
  return (
    <section className="page projects">
        <div className="project-container">
      <h2>Evaluación de Satisfacción a Empresas</h2>
      <p>
        En esta sección presento mi proyecto de evaluación de satisfacción a empresas. El objetivo de este proyecto es proporcionar al área correspondiente de la universidad una herramienta intuitiva y eficaz para recopilar y analizar la satisfacción de las empresas que reclutan a sus estudiantes para la realización de sus "Prácticas Profesionales".
      </p>
      <p>
        El proyecto consta de dos partes principales:
        <ol>
          <li>
            La primera es la sección del administrador, donde se crean los formularios de evaluación. Estos constan de 2 diferentes tipos de preguntas: las preguntas abiertas y las preguntas calificables. Estos formularios se presentan a las empresas que ya reclutaron a algún estudiante para las prácticas profesionales. El formulario contiene preguntas; las crea el usuario encargado del área. Las preguntas que realiza son sobre la satisfacción de la empresa con respecto a diferentes aspectos, como la calidad del trabajo realizado por el estudiante, la relación con los empleados, la infraestructura y el ambiente de trabajo.
            <p>
              Las preguntas abiertas permiten a las empresas expresar sus opiniones y sugerencias de manera libre. Por otro lado, las preguntas calificables se utilizan para medir la satisfacción numéricamente, lo que facilita el análisis y la comparación entre diferentes empresas.
            </p>
            <p>
              El usuario encargado del área puede crear los formularios de evaluación personalizados, adaptándolos a las necesidades específicas de cada empresa. Esto garantiza que se recopile la información más relevante y útil para la evaluación.
            </p>
            <p>
              El usuario encargado del área puede editar únicamente la cantidad de estrellas para las preguntas calificables de la evaluación, siempre y cuando no se hayan publicado las preguntas; en caso de que esto haya ocurrido, solo se podrán desactivar. 
            </p>
            <p>
              El usuario encargado del área puede publicar los formularios de evaluación una vez que las preguntas estén agregadas, presionando el botón para activar las preguntas deseadas y manteniendo el orden de creación. Existe una sección donde puede publicar la encuesta creada; al ser publicada, les llegará a las empresas que cuenten con algún alumno con trámite de prácticas pendiente de finalizar. Además, les llegará un correo electrónico avisándoles de que se encuentra pendiente la encuesta correspondiente, con el enlace para completarla.
            </p>
            <br />
            <strong>Puedes ver un ejemplo de cómo se ve el formulario de evaluación a continuación: </strong>

          </li>
           </ol>
            <div className="img-container">
              <img src="/images/projects/paneldecontrol.jpg" alt="Panel de Control" />
            </div>
            <br />
            <div className="img-container">
              <img src="/images/projects/EvaluacionEmpresa.jpg" alt="Tabla de Preguntas" />
            </div>
            <br />
            <div className="img-container">
              <img src="/images/projects/crearpregunta.jpg" alt="Nueva Pregunta" />
            </div>
            <br />
            <ul>
          <li style={{ listStyleType: 'none' }}>
            <p>Análisis de Datos: Una vez que se han recopilado las respuestas del formulario, se utilizan técnicas de análisis de datos para procesar y interpretar los resultados. Esto incluye la identificación de patrones, tendencias y áreas de mejora en la satisfacción de las empresas.</p>
            <p>Visualización de Resultados: Los resultados del análisis de datos se presentan de manera clara y comprensible a través de gráficos, tablas y visualizaciones interactivas. Esto permite a los usuarios comprender fácilmente las fortalezas y debilidades de la preparación de sus alumnos en función de la satisfacción de las empresas.</p>
            <p>El usuario tiene la opción de realizar consultas por periodos escolares específicos, lo que facilita la comparación y el seguimiento de los cambios en la satisfacción de las empresas a lo largo del tiempo.</p>
            <p>Además, el usuario puede exportar los resultados en formato Excel para su posterior análisis y compartirlos con otras partes interesadas.</p>
          </li>
        <br />
        <strong>
          Puedes ver un ejemplo de cómo se ve la tabla de resultados a continuación:
        </strong>
        </ul>
        <br />
        <div className="img-container">
          <img src="/images/projects/resultados.jpg" alt="Tabla de Resultados" />
        </div>
        <br />
        <div className="img-container">
          <img src="/images/projects/resultados2.jpg" alt="Tabla de Resultados" />
        </div>
      </p>
      <br />
      <ol>
        <li value="2">
            <p>
              La segunda es la sección de la empresa, donde se presentan las encuestas pendientes de contestar. Estas encuestas están disponibles para las empresas que cuenten con vacantes expiradas.
            </p>
          <p>En la sección de la empresa, la empresa tiene que iniciar sesión para ver las encuestas pendientes de contestar.</p>
          <p>
            Cuando la empresa accede a la sección de encuestas pendientes, verá una lista de todas las encuestas que han sido publicadas por el usuario encargado del área. Cada encuesta mostrará información relevante, como el nombre de la empresa, la fecha de publicación y el enlace para completar la encuesta.
          </p>
          <p>
            Al hacer clic en el enlace para completar la encuesta, la empresa será redirigida a una página donde podrá responder a las preguntas de la encuesta. El proceso es sencillo y se guiará por instrucciones claras.
          </p>
          <p>
            Al iniciar sesión, a la empresa le aparecerá un popup con las vacantes expiradas; en el popup se presentarán las vacantes pendientes de cerrar, presionarán el botón para cerrar la vacante y aparecerá primero la encuesta.
          </p>
          <p>
            Al completar la encuesta, la empresa podrá continuar con el proceso de cerrar la vacante.
          </p>
        </li>
      </ol>
      <br />
      <strong>
        Puedes ver un ejemplo de cómo se ve la encuesta pendiente de contestar a continuación:
      </strong>
      <br />
      <div className="img-container">
        <img src="/images/projects/cerrarvacante.jpg" alt="Cerrar Vacante" />
      </div>
      <br />
      <div className="img-container">
        <img src="/images/projects/encuesta.jpg" alt="Contestar Encuesta" />
      </div>
      <div className="conclucion">
        <h3>Conclusión y resultados</h3>
        <p>
          El módulo de evaluación de satisfacción a empresas generó impactos directos en la operación y la toma de decisiones del área:
        </p>
        <ul>
          <li>Mejoró la recopilación y calidad de los datos mediante formularios estructurados y preguntas calificables.</li>
          <li>Incrementó la trazabilidad del proceso: publicación, respuesta y análisis de encuestas en un flujo controlado.</li>
          <li>Agilizó los cierres de vacantes al integrar la encuesta como paso previo, evitando rezagos.</li>
          <li>Facilitó el análisis con métricas comparables (promedios, tendencias y hallazgos) para acciones de mejora.</li>
        </ul>
        <p>
          Tecnologías y modelo aplicados:
        </p>
        <ul>
          <li><strong>Java 8 + Play Framework</strong>: arquitectura <strong>MVC</strong> para separar responsabilidades (controladores, modelos y vistas), enrutamiento tipado y validaciones.</li>
          <li><strong>JavaScript + jQuery</strong>: interacción dinámica en formularios, manejo de eventos y peticiones asíncronas para una UX fluida.</li>
          <li><strong>MySQL</strong>: diseño normalizado de tablas, índices para consultas frecuentes y claves foráneas para integridad referencial.</li>
          <li><strong>CSS con Metro UI v2</strong>: estilos consistentes y componentes UI listos, asegurando accesibilidad y responsividad.</li>
          <li><strong>POO</strong>: encapsulación de entidades (encuestas, preguntas, respuestas), reutilización de lógica y pruebas unitarias de servicios.</li>
        </ul>
        <p>
          En conjunto, el proyecto demuestra dominio del ecosistema Java con Play Framework bajo el modelo MVC, frontend con jQuery, persistencia en MySQL y una capa de presentación cuidada con Metro UI v2; todo aplicado con principios de POO para mantener el código mantenible y extensible.
        </p>

      </div>
    </div>
    </section>
  );
}
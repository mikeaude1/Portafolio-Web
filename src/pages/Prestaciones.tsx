import { Link } from 'react-router-dom'

export default function Prestaciones() {
    return (
        <section className="page projects">
            <div className="project-container">
                <div className="actions" style={{ marginBottom: '0.75rem' }}>
                    <Link className="btn" to="/proyectos">
                        <span className="label">Volver a Proyectos</span>
                    </Link>
                </div>
                <h2 className="project-title">Prestaciones Socioeconómicas</h2>
                <p>
                    Este es un proyecto realizado para facilitar la aplicacion a prestaciones socioeconómicas ofrecidas por el personal de recursos humanos a los empleados, la cual consiste en que se
                    suban las convocatorias a la plataforma de manera digital y que los empleados vean los requisitos para aplicar suban los documentos necesarios y se postulen a dichas prestaciones.
                    Recursos humanos podra ver a los empleados que se postularon a las prestaciones y verificar que cumplan con los requisitos y aceptar o rechazar la solicitud y finalizar la convocatoria.
                </p>
                <p>
                    El proyecto se desarrolló utilizando <strong style={{ color: '#34ccf1ff' }}>Java 8, Play Framework, jQuery, MetroUI, MySql, html5, css3 y javascript.</strong>
                </p>
                <p>
                    El proyecto se desarrolló en un periodo de 4 semanas, el cual se dividió en 4 etapas:
                    <ul>
                        <li>Análisis y diseño del proyecto (maquetación).</li>
                        <li>Desarrollo del proyecto.</li>
                        <li>Pruebas del proyecto y corrección de errores.</li>
                        <li>Deployment del proyecto.</li>
                    </ul>
                </p>
                <p>
                    El proyecto fue desarrollado fullstack, es decir, se desarrolló tanto el front-end como el back-end.
                    <ul>
                        <li>Desarrollador Front-end. Utilizando javascript + jQuery y MetroUI.</li>
                        <li>Desarrollador Back-end. Utilizando Java 8 (jdk 1.8) y Play Framework el ORM de este framework permite la persistencia de los datos en la base de datos MySql.</li>
                    </ul>
                </p>
                <p>
                    El proyecto consta de 2 secciones diferentes dependiendo el rol del usuario:
                    <ul>
                        <li>Recursos Humanos. Esta sección permite al personal recursos humanos crear la convocatoria, activarla, modificarla y terminarla. Tambien pueden ver a los empleados que se postularon a las prestaciones y verificar que cumplan con los requisitos, aceptar, rechazar la solicitud y finalizar la convocatoria.</li>
                        <li>Empleados. Esta sección permite a los empleados ver las convocatorias disponibles y postularse a ellas subiendo los documentos necesarios, ver el historial de convocatorias postuladas y su estado.</li>
                    </ul>
                </p>
                <strong style={{ color: '#007bff' }}>Podras ver en las siguientes imagenes como se ve el proyecto del lado de Recursos Humanos:</strong>
                <div className="project-images">
                    <p>Panel de Convocatorias:</p>
                    <p>En este panel se puede acceder directamente al modulo de convocatorias, donde se pueden crear, activar, modificar y terminar convocatorias.</p>
                    <div className="img-container">
                        <img src="/images/projects/panelconvocactorias.jpg" alt="PanelConvocatorias" />
                    </div>
                    <p>Convocatorias Pendientes:</p>
                    <p>En este panel se puede ver todas las convocatorias que se han creado, pero no se han activado, es decir, que no se pueden postular a ellas.</p>
                    <div className="img-container">
                        <img src="/images/projects/ConvocatoriasPendientes.jpg" alt="ConvocatoriasPendientes" />
                    </div>
                    <p>Nueva Convocatoria:</p>
                    <p>En este panel se puede crear una nueva convocatoria, donde se pueden ingresar los datos necesarios para la convocatoria, como el nombre, la fecha de inicio y fin, los requisitos para postular, etc.</p>
                    <div className="img-container">
                        <img src="/images/projects/NuevaConvocatoria.jpg" alt="NuevaConvocatoria" />
                    </div>
                    <p>Iconos</p>
                    <p>Cuando se crea una convocatoria, se tiene que seleccionar el icono que represente la prestacion socioeconomica que se va a ofrecer, como por ejemplo, Lentes, Canastilla, etc.</p>
                    <div className="img-container">
                        <img src="/images/projects/iconos.jpg" alt="Iconos" />
                    </div>
                    <p>Presaciones procesadas:</p>
                    <p>En este panel se puede ver todas las las convocatorias que se han activado, es decir, se puede ver un listado de todas las convocatorias que se han activado y con su informacion y estado de las convocatorias tambien desde aqui se puede acceder a ver los empleados que se postularon a ellas y tambien se pueden eliminar en caso de que se desee.</p>
                    <div className="img-container">
                        <img src="/images/projects/prestacionesprocesadas.jpg" alt="PrestacionesProcesadas" />
                    </div>
                    <p>Detalle de la convocatoria:</p>
                    <p>Al hacer click en el boton ver de la convocatoria en la imagen anterior, te redirige a una pagina donde se puede ver un listado de empleados que se postularon a la convocatoria, con su informacion y estado de la postulacion.</p>
                    <p>En este listado podras ver los documentos que se han subido por cada empleado, como por ejemplo, curp, licencia de conducir, etc.</p>
                    <p>Ademas, podras verificar que cumplan con los requisitos y aceptar o rechazar la solicitud.</p>
                    <p>Una vez que se encuentren todas las solicitudes aceptadas o rechazadas, se puede finalizar la convocatoria y se notificara al empleado por correo electronico y notificacion dentro del portal.</p>
                    <div className="img-container">
                        <img src="/images/projects/detalleconvocatoria.jpg" alt="DetalleConvocatoria" />
                    </div>
                    <strong style={{ color: '#007bff' }}>A partir de aqui, podras ver en las siguientes imagenes como se ve el proyecto del lado de Empleados:</strong>
                    <p>Panel de Convocatorias:</p>
                    <p>El empleado en su menu principal cuenta con un apartado de Prestaciones Socioeconomicas, donde puede ver las convocatorias disponibles y postularse a ellas. Ademas cuando una convocatoria se encuentra activa se les notifica via correo electronico y notificacion dentro del portal.</p>
                    <p>Al acceder a este modulo, se puede ver un carrucel donde todas las convocatorias disponibles estaran apareciendo de manera dinamica y con su informacion.</p>
                    <div className="img-container">
                        <img src="/images/projects/Convocatorias.jpg" alt="Convocatorias" />
                    </div>
                    <p>Postularse a una convocatoria:</p>
                    <p>Al hacer click en el boton postularme, se redirige a una pagina donde se encuentra toda la informacion necesaria para postularse ademas se puede descargar el pdf de la convocatoria y subir los documentos necesarios para postularse.</p>
                    <p>Una vez que se hayan subido todos los documentos necesarios, se puede hacer click en el boton postular para postularse a la convocatoria.</p>
                    <div className="img-container">
                        <img src="/images/projects/postularme.jpg" alt="Postularme" />
                    </div>
                    <p>Una vez postulado se desactiva el boton de postularme para evitar que se postule a la convocatoria mas de una vez.</p>
                    <p>Historial de Postulaciones:</p>
                    <p>En la pestaña Postulaciones, se puede ver un listado de todas las convocatorias a las que se ha postulado, con su informacion y estado de la postulacion.</p>
                    <p>El empleado podra modificar y ver los documentos subidos a la convocatoria, la edicion se permite cuando la covocatoria aun no ah sido finalizada.</p>
                    <div className="img-container">
                        <img src="/images/projects/historial.jpg" alt="HistorialPostulaciones" />
                    </div>

                    <section className="project-conclusion">
                        <h2 className="project-title" style={{ color: '#25ecf3ff' }}>Conclusión del Proyecto</h2>
                        <p>
                            El proyecto <strong>Prestaciones Socioeconómicas</strong> es una solución full-stack diseñada para digitalizar y optimizar
                            el proceso de convocatorias y postulaciones para empleados. La plataforma incrementó la eficiencia y la transparencia en
                            la gestión de prestaciones, facilitando la comunicación entre Recursos Humanos y el personal, y reduciendo el tiempo de
                            administración de cada convocatoria.
                        </p>

                        <p>
                            Mi responsabilidad incluyó el diseño, desarrollo e implementación del sistema completo: interfaz de usuario, lógica de
                            negocio, integración con la base de datos y despliegue. Implementé funciones seguras y responsivas para la carga y
                            verificación de documentos, control de estados de convocatoria y notificaciones a los usuarios.
                        </p>

                        <ul >
                            <li><strong>Impacto:</strong> Mejoras en la trazabilidad y transparencia del proceso de postulaciones.</li>
                            <li><strong>Alcance:</strong> Módulos independientes para Recursos Humanos y Empleados con control de roles y permisos.</li>
                            <li><strong>Tecnologías:</strong> Java 8, Play Framework, jQuery, MetroUI, MySQL, HTML5, CSS3 y JavaScript.</li>
                            <li><strong>Responsabilidad:</strong> Desarrollo full-stack, pruebas, corrección de errores y deployment.</li>
                        </ul>

                        <p>
                            Este proyecto demuestra mi capacidad para gestionar todo el ciclo de desarrollo, resolver problemas reales y entregar
                            soluciones robustas y orientadas al usuario. Estoy comprometido con la calidad del código, la mejora continua y la
                            generación de valor tangible para la organización.
                        </p>
                    </section>
                </div>

            </div>
        </section>
    )
}
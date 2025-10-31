export default function Diplomas() {
  const items = [
    { file: 'Cedula2.0.pdf',Name:'Cedula Profecional' },
    { file: 'Miguel  Aude  - 2024-04-27 - copia.pdf',Name:'Certificado de Curso de Visual Studio Code' },
    { file: 'Miguel  Aude  - CertificadoTypescript2024-05-21 - copia.pdf',Name:'Certificado de Curso de TypeScript' },
    { file: 'Miguel  Aude Certificadojs  - 2024-05-11 - copia.pdf',Name:'Certificado de Curso de JavaScript' },
    { file: 'Miguel Aude - 2025-04-05.pdf',Name:'Certificado de Curso de Dart' },
    { file: 'diplomaPython.jpg',Name:'Diploma de Curso de Python' },
    { file: 'tituloycedula (09-20-2022).pdf',Name:'Título y Cedula Profecional' },
  ] as const;

  const basePath = '/images/diplomas/';
  const isPdf = (name: string) => /\.pdf$/i.test(name);
  const prettyName = (name: string) => {
    const noExt = name.replace(/\.[^/.]+$/, '');
    return noExt.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  };
  const fileUrl = (name: string) => basePath + encodeURIComponent(name);

  return (
    <section className="page diplomas">
      <h2>Diplomas</h2>
      <p>Galería de cursos y certificaciones. Puedes ver o descargar cada documento.</p>

      <div className="diploma-grid">
        {items.map((item) => {
          const url = fileUrl(item.file);
          const title = prettyName(item.file);
          return (
            <article className="diploma-card" key={item.file}>
              <div className="diploma-thumb">
                {isPdf(item.file) ? (
                  // Vista previa con iframe para mayor compatibilidad en móviles
                  <iframe src={url} className="pdf-preview" title={`Vista previa PDF ${title}`} loading="lazy" />
                ) : (
                  <img src={url} alt={item.Name} />
                )}
              </div>

              <div className="diploma-info">
                <h3 className="diploma-title">{item.Name}</h3>
                <span className="diploma-meta">{isPdf(item.file) ? 'Documento PDF' : 'Imagen'}</span>
              </div>

              <div className="diploma-actions">
                <a className="btn" href={url} target="_blank" rel="noopener noreferrer">Ver</a>
                <a className="btn" href={url} download>Descargar</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
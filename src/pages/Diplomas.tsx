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

  const basePath = '/diplomas/';
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
                  <object data={url} type="application/pdf" className="pdf-preview" aria-label={`Vista previa PDF ${title}`}>
                    <div className="pdf-fallback">
                      <svg className="pdf-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={`PDF ${title}`}>
                        <rect x="4" y="3" width="14" height="18" rx="2" ry="2" stroke="#FF4D4D" strokeWidth="1.5" fill="rgba(255,77,77,0.15)" />
                        <path d="M14 3v5a2 2 0 0 0 2 2h4" stroke="#FF4D4D" strokeWidth="1.5" fill="none" />
                        <text x="8" y="16" fontSize="6" fontWeight="700" fill="#FF4D4D">PDF</text>
                      </svg>
                    </div>
                  </object>
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
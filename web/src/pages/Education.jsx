export default function Education() {
  const education = [
    {
      institution: "UNCP",
      title: "Maestría en Responsabilidad Social",
      type: "Postgrado",
      period: "2025 - 2026",
      status: "Maestrando"
    },
    {
      institution: "UNCP",
      title: "Sociología",
      type: "Superior Universitaria",
      period: "2014 - 2022",
      status: "Licenciado"
    },
    {
      institution: "SENATI",
      title: "Electricidad Industrial",
      type: "Superior Técnica",
      period: "2005 - 2007",
      status: "Técnico Operativo"
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 style={{ textAlign: 'center' }}>Formación Académica</h2>
      <div className="grid-2">
        {education.map((edu, index) => (
          <div key={index} className="glass section-card">
            <h3>{edu.title}</h3>
            <h4>{edu.institution}</h4>
            <p>
              <strong>Periodo:</strong> {edu.period}
            </p>
            <p>
              <strong>Estado:</strong> {edu.status}
            </p>
          </div>
        ))}
      </div>
      
      <div className="glass section-card" style={{ marginTop: '2rem' }}>
        <h3>Educación Básica</h3>
        <p><strong>Secundaria:</strong> I.E. PRC (1999 - 2003) - Culminado</p>
        <p><strong>Primaria:</strong> IEE. María de Fátima (1993 - 1998) - Culminado</p>
      </div>
    </div>
  );
}

export default function Skills() {
  const skillGroups = [
    {
      category: "Análisis de Datos & Investigación",
      skills: ["R / R Studio", "SPSS", "Stata", "Minitab", "Excel Avanzado", "Análisis Estadístico", "Redacción Científica", "LaTeX", "APA / Vancouver"]
    },
    {
      category: "Gestión Social",
      skills: ["Diagnósticos Situacionales", "Planes de Desarrollo Concertado", "Talleres Participativos", "Formulación de Proyectos"]
    },
    {
      category: "Técnico & Otros",
      skills: ["Electricidad Industrial", "Instalaciones Domésticas", "Computación e Informática", "Inglés Básico"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 style={{ textAlign: 'center' }}>Habilidades y Capacidades</h2>
      <div className="grid-2">
        {skillGroups.map((group, index) => (
          <div key={index} className="glass section-card">
            <h3>{group.category}</h3>
            <div style={{ marginTop: '1rem' }}>
              {group.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

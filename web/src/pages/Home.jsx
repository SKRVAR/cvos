export default function Home() {
  return (
    <div className="animate-fade-in hero-wrapper">
      {/* Left Column: Text Content */}
      <div className="hero-content">
        <h1>Oscar Sedano Vargas</h1>
        <h2>Sociólogo | Especialista en Responsabilidad Social</h2>
        
        <div className="glass" style={{ padding: '2rem', marginTop: '2rem' }}>
          <h3>Perfil Profesional</h3>
          <p>
            Sociólogo con estudios de maestría en Responsabilidad Social por la Universidad Nacional del Centro del Perú.              
            Profesional con sólidos conocimientos en programación orientada al análisis de datos con R, 
            redacción científica, diagramación con LaTeX, y ofimática avanzada.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="hero-image">
        <img 
          src="https://ui-avatars.com/api/?name=Oscar+Sedano&background=0D8ABC&color=fff&size=200" 
          alt="Oscar Sedano" 
          className="avatar-large" 
        />
      </div>
    </div>
  );
}

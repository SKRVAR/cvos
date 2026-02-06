import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Contacto</h2>
      <div className="glass section-card" style={{ width: '100%', maxWidth: '600px' }}>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Asesoría y consultoría en proyectos, investigación, publicación científica y análisis de datos.
        </p>
                   
        <div className="contact-item">
          <Mail size={18} color="var(--accent-soft)" />
          <a href="mailto:oscarsedanov@gmail.com">oscarsedanov@gmail.com</a>
        </div>
        
        <div className="contact-item">
          <MapPin size={18} color="var(--accent-soft)" />
          <span>Huancayo, Junín</span>
        </div>
      </div>
    </div>
  );
}

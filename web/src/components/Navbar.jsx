import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <NavLink to="/" className="nav-link">Perfil</NavLink>
      <NavLink to="/formacion" className="nav-link">Formación</NavLink>
      <NavLink to="/habilidades" className="nav-link">Habilidades</NavLink>
      <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
    </nav>
  );
}

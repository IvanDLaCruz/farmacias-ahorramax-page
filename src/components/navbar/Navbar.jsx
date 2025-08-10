import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="images/logo-ahorramax-sf.png" alt="Logo" />
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        ☰
      </label>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre nosotros</Link></li>
        <li><Link to="/contact">Contactanos</Link></li>
      </ul>
    </nav>
  );
};

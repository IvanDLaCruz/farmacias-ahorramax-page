import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const links = [
    { path: "/", label: "Inicio" },
    { path: "/sobrenosotros", label: "Sobre nosotros" },
    { path: "/contact", label: "Contáctanos" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="images/logo-ahorramax-sf.png" alt="Logo Ahorramax" />
      </div>

      <button
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {links.map(({ path, label }) => (
          <li key={path} className={location.pathname === path ? "active" : ""}>
            <Link to={path} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
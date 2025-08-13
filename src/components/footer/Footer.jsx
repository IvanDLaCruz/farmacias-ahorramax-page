import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/logo-ahorramax-sf.png" alt="logo-ahorramax" />
        <div className="footer-social">
          <a href="https://www.facebook.com/FarmaciaAhorraMax" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          
        </div>
      </div>

      <div className="footer-column">
        <h3>Acerca de nosotros</h3>
        <ul>
          <li><a href="#">Quiénes somos</a></li>
          <li><a href="#">Aviso de privacidad</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Servicio al cliente</h3>
        <ul>
          <li><a href="#">Preguntas Frecuentes</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Facturación</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Sucursales</h3>
        <ul>
          <li><a href="#sucursales">Sucursales</a></li>
          <li><a href="#">Servicio a Domicilio</a></li>
        </ul>
      </div>
    </footer>
  );
};
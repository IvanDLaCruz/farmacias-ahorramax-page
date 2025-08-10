import { FaFacebook } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="contenedorPrincipal">
      <div className="contacto">
        <h2>Contacto</h2>
        <p>Teléfono</p>
        <p>Dirección</p>
        <p>Correo</p>
      </div>

      <div className="paginas">
        <a href="/about">Sobre nosotros</a>
      </div>
      <div>
        <h2>Redes Sociales</h2>

        <a href="">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

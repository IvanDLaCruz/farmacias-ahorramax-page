import { FaFacebook } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="contenedorPrincipal">
        <img src="images/logo-ahorramax-sf.png" alt="" />
      <div className="contacto">
        <h2 className="contactoTitle">Contacto</h2>
        <p>Teléfono</p>
        <p>Dirección</p>
        <p>Correo</p>
      </div>

      <div className="paginas">
        <h2>Contenido</h2>
        <a className="paginasContent" href="/about">Sobre nosotros</a>
      </div>
      <div className="redesSociales">
        <h2>Redes Sociales</h2>

        <a href="">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

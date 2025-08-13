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

      <div className="footer-paginas">
        <h2>Contenido</h2>
        <a className="footer-paginasContent" href="/about">
          Sobre nosotros
        </a>
      </div>

      <div className="footer-redesSociales">
        <h2>Redes Sociales</h2>

        <div className="footer-column">
          <h3>Servicio al cliente</h3>
          <ul>
            <li>
              <a href="#">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Facturación</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Sucursales</h3>
          <ul>
            <li>
              <a href="#sucursales">Sucursales</a>
            </li>
            <li>
              <a href="#">Servicio a Domicilio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>);
};

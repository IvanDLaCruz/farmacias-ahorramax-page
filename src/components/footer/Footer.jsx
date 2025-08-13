export const Footer = () => {
  return (
    <div className="footer">
      <img src="images/logo-ahorramax-sf.png" alt="" />
      <div className="footer-contacto">
        <h2 className="footer-contactoTitle">Contacto</h2>
        <p>Teléfono</p>
        <p>Dirección</p>
        <p>Correo</p>
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
  );
};

import "./SucursalCard.css";

const SucursalCard = ({ nombre, direccion,colonia, ciudad, telefono, mapaUrl, imagen }) => {
  return (
    <div className="sucursal">
      <img src={imagen} alt={nombre} className="sucursal-img" />
      <div className="sucursal-info">
        <h3 className="sucursal-nombre">{nombre}</h3>
        <p className="sucursal-direccion">{direccion}</p>
        <p className="sucursal-colonia">{colonia}</p>
        <p className="sucursal-ciudad">{ciudad}</p>
        <p className="sucursal-telefono">📞 {telefono}</p>
        <a
          href={mapaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sucursal-mapa"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
};

export default SucursalCard;

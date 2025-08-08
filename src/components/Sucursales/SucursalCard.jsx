import "./SucursalCard.css";

const SucursalCard = ({
  nombre,
  direccion,
  colonia,
  ciudad,
  telefono,
  mapsUrl,
  imagen,
}) => {
  return (
    <div className="sucursal-card">
      <div className="sucursal-image-container">
        {imagen ? (
          <img 
            src={imagen} 
            alt={`Sucursal ${nombre}`} 
            className="sucursal-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = ''; // Opcional: ruta de imagen por defecto
              e.target.parentElement.classList.add('sucursal-img-placeholder');
            }}
          />
        ) : (
          <div className="sucursal-img-placeholder">
            <span>Imagen no disponible</span>
          </div>
        )}
      </div>
      
      <div className="sucursal-info">
        <h3 className="sucursal-nombre">{nombre}</h3>
        <p className="sucursal-direccion">{direccion}</p>
        {colonia && <p className="sucursal-colonia">{colonia}</p>}
        <p className="sucursal-ciudad">{ciudad}</p>
        <p className="sucursal-telefono">📞 {telefono}</p>
        <a
          href={mapsUrl}
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
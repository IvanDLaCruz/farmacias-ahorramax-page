import './SelectorEstado.css';

const SelectorEstado = ({ estadoActual, cambiarEstado }) => {
  return (
    <div className="selector-estado-wrapper" id='sucursales'>
      <h2 className="titulo-sucursales">Nuestras sucursales</h2>
      <div className="selector-estado">
        <button
          className={estadoActual === 'Sinaloa' ? 'activo' : ''}
          onClick={() => cambiarEstado('Sinaloa')}
        >
          Sinaloa
        </button>
        <button
          className={estadoActual === 'Sonora' ? 'activo' : ''}
          onClick={() => cambiarEstado('Sonora')}
        >
          Sonora
        </button>
      </div>
    </div>
  );
};

export default SelectorEstado;

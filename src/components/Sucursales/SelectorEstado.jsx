
import './SelectorEstado.css';

const SelectorEstado = ({ estadoActual, cambiarEstado }) => {
  return (
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
  );
};

export default SelectorEstado;

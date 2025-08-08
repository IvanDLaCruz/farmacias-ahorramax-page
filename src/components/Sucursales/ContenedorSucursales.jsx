import { useState } from 'react';
import SelectorEstado from './SelectorEstado';
import './ContenedorSucursales.css';
import SucursalesSin from './Sucursales-Sin';
import SucursalesSon from './Sucursales-Son';

const sucursales = {
  Sinaloa: <SucursalesSin />,
  Sonora: <SucursalesSon />
};

const ContenedorSucursales = () => {
  const [estado, setEstado] = useState('Sinaloa');

  return (
    <div className="contenedor-sucursales">
      <SelectorEstado estadoActual={estado} cambiarEstado={setEstado} />
      <div className="lista-sucursales">
        {sucursales[estado]}
      </div>
    </div>
  );
};

export default ContenedorSucursales;

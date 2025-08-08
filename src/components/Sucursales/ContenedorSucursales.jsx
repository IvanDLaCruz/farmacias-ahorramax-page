import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SelectorEstado from './SelectorEstado';
import SucursalCard from './SucursalCard';
import './ContenedorSucursales.css';

import sucursalesSinaloa from './sucursalesSinaloa';
import sucursalesSonora from './sucursalesSonora';

const sucursales = {
  Sinaloa: sucursalesSinaloa,
  Sonora: sucursalesSonora,
};

const ContenedorSucursales = () => {
  const [estado, setEstado] = useState('Sinaloa');
  const listaSucursales = sucursales[estado] || [];

  return (
    <div className="contenedor-sucursales">
      <SelectorEstado estadoActual={estado} cambiarEstado={setEstado} />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {listaSucursales.map((sucursal, index) => (
          <SwiperSlide key={index}>
            <SucursalCard {...sucursal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContenedorSucursales;

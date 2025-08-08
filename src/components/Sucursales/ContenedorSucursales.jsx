import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import SelectorEstado from "./SelectorEstado";
import SucursalCard from "./SucursalCard";
import "./ContenedorSucursales.css";

import sucursalesSinaloa from "./sucursalesSinaloa";
import sucursalesSonora from "./sucursalesSonora";

const sucursales = {
  Sinaloa: sucursalesSinaloa,
  Sonora: sucursalesSonora,
};

const ContenedorSucursales = () => {
  const [estado, setEstado] = useState("Sinaloa");
  const listaSucursales = sucursales[estado] || [];

  return (
    <div className="contenedor-sucursales">
      <SelectorEstado estadoActual={estado} cambiarEstado={setEstado} />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // agrega Autoplay aquí
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // auto-play cada 3 segundos
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

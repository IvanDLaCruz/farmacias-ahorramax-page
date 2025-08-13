import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./CategoriasSlider.css";
import categorias from "./categorias";

const CategoriasSlider = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(prev => {
        if (prev !== isNowDesktop) {
          return isNowDesktop;
        }
        return prev; // No cambia el estado si es igual
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  if (isDesktop) {
    // Mostrar TODOS los elementos fijos sin slider
    return (
      <div className="categorias-slider">
        <h2 className="titulo">Todo para tu salud</h2>
        <div className="categorias-fixed-container">
          {categorias.map((cat, index) => (
            <div key={index} className="categoria-item">
              <div className="icon">
                <img src={cat.icon} alt={cat.nombre} />
              </div>
              <p>{cat.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Mostrar slider solo en móvil/tablet
  return (
    <div className="categorias-slider">
      <h2 className="titulo">Todo para tu salud</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={5}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
      >
        {categorias.map((cat, index) => (
          <SwiperSlide key={index} className="categoria-item">
            <div className="icon">
              <img src={cat.icon} alt={cat.nombre} />
            </div>
            <p>{cat.nombre}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriasSlider;

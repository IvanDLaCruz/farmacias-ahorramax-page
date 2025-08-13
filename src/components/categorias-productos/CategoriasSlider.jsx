import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CategoriasSlider.css";
import categorias from "./categorias";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const CategoriasSlider = () => {
  return (
    <div className="categorias-slider">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        Navigation //revisar
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: categorias.length, allowTouchMove: false },
        }}
      >
        {categorias.map((cat, index) => {
          const IconComponent = cat.icon;
          return (
            <SwiperSlide key={index} className="categoria-item">
  <div className="icon">
    <IconComponent />
  </div>
  <p>{cat.nombre}</p>
</SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriasSlider;

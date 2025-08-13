import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./CategoriasSlider.css";
import categorias from "./categorias";

const CategoriasSlider = () => {
  return (
    <div className="categorias-slider">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
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

import "./Promos.css";
import { Element } from "../../element/element";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import promosDB from "./promosDB";

export const Promos = () => {
  return (
    <Swiper className="swiper-container"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {promosDB.map((promo) => (
        <SwiperSlide>
          <Element 
            image={promo.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
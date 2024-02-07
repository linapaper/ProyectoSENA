import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Carousel = () => {

  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword));
      setDeviceType(isMobile ? 2 : 3); // Asignar 2 para dispositivos móviles y 3 para PC
    };

    detectDevice();
  }, []);

  return (
    <div className="h-[200px]">
      <Swiper
        slidesPerView={deviceType}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center">
            <img src="/assets/img/webp/creacion-producto.webp" alt="img creacion de producto" />
            <p className="text-center text-[14px] md:text-[16px]">Creación de productos digitales</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center">
            <img src="/assets/img/webp/mantenimiento.webp" alt="img mantenimiento" />
            <p className="text-center text-[14px] md:text-[16px]">Mantenimiento o reconstrucción de software</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center">
            <img src="/assets/img/webp/inteligencia-de-negocios.webp" alt="img inteligencia de negocios" />
            <p className="text-center text-[14px] md:text-[16px]">Consultoría en Inteligencia de Negocios con datos</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] shadow-md my-10 flex flex-col space-y-3 px-2 md:px-5 justify-center items-center">
            <img src="/assets/img/webp/posicionamiento.webp" alt="img posicionamiento" />
            <p className="text-center text-[14px] md:text-[16px]">Posicionamiento web</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
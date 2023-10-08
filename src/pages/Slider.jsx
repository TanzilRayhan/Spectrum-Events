//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-4xl font-bold mt-10 text-center">Welcome to</h1>
        <h1 className="text-6xl font-extrabold my-5 text-center">Spectrum Events</h1>
      </div>
      <div className="h-96">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="brightness-50"
              src="https://i.ibb.co/K9TNKKc/ZBR05528.webp"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="brightness-50"
              src="https://i.ibb.co/QC2GCtB/league-of-legfaker-of-skt-t1-atlol-world-championship-at-the-staples-center-lol-world-championshipen.webp"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="brightness-50"
              src="https://i.ibb.co/swbc84Z/GULFSTREAM2021-1004-204840-498-A2247-ALIVECOVERAGE-e1656391366518.jpg"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/Slide-1.png";
import slide2 from "../assets/Slide-2.png";
import slide3 from "../assets/Slide-3.png";
import slide4 from "../assets/Slide-4.png";
const slides = [slide1, slide2,slide3,slide4
];

const HeroCarousel = () => {
  return (
    <div className="w-full mt-[85px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex justify-center">
              {/* AUTO-FIT IMAGE WITHOUT CROPPING */}
              <img
                src={img}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;

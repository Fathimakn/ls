import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";   // ✅ FIXED
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
  category8,
  category9,
  category10,
  category11,
  category12,
} from "../assets/images.js";

const categories = [
  { name: "Diary Products", img: category1, bg: "bg-[#57bfd9]" },
  { name: "Meat & Poultry", img: category2, bg: "bg-[#C14A24]" },
  { name: "Sauces & Condiments", img: category3, bg: "bg-[#8A1618]" },
  { name: "Pasta & Grains", img: category4, bg: "bg-[#d6d43e]" },
  { name: "Nestle", img: category5, bg: "bg-[#4372ab]" },
  { name: "Choclate & Sweet Delights", img: category6, bg: "bg-[#8A1618]" },
  { name: "Beverage", img: category7, bg: "bg-[#448c20]" },
  { name: "Cereals", img: category8, bg: "bg-[#cf6d7e]" },
  { name: "Honey", img: category9, bg: "bg-[#C14A24]" },
  { name: "Canned & Packaged Foods", img: category10, bg: "bg-[#8A1625]" },
  { name: "Cooking Oils & Vinegars", img: category11, bg: "bg-[#3e5731]" },
  { name: "Spices", img: category12, bg: "bg-[#966F33]" },
];

const ProductCategoriesHome = () => {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 relative">

      <h2 className="text-red-700 text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8">
        PRODUCT CATEGORIES
      </h2>

      <Swiper
        modules={[Navigation, Mousewheel]}   // ✅ FIXED
        navigation={{
          nextEl: ".swiper-next-bottom",
          prevEl: ".swiper-prev-bottom",
        }}
        spaceBetween={15}

        slidesPerView={1}

        // ✅ ENABLE MOUSE SLIDING (scroll wheel left/right)
        mousewheel={{ forceToAxis: true, sensitivity: 2 }}

        // ❌ DISABLE DESKTOP DRAGGING
        simulateTouch={false}
        freeMode={false}

        // ✅ MOBILE SWIPE WORKS
        allowTouchMove={true}

        breakpoints={{
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${cat.bg}
                rounded-xl sm:rounded-2xl 
                p-4 sm:p-6 
                h-[240px] sm:h-[300px] 
                flex flex-col justify-between shadow-xl`}
            >
              {/* IMAGE */}
              <div className="w-full h-[150px] sm:h-[200px] flex items-center justify-center overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* NAME + BUTTON */}
              <div className="flex justify-between items-center mt-2 sm:mt-0">
                <span className="text-white 
                  text-sm sm:text-base 
                  font-semibold sm:font-bold 
                  leading-tight break-words max-w-[70%]">
                  {cat.name}
                </span>

                <button className="
                  w-8 h-8 sm:w-10 sm:h-10 
                  border border-white rounded-full 
                  flex items-center justify-center 
                  text-white hover:bg-white hover:text-black transition">
                  <FaArrowRight />
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-center gap-4 sm:gap-6 mt-6">

        <button className="
          swiper-prev-bottom
          bg-red-700 border border-gray-300 sm:border-2 text-white shadow-lg 
          w-8 h-8 sm:w-10 sm:h-10 rounded-full
          flex items-center justify-center">
          <FaArrowLeft />
        </button>

        <button className="
          swiper-next-bottom
          bg-red-700 border border-gray-300 sm:border-2 text-white shadow-lg 
          w-8 h-8 sm:w-10 sm:h-10 rounded-full
          flex items-center justify-center">
          <FaArrowRight />
        </button>

      </div>
    </div>
  );
};

export default ProductCategoriesHome;

import React from "react";

import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.jpg";
import brand6 from "../assets/brand6.jpg";
import brand7 from "../assets/brand7.png";
import brand8 from "../assets/brand8.png";
import brand9 from "../assets/brand9.png";
import brand10 from "../assets/brand10.png";
import brand11 from "../assets/brand11.jpg";
import brand12 from "../assets/brand12.png";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12
];
// #fae6e6//#fcf7f7
const OurBrands = () => {
  return (
    <div className="w-full bg-[#fcf2f2] py-16 px-6 md:px-16 text-center">

      {/* TITLE */}
      <h3 className="text-red-700 font-semibold text-sm mb-2">
        Our Brands
      </h3>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">
        Brands with a Quality You Can Trust
      </h2>

      {/* LOGOS GRID */}
      <div className="
        grid 
        grid-cols-3 sm:grid-cols-4 md:grid-cols-6 
        gap-6 md:gap-10 
        place-items-center
      ">
        {brands.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img 
              src={logo} 
              alt="brand-logo"
              className="w-20 md:w-28 object-contain hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurBrands;

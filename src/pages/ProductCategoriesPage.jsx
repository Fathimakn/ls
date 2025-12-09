import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  category1, category2, category3, category4, category5, category6,
  category7, category8, category9, category10, category11, category12
} from "../assets/images";

import banner from "../assets/product_banner.png";

const categories = [
  { name: "DAIRY PRODUCTS", img: category1 },
  { name: "MEAT & POULTRY", img: category2 },
  { name: "SAUCES & CONDIMENTS", img: category3 },
  { name: "PASTA & GRAINS", img: category4 },
  { name: "NESTLE", img: category5 },
  { name: "CHOCOLATE & SWEET DELIGHTS", img: category6 },
  { name: "BEVERAGE", img: category7 },
  { name: "CEREALS", img: category8 },
  { name: "HONEY", img: category9 },
  { name: "CANNED & PACKAGED FOODS", img: category10 },
  { name: "COOKING OILS & VINEGARS", img: category11 },
  { name: "SPICES", img: category12 },
];

// Split rows into groups of 3 for desktop
const rows = [];
for (let i = 0; i < categories.length; i += 3) {
  rows.push(categories.slice(i, i + 3));
}

const rowImageVariant = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const rowTitleVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.1, ease: "easeOut" }
  }
};

const titleVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 }
  }
};

const ProductCategoriesPage = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastY = window.scrollY;
    const updateScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastY ? "down" : "up");
      lastY = currentY;
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div>

      {/* Banner */}
      <img
        src={banner}
        alt="Products Banner"
        className="w-full h-full pt-24 object-cover"
      />

      <div className="w-full bg-[#fcf2f2] pt-12 pb-10">

        <motion.h1
          initial={scrollDirection === "down" ? "hidden" : "visible"}
          whileInView="visible"
          variants={titleVariant}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-2xl md:text-5xl font-extrabold text-[#C30010] mb-12"
        >
          PRODUCT CATEGORIES
        </motion.h1>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-32">

          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={`${rowIndex === rows.length - 1 ? "mb-6" : "mb-16"}`}>

              {/* ---------------- MOBILE VIEW ---------------- */}
              <div className="sm:hidden grid grid-cols-1 gap-10">
                {row.map((cat, i) => (
                  <motion.div
                    key={i}
                    variants={rowImageVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }}
                    className="flex flex-col items-center"
                  >
                    {/* ORIGINAL CARD STYLE — now responsive */}
                    <div
                      className="
                        relative border border-gray-300 rounded-3xl 
                        bg-white overflow-hidden shadow-sm 
                        flex items-center justify-center
                        transition-all duration-300 
                        hover:border-[#C30010] hover:border-[3px] hover:shadow-lg
                        p-6 w-full max-w-[320px] aspect-[4/5] mx-auto
                      "
                    >
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <div className="absolute bottom-0 left-6 right-6 h-[6px] bg-[#C30010] rounded-b-xl"></div>
                    </div>

                    {/* TITLE UNDER IMAGE */}
                    <motion.p
                      className="text-center text-md font-bold text-black tracking-wide uppercase mt-4 md:text-lg"
                      variants={rowTitleVariant}
                    >
                      {cat.name}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              {/* ---------------- DESKTOP & TABLET VIEW ---------------- */}
              <motion.div
                className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-12"
                variants={rowImageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.25, once: false }}
              >
                {row.map((cat, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="
                        relative border border-gray-300 rounded-3xl 
                        aspect-[4/5] bg-white overflow-hidden shadow-sm 
                        flex items-center justify-center
                        transition-all duration-300 
                        hover:border-[#C30010] hover:border-[3px] hover:shadow-lg
                        p-6 w-80 h-80 mx-auto
                      "
                    >
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <div className="absolute bottom-0 left-6 right-6 h-[6px] bg-[#C30010] rounded-b-xl"></div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-12 mt-5"
                variants={rowTitleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.25, once: false }}
              >
                {row.map((cat, i) => (
                  <p
                    key={i}
                    className="text-center text-base md:text-lg font-bold text-black tracking-wide uppercase"
                  >
                    {cat.name}
                  </p>
                ))}
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProductCategoriesPage;

import React, { useState, useEffect, useRef } from "react";

// Import your brand logo images
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";

// Example brand data
const brands = [
  { name: "Sadia", image: brand1 },
  { name: " American Garden", image: brand2 },
  { name: "Heinz", image: brand3 },
  { name: "President", image: brand4 },
];

const BrandFeaturingHomeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const listEl = listRef.current;
      if (!listEl) return;

      const rect = listEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top > windowHeight || rect.bottom < 0) return;

      const percent = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      const idx = Math.floor(percent * (brands.length - 1));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="flex flex-col items-center bg-[red] min-h-screen pt-16 pb-16 px-4 md:px-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full max-w-6xl mx-auto">
        
        {/* Image Preview */}
        <div
          className="rounded-xl shadow-lg overflow-hidden
                w-full sm:w-[280px] md:w-[350px] lg:w-[420px]
                h-[220px] sm:h-[280px] md:h-[380px] lg:h-[480px]
                flex-shrink-0 bg-neutral-700 lg:ml-6 lg:mt-20"
        >
          <img
            src={brands[activeIndex].image}
            alt={brands[activeIndex].name}
            className="object-contain w-full h-full bg-white p-6 transition-all duration-500"
          />
        </div>

        {/* Brand List */}
        <ul
          ref={listRef}
          className="
  flex flex-col gap-1 sm:gap-1.5
  text-[21px] sm:text-[14px] md:text-[16px] lg:text-[39px]
  leading-tight 
  font-light 
  select-none 
  w-full
  whitespace-nowrap
  overflow-hidden
  lg:pt-[120px]
"
        >
          {brands.map((brand, idx) => (
            <li
              key={brand.name}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`flex items-center cursor-pointer transition-all
                ${isHovering
                  ? idx === activeIndex
                    ? "font-bold text-white"
                    : "text-gray-300 opacity-60"
                  : "text-white font-light"
                }`}
              style={{
                textShadow:
                  idx === activeIndex && isHovering
                    ? "0px 2px 16px rgba(0,0,0,0.5)"
                    : "none",
              }}
            >
              {idx === activeIndex && (
                <span className="mr-2 sm:mr-3 text-white text-[16px] sm:text-[20px] md:text-[24px]">
                  •
                </span>
              )}
              <span>{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandFeaturingHomeSection;

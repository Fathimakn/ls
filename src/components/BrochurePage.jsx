// import React from "react";
import bannerImg from "../assets/Brochure_Banner.png"; 
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
import Allproducts from "../assets/All_products.png";

const brochureList = [
  {
    title: "All Products",
    img: Allproducts,
    file: "/Brochures/ls_brochure.pdf",
  },
  {
    title: "Dairy Products",
    img: category1,
    file: "/Brochures/ls_brochure1.pdf",
  },
  {
    title: "Meat & Poultry",
    img: category2,
    file: "/Brochures/ls_brochure2.pdf",
  },
  {
    title: "Sauces & Condiments",
    img: category3,
    file: "/Brochures/ls_brochure3.pdf",
  },
  {
    title: "Pasta & Grains",
    img: category4,
    file: "/Brochures/ls_brochure4.pdf",
  },
  {
    title: "Nestle",
    img: category5,
    file: "/Brochures/ls_brochure5.pdf",
  },
  {
    title: "Choclate & Sweet Delights",
    img: category6,
    file: "/Brochures/ls_brochure6.pdf",
  },
  {
    title: "Beverage",
    img: category7,
    file: "/Brochures/ls_brochure7.pdf",
  },
  {
    title: "Cereals",
    img: category8,
    file: "/Brochures/ls_brochure8.pdf",
  },
  {
    title: "Honey",
    img: category9,
    file: "/Brochures/ls_brochure9.pdf",
  },
  {
    title: "Canned & Packaged Foods",
    img: category10,
    file: "/Brochures/ls_brochure10.pdf",
  },
  {
    title: "Cooking Oils & Vinegars",
    img: category11,
    file: "/Brochures/ls_brochure11.pdf",
  },
  {
    title: "Spices",
    img: category12,
    file: "/Brochures/ls_brochure12.pdf",
  }
];

const BrochurePage = () => {
  return (
    <div className="w-full">

      {/* Full Width Banner */}
      <div className="w-full">
        <img 
          src={bannerImg}
          alt="Brochure Banner"
          className="w-full h-auto object-contain mt-24 md:mt-24"
        />
      </div>

      <section className="w-full bg-[#ffffff] py-8 px-6 md:px-24 md:py-16">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#C30010]">
            Brochures
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover LS Company's trusted food brands and premium products for retail, wholesale, and HORECA!
          </p>
        </div>

        {/* NEW Brochure Card Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {brochureList.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover rounded-3xl mb-6"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Download Button */}
              <a
                href={item.file}
                download
                className="bg-[#C30010] text-white px-8 py-3 rounded-full font-semibold 
                shadow-md hover:bg-[#a4000c] transition duration-300"
              >
                Download Brochure
              </a>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default BrochurePage;

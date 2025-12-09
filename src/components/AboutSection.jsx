import React from "react";
import aboutImg from "../assets/Aboutt.png";

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-[#fcf2f2]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* MOBILE HEADING — shows only on mobile */}
        <div className="order-1 md:hidden">
          <h2 className="text-3xl font-extrabold text-[#C30010]">
            About Us
          </h2>
          <div className="w-40 h-1 bg-[#C30010] mt-2 mb-6"></div>
        </div>

        {/* IMAGE SIDE — mobile 2nd, desktop 1st */}
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-tl-[120px] rounded-br-[120px]">
            <img 
              src={aboutImg} 
              alt="About LS Company"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* TEXT SIDE — mobile 3rd, desktop 2nd */}
        <div className="order-3 md:order-2">

          {/* DESKTOP HEADING — hidden on mobile */}
          <h2 className="hidden md:block text-4xl font-extrabold text-[#C30010]">
            About Us
          </h2>
          <div className="hidden md:block w-40 h-1 bg-[#C30010] mt-2 mb-6"></div>

          {/* TEXT */}
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            LS Company is a trusted distributor of premium food products across 
            Kuwait's HORECA sector. With a focus on quality, reliability, and 
            long-term partnerships, we supply leading global brands to 
            restaurants, hotels, catering services, and retailers, ensuring 
            consistent excellence in every delivery.
          </p>

          {/* BUTTON */}
          <button className="bg-[#C30010] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

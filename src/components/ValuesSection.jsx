import React from "react";
import { 
  FaHandshake, 
  FaBullseye, 
  FaStar, 
  FaTruck,      // Delivery Icon
  FaChartLine 
} from "react-icons/fa";
import { TbCertificate } from "react-icons/tb"; // Halal certification icon

const ValuesSection = () => {

  const items = [
    { icon: <FaStar size={55} color="#C30010" />, title: "High Quality Brands" },
    { icon: <FaBullseye size={55} color="#C30010" />, title: "Customer Focused" },
    { icon: <FaHandshake size={55} color="#C30010" />, title: "Trusted Partner" },
    { icon: <TbCertificate size={55} color="#C30010" />, title: "Halal Certified" },
    { icon: <FaTruck size={55} color="#C30010" />, title: "Reliable Delivery" },   // NEW
    { icon: <FaChartLine size={55} color="#C30010" />, title: "Commitment To Growth" }
  ];

  return (
    <div className="w-full bg-[#fcf2f2] py-10 -mt-6 md:py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 text-center px-6">

        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <p className="mt-3 text-base md:text-lg font-semibold text-black">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ValuesSection;

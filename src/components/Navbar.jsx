import React from "react";
import logo from  "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo}
            alt="Ls Logo"
            className="h-8 object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li className="hover:text-blue-700 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 cursor-pointer">Products</li>
          <li className="hover:text-blue-700 cursor-pointer">Brochure</li>
          <li className="hover:text-blue-700 cursor-pointer">Nutrition & Blogs</li>
          <li className="hover:text-blue-700 cursor-pointer">Parlour</li>
          <li className="hover:text-blue-700 cursor-pointer">About us</li>
          <li className="hover:text-blue-700 cursor-pointer">Investors</li>
          <li className="hover:text-blue-700 cursor-pointer">Contact Us</li>
        </ul>

        {/* Buy Now Button */}
        <button className="hidden md:block bg-[#1c1c63] text-white px-6 py-2 rounded-full font-medium hover:bg-[#14144a] transition">
          Buy Now
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

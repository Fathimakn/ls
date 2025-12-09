import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";

const productCategories = [
  "Dairy",
  "Meat & Poultry",
  "Sauces & Condiments",
  "Pastas & Grains",
  "Nestle",
  "Chocolate & Sweet Delights",
  "Beverages",
  "Cereals",
  "Honey",
  "Canned Food",
  "Cooking Oils & Vinegar",
  "Spices",
];

const Navbar = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 border-b border-gray-200">

      {/* TOP NAVBAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <img src={logo} alt="LS Logo"
          className="w-auto h-auto max-h-16 object-contain " />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-900 font-semibold items-center">
          <li className="hover:text-red-600 cursor-pointer">Home</li>

          <li
            className="relative hover:text-red-600 cursor-pointer"
            onMouseEnter={() => setOpenProducts(true)}
            onMouseLeave={() => setOpenProducts(false)}
          >
            Products
            {openProducts && (
              <div className="absolute left-0 mt-3 w-60 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50">
                <ul className="flex flex-col gap-2 text-gray-700">
                  {productCategories.map((cat) => (
                    <li key={cat} className="hover:text-red-600 cursor-pointer">
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li className="hover:text-red-600 cursor-pointer">Brochure</li>
          <li className="hover:text-red-600 cursor-pointer">Brands</li>
          <li className="hover:text-red-600 cursor-pointer">About Us</li>
          <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
        </ul>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center bg-white border border-red-600 rounded-md px-3 py-1 ml-4 w-56 shadow-sm">
          <input type="text" placeholder="Search..."
            className="w-full outline-none text-gray-800 placeholder-red-600" />
          <FiSearch className="text-red-600 text-xl" />
        </div>

        {/* MOBILE ICONS (Search + Hamburger) */}
        <div className="md:hidden flex items-center gap-4">

          {/* Search icon */}
          <FiSearch
            className="text-red-600 text-2xl cursor-pointer"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          />

          {/* Hamburger icon */}
          <svg
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 text-gray-800 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>

        </div>
      </div>

      {/* MOBILE EXPANDING SEARCH BAR */}
      {showMobileSearch && (
        <div className="md:hidden bg-white p-4 border-t shadow-md flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-red-600 rounded-md px-3 py-2 outline-none"
          />
          <FiSearch className="text-red-600 text-2xl" />
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-red-700 shadow-xl p-6 flex flex-col gap-5 border-t">

          <p className="text-white hover:text-white  cursor-pointer">Home</p>

          <p onClick={() => setOpenProducts(!openProducts)}
             className= " text-white hover:text-white cursor-pointer">
            Products
          </p>

          {openProducts && (
            <ul className="ml-4 flex flex-col gap-2 text-gray-200">
              {productCategories.map((cat) => (
                <li key={cat} className="hover:text-gray-300 cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          )}

          <p className=" text-white hover:text-white cursor-pointer">Brochure</p>
          <p className=" text-white hover:text-white cursor-pointer">Brands</p>
          <p className="text-white hover:text-white cursor-pointer">About Us</p>
          <button className="bg-white text-red-800 px-6 py-2 rounded-full font-medium hover:bg-[#edebeb] transition shadow">
            Contact Us
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;

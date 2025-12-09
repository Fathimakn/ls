import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white pt-8 pb-4 px-4 md:px-[60px]">

      {/* TOP SECTION */}
      <div
        className="max-w-6xl mx-auto 
        grid grid-cols-1
        md:grid-cols-[0.6fr,0.3fr,0.9fr,0.5fr,0.5fr]
        gap-y-6 md:gap-y-10 gap-x-2
        pl-2 md:pl-0"
      >
        {/* LOGO */}
        <div className="flex flex-col md:pl-3">
          <img
            src={logo}
            alt="LS Logo"
            className="w-32 h-auto brightness-125 drop-shadow-lg md:h-20"
          />
          <p className="text-white text-l mt-2 opacity-90">
            From Trusted Brands <br /> To Trusted Hands
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="pl-2 md:pl-4">
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>

          <ul className="space-y-2 md:space-y-4 text-sm leading-snug md:mt-6">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
            <li><a href="/brochure" className="hover:text-gray-200">Brochure</a></li>
            <li><a href="/brands" className="hover:text-gray-200">Our Brands</a></li>
            <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
          </ul>
        </div>

        {/* OUR PRODUCTS */}
        <div className="pl-2 md:pl-12">
          <h3 className="font-semibold mb-4 text-lg">Our Products</h3>

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm leading-relaxed">

            {/* LEFT COLUMN */}
            <div className="flex flex-col space-y-2">
              <a href="/products/dairy">Dairy</a>
              <a href="/products/sauces">Sauces & Condiments</a>
              <a href="/products/nestle">Nestle</a>
              <a href="/products/beverages">Beverages</a>
              <a href="/products/honey">Honey</a>
              <a href="/products/oils">Cooking Oils</a>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col space-y-2">
              <a href="/products/meat">Meat & Poultry</a>
              <a href="/products/pastas">Pastas & Grains</a>
              <a href="/products/chocolate">Chocolate & Sweet Delights</a>
              <a href="/products/cereals">Cereals</a>
              <a href="/products/canned">Canned Food</a>
              <a href="/products/spices">Spices</a>
            </div>

          </div>
        </div>

        {/* LOCATE US */}
        <div className="pl-2 md:pl-6">
          <h3 className="font-semibold mb-3 text-lg">Locate Us</h3>

          <ul className="space-y-4 text-sm leading-snug md:mt-6">
            <li className="flex gap-2 items-start">
              <FiMail className="text-xl mt-0.5" /> info@lscompany.com
            </li>

            <li className="flex gap-2 items-start">
              <FiPhone className="text-xl mt-0.5" /> +965 5000 0000
            </li>

            <li className="flex gap-2 items-start">
              <FiMapPin className="text-xl mt-0.5" />
              <span>
                Kuwait City, Block 5 <br />
                Industrial Area
              </span>
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="pl-2 md:pl-10">
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>

          <div className="mt-4 md:mt-8 flex gap-3 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-200" />
            <FaLinkedin className="cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/40 my-6 md:my-8"></div>

      {/* COPYRIGHT */}
      <div className="flex justify-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} LS Company. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;

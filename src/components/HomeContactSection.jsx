// import React, { useState } from "react";
// import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const ContactSection = () => {
//   const [phone, setPhone] = useState("");

//   return (
//     <section className="w-full py-16 px-6 md:px-20 bg-[#ffffff]">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

//         {/* LEFT SIDE */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#C30010] mt-2">
//             Get In Touch
//           </h2>

//           <p className="text-gray-600 mt-4 text-lg leading-relaxed">
//             Looking for a dependable food supplier?  
//             Get in touch for retail & wholesale enquiries.
//           </p>

//           {/* Address */}
//           <div className="mt-10 flex items-start gap-4">
//             <FiMapPin className="text-[#C30010] text-3xl" />
//             <div>
//               <h3 className="font-semibold text-xl text-gray-800">Our Office</h3>
//               <p className="text-gray-600 mt-1 leading-relaxed">
//                 Kuwait  
//                 (Add exact address here)
//               </p>
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="mt-8 flex items-start gap-4">
//             <FiPhone className="text-[#C30010] text-3xl" />
//             <div>
//               <h3 className="font-semibold text-xl text-gray-800">Get in Touch</h3>
//               <p className="text-gray-600 mt-1">+965 (add phone number)</p>
//               <p className="text-gray-600">info@lscompany.com</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM — LS RED THEME */}
//         <div className="bg-[#C30010] p-8 rounded-2xl shadow-md">
//           <h3 className="text-2xl font-bold text-white mb-6">
//             Send Us a Message
//           </h3>

//           <form className="space-y-5">

//             {/* Name */}
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none text-sm focus:border-[#90000B]"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none text-sm focus:border-[#90000B]"
//             />

//             {/* PHONE INPUT WITH REAL SVG FLAGS */}
//             <PhoneInput
//               country={"kw"} // Default Kuwait
//               value={phone}
//               onChange={setPhone}
//               enableSearch={true}
//               disableSearchIcon={false}
//               inputClass="!w-full !bg-white !text-sm !py-2 !px-3 !rounded-lg !border !border-gray-300 focus:!border-[#90000B]"
//               buttonClass="!bg-white !border !border-gray-300 !rounded-lg"
//               dropdownClass="!bg-white !text-sm"
//               countryCodeEditable={false}
//               enableAreaCodes={true}
//               isValid={(value) => {
//                 if (value.match(/^\d{7,15}$/)) return true;
//                 return "Invalid phone number";
//               }}
//             />

//             {/* BUSINESS TYPE */}
//             <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#90000B]">
//               <option value="">Select Business Type</option>
//               <option value="wholesale">Wholesale</option>
//               <option value="retail">Retail</option>
//               <option value="horeca">HORECA</option>
//             </select>

//             {/* Message */}
//             <textarea
//               placeholder="Message"
//               rows="4"
//               className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#90000B]"
//             ></textarea>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-white text-[#C30010] py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
//             >
//               Submit
//             </button>

//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactSection;
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactSection = () => {
  const [phone, setPhone] = useState("");
  const [swap, setSwap] = useState(false); 

  // 🔥 Toggle swap on DESKTOP ONLY
  const handleSwap = () => {
    if (window.innerWidth >= 1024) {
      setSwap((prev) => !prev);
    }
  };

  return (
    <section className="w-full min-h-screen bg-white flex justify-center items-center py-12 px-4">

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl w-full mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 md:gap-32">

        {/* LEFT PANEL */}
        <div
          onClick={handleSwap}
          className={`
            lg:w-[55%] w-full rounded-2xl shadow-xl 
            bg-gradient-to-b from-red-600 via-red-700 via-red-800 to-red-900
            py-8 md:py-16 px-6 md:px-16 text-white 
            lg:cursor-pointer
            ${swap ? "lg:order-2" : "lg:order-1"}
          `}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
            Get In Touch
          </h2>

          <p className="text-white text-sm md:text-base -mt-2 mb-6">
            Looking for a trustable food distributor?
          </p>

          {/* VISIT */}
          <div className="flex items-start gap-4 mb-6">
            <FiMapPin className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-sm leading-relaxed">
                Shuwaik Ind.Area 3 <br />
                Block B Street 48 <br />
                Plot - 165
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4 mb-6">
            <FiMail className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Chat To Us</h3>
              <a href="/" className="text-sm hover:underline">
                info@lscompany.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4 mb-6">
            <FiPhone className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Call Us</h3>
              <a href="/" className="text-sm hover:underline">
                +965 66188732
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-3">Social Media</h3>
            <div className="flex gap-4 text-xl">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          onClick={handleSwap}
          className={`
            lg:w-2/3 w-full bg-white rounded-2xl p-5 md:p-7 
            shadow-xl border-2 border-red-600
            lg:cursor-pointer
            ${swap ? "lg:order-1" : "lg:order-2"}
          `}
        >
          <form className="flex flex-col gap-4 md:gap-6">

            {/* FIRST + LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-red-700 text-sm font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="mt-1 w-full bg-[#f8f9fa] p-3 rounded-lg border border-gray-300 shadow-sm 
                             focus:border-red-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-red-700 text-sm font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name (Optional)"
                  className="mt-1 w-full bg-[#f8f9fa] p-3 rounded-lg border border-gray-300 shadow-sm 
                             focus:border-red-600 focus:outline-none"
                />
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <label className="text-red-700 text-sm font-semibold">Company Name</label>
              <input
                type="text"
                placeholder="Company name (optional)"
                className="mt-1 w-full bg-[#f8f9fa] p-3 rounded-lg border border-gray-300 shadow-sm 
                           focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-red-700 text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="mt-1 w-full bg-[#f8f9fa] p-3 rounded-lg border border-gray-300 shadow-sm 
                           focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-red-700 text-sm font-semibold">Mobile Number</label>
              <PhoneInput
                country={"kw"}
                preferredCountries={["kw", "in", "ae", "sa", "om", "qa", "bh"]}
                enableSearch
                value={phone}
                onChange={setPhone}
                placeholder="Enter phone number"
                inputStyle={{
                  width: "100%",
                  height: "44px",
                  background: "#f8f9fa",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                buttonStyle={{
                  border: "1px solid #d1d5db",
                  borderRadius: "8px 0 0 8px",
                }}
                containerClass="focus-within:border-red-600 rounded-lg mt-1"
              />
            </div>

            {/* BUSINESS */}
            <div>
              <label className="text-red-700 text-sm font-semibold">Business Type</label>
              <select
                className="mt-1 w-full bg-[#f8f9fa] p-3 rounded-lg border border-gray-300 shadow-sm 
                           text-gray-700 text-sm focus:border-red-600 focus:outline-none"
              >
                <option value="">Select business type</option>
                <option value="wholesale">Wholesale</option>
                <option value="retail">Retail</option>
                <option value="horeca">HoReCa</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-red-700 text-sm font-semibold">Message</label>
              <textarea
                placeholder="Describe your requirements"
                className="mt-1 w-full bg-[#f8f9fa] p-3 rounded-lg border border-gray-300 shadow-sm 
                           text-sm h-24 md:h-28 resize-none focus:border-red-600 focus:outline-none"
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-full font-semibold 
                         shadow-md hover:bg-red-800 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/OurMission.png";
import aboutBanner from "../assets/image.png";
import ValuesSection from "../components/ValuesSection";
const AboutPage = () => {
  // Detect mobile BEFORE first render (prevents animation flash)
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false
  );

  // Update on screen resize/orientation change
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handler = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="w-full bg-white pt-20 md:pt-24 overflow-x-hidden">

      {/* ----------------- BANNER ----------------- */}
      <div className="w-full overflow-hidden">
        <img
          src={aboutBanner}
          alt="About Us Banner"
          className="w-full object-cover shadow-lg"
        />
      </div>

      {/* ----------------- MISSION SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-14 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ================= MOBILE (NO ANIMATION) ================= */}
        {isMobile ? (
          <>
            {/* Mission Text */}
            <div className="-mt-8">
              <h2 className="text-3xl font-extrabold text-[#C30010] mb-4">
                OUR MISSION
              </h2>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                LS Company for Wholesale and Retail Trade LLC is a reputable food
                distribution enterprise based in Kuwait, specializing in supplying
                premium food products to the HORECA sector.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We partner with trusted global manufacturers to ensure consistent
                quality, dependable availability, and professional service.
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                With over 300 satisfied clients, our mission is to deliver reliable
                food solutions that support the growth and success of our partners.
              </p>
            </div>

            {/* Mission Image */}
            <div>
              <img
                src={missionImg}
                alt="Our Mission"
                className="rounded-3xl shadow-xl w-full h-[260px] object-cover"
              />
            </div>
          </>
        ) : (
          <>
            {/* ================= DESKTOP (ANIMATION ENABLED) ================= */}

            {/* Mission Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={missionImg}
                alt="Our Mission"
                className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
              />
            </motion.div>

            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-extrabold text-[#C30010] mb-6">
                OUR MISSION
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                LS Company for Wholesale and Retail Trade LLC is a reputable food
                distribution enterprise based in Kuwait, specializing in supplying
                premium food products to the HORECA sector.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We partner with trusted global manufacturers to ensure consistent
                quality, dependable availability, and professional service.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                With over 300 satisfied clients, our mission is to deliver reliable
                food solutions that support the growth and success of our partners.
              </p>
            </motion.div>
          </>
        )}
      </section>

      {/* ----------------- VISION SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 py-14 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ================= MOBILE (NO ANIMATION) ================= */}
        {isMobile ? (
          <>
            {/* Vision Text */}
            <div className="-mt-20">
              <h2 className="text-3xl font-extrabold text-[#C30010] mb-4">
                OUR VISION
              </h2>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Our vision is to become Kuwait's most trusted food distribution partner
                recognized for quality, reliability, and exceptional service.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We aim to elevate every meal experience by providing premium products
                from leading global manufacturers.
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                We envision long-term partnerships built on trust, innovation,
                and operational excellence.
              </p>
            </div>

            {/* Vision Image */}
            <div> 
              <img
                src={missionImg}
                alt="Our Vision"
                className="rounded-3xl shadow-xl w-full h-[260px] object-cover"
              />
            </div>
          </>
        ) : (
          <>
            {/* ================= DESKTOP (ANIMATION ENABLED) ================= */}

            {/* Vision Text */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-extrabold text-[#C30010] mb-6">
                OUR VISION
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our vision is to become Kuwait's most trusted food distribution partner
                recognized for quality, reliability, and exceptional service.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We aim to elevate every meal experience by providing premium products
                from leading global manufacturers.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                We envision long-term partnerships built on trust, innovation,
                and operational excellence.
              </p>
            </motion.div>

            {/* Vision Image */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={missionImg}
                alt="Our Vision"
                className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
              />
            </motion.div>
          </>
        )}
      </section>
       <ValuesSection />
    </div>
  );
};

export default AboutPage;

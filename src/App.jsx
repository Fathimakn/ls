import "react-phone-input-2/lib/style.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroCarousel from "./components/Herocarousel";
import Footer from "./components/Footer";
import ProductCategoriesHome from "./components/ProductCategoriesHome";
import OurBrands from "./components/OurBrands";
import AboutSection from "./components/AboutSection";
import HomeContactSection from "./components/HomeContactSection";
import BrochurePage from "./components/BrochurePage";
import About from "./pages/AboutPage";
import ProductCategoriesPage from "./pages/ProductCategoriesPage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <AboutSection />
              <ProductCategoriesHome />
              <OurBrands />
              <HomeContactSection />
            </>
          }
        />

        {/* BROCHURE PAGE */}
        <Route path="/brochure" element={<BrochurePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductCategoriesPage />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;

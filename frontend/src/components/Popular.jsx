import React from "react";
import { useState, useEffect } from "react";
import { collections } from "../data/CollectionsData.js";
import { products } from "../data/ProductsData.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Popular = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [activeCategory, setActiveCategory] = useState("Presets");

  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth < 768 ? 2 : 4);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div className="w-full h-full py-16 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-800 uppercase tracking-wider mb-6">
        MOST POPULAR
      </h2>

      <div className="flex space-x-6 text-lg font-semibold mb-8">
        <span
          className={`cursor-pointer ${
            activeCategory === "Presets"
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setActiveCategory("Presets")}
        >
          Presets
        </span>
        <span
          className={`cursor-pointer ${
            activeCategory === "Courses"
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setActiveCategory("Courses")}
        >
          Courses
        </span>
      </div>

      {/* <div className="w-full h-full flex flex-row overflow-x-auto scrollbar-hide px-4 md:px-10"> */}
      {/* <div className="flex gap-6 justify-center"> */}
      <div className="w-full max-w-6xl px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          navigation
          className="w-full"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  // to={`/post/${item.id}`} // Uncomment if needed
                  className="flex flex-col items-center w-full overflow-hidden transition-transform cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-65 rounded-lg object-cover"
                  />
                  <div className="py-2">
                    <h3 className="text-xl mb-2 font-semibold">{item.title}</h3>
                    <p className="text-gray-700 text-lg">{item.price}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-gray-600 mt-5 w-full h-full flex items-center justify-center text-lg text-center py-4">
              No products found.
            </p>
          )}
        </Swiper>
      </div>
      {/* </div> */}

      {filteredProducts.length > 0 && (
        <button className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition cursor-pointer">
          View all
        </button>
      )}
    </div>
  );
};

export default Popular;

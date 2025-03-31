import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const ProductSlider = ({ products }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth < 768 ? 2 : 4);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);
  return (
    <div className="w-full max-w-6xl px-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation
        className="w-full"
      >
        {products.length > 0 ? (
          products.map((item, index) => (
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
  );
};

export default ProductSlider;

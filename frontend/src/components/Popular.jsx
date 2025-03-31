import React from "react";
import { useState, useEffect } from "react";
import { collections } from "../data/CollectionsData.js";
import { products } from "../data/ProductsData.js";

import ProductSlider from "./ProductSlider.jsx";
import { Link } from "react-router-dom";

const Popular = () => {
  const [activeCategory, setActiveCategory] = useState("Presets");

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
      <ProductSlider products={filteredProducts} />
      {/* </div> */}

      {filteredProducts.length > 0 && (
        <button className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition cursor-pointer">
          <Link to={`/collections/${activeCategory}`}>View all</Link>
        </button>
      )}
    </div>
  );
};

export default Popular;

import React from "react";
import { products } from "../data/ProductsData.js";
import { Link } from "react-router-dom";
import ProductSlider from "./ProductSlider.jsx";

const HomeProducts = ({ title }) => {
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === title.toLowerCase()
  );

  return (
    <div className="w-full h-full py-16 flex flex-col items-center mb-15">
      <div className="w-full max-w-6xl px-4 relative flex justify-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 uppercase tracking-wider text-center">
          {title}
        </h2>
        <Link
          className="hidden sm:block absolute right-4 mt-2 text-lg"
          // to={`/collections/${title.toLowerCase()}`}
        >
          View all
        </Link>
      </div>

      <Link
        className="sm:hidden mb-5 text-lg"
        //   to={`/collections/${title.toLowerCase()}`}
      >
        View all
      </Link>

      <ProductSlider products={filteredProducts} />
    </div>
  );
};

export default HomeProducts;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/ProductsData.js";

const CollectionsName = () => {
  const { collectionsName } = useParams();
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === collectionsName.toLowerCase()
  );

  return (
    <div className="max-w-7xl h-full min-h-screen mx-auto px-4 py-8">
      <div className="flex justify-center items-center mb-10">
        <h2 className="text-3xl font-semibold">
          {collectionsName.charAt(0).toUpperCase() + collectionsName.slice(1)}
        </h2>
        {/* <button className="px-4 py-2 border border-gray-400 rounded-md flex items-center space-x-2">
      <span>☰</span>
      <span>Filter</span>
    </button> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            // to={`/collections/${collectionsName}/${product.id}`}
            key={product.id}
            className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover"
              />
              {product.discount && (
                <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionsName;

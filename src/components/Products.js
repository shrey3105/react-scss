import React from "react";

const Products = ({ products, productFn }) => {
  return (
    <div className="text-2xl font-bold my-4">
      <h3>Products - {Date.now()}</h3>
      <ul>
        {products.map((product, index) => (
          <li className="text-sm text-red-500 list-decimal" key={index}>
            {product}
          </li>
        ))}
      </ul>
      <button
        className="text-slate-100 font-bold bg-red-600 rounded-lg py-2 px-4 mx-2 text-sm"
        onClick={productFn}
      >
        Add Product
      </button>
    </div>
  );
};

export default React.memo(Products);

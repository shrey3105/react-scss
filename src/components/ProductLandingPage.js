import React, { useCallback, useState } from "react";
import Products from "./Products";

const ProductLandingPage = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    setProducts([...products, "New Product" + count]);
  };

  const productFn = useCallback(() => {
    addProduct();
  }, [products]);

  return (
    <div>
      <h3 className="font-bold text-3xl">
        Count - {count} - {Date.now()}
      </h3>

      <Products products={products} productFn={productFn}></Products>
      <div className="w-full p-5">
        <button
          className="text-slate-100 font-bold bg-blue-600 rounded-lg py-2 px-4 mx-2"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment Count
        </button>
      </div>
    </div>
  );
};

export default ProductLandingPage;

import React from "react";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProductList = () => {
  const products = useLoaderData();
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.name}>{product.name}</li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default ProductList;

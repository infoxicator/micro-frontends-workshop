import React from "react";
import { faker } from '@faker-js/faker';

const ProductList = () => {
  const products = [];
  for (let i = 0; i < 5; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    });
  }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
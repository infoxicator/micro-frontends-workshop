import React from 'react';
import { faker } from '@faker-js/faker';

const Cart = () => {
  return (
    <ul style={{ color: 'blue' }}>
        <li>
          {faker.commerce.productName()} - {faker.commerce.price()} - quantity {2}
        </li>
    </ul>
  );
}

export default Cart;
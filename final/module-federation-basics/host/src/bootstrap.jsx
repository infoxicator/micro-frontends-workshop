import React from "react";
import ReactDOM from "react-dom";

import Cart from 'cart/Cart';
import ProductList from 'products/Products';

import "./index.css";

const App = () => (
  <div className="container">
   <h1>Host App</h1>
   <h2>Products</h2>
   <ProductList/>
   <h2>Cart</h2>
   <Cart />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

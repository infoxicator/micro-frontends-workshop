import React from "react";
import ReactDOM from "react-dom";
import Cart from './cart';

import "./index.css";

const App = () => (
  <div className="container">
    <h2>Cart</h2>
    <Cart />
  </div>
);
ReactDOM.render(<App />, document.getElementById("_cart"));

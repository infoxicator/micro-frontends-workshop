import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./product-list";

import "./index.css";

const App = () => (
  <div className="container">
    <h2>Products</h2>
    <ProductList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("_products"));

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Host</h1>
      <ul>
        <li><Link to="products">Products</Link></li>
        <li><Link to="cart">Cart</Link></li>
      </ul>
      { /* Render an Outlet from react-router-dom */}
    </div>
  );
}

import React from "react";
import { Outlet, Link, useNavigation } from "react-router-dom";

export default function Home() {
  const navigation = useNavigation();
  return (
    <div>
      <div style={{ position: "fixed", top: 0, right: 0 }}>
        {navigation.state !== "idle" && <p>Navigation in progress...</p>}
      </div>
      <h1>Host</h1>
      <ul>
        <li><Link to="products">Products</Link></li>
        <li><Link to="cart">Cart</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

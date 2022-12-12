import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Host from "./routes/host";

import Cart, { lazyCartLoader } from "./routes/cart-lazy";
import Products, { lazyProductsLoader } from "./routes/products-lazy";

// import Cart from './routes/cart';
// import Products from './routes/products';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Host />,
    children: [
      {
        path: "products",
        element: <Products />,
        loader: lazyProductsLoader,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: lazyCartLoader,
      },
    ],
  },
]);

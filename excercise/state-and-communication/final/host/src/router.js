import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { queryClient } from './query-client';

import Host from "./routes/host";
import { action } from "cart/UpdateCart";

import Cart, { lazyCartLoader } from "./routes/cart-lazy";
import Products, { lazyProductsLoader } from "./routes/products-lazy";
import { loader } from 'cart/CartLoader';

// import Cart from './routes/cart';
// import Products from './routes/products';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback="loading host..."><Host /></React.Suspense>,
    loader: loader(queryClient),
    action: action(queryClient),
    children: [
      {
        path: "products",
        element: <Products />,
        loader: lazyProductsLoader,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: lazyCartLoader(queryClient),
        action: action(queryClient),
      }
    ],
  },
]);

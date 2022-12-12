import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Host from "./routes/host";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Host />,
    children: [
      /* Render two routes, one for the products page and one for the cart page.
       importing the elements from the routes folder. 
       https://reactrouter.com/en/main/route/route
      */
    ],
  },
]);

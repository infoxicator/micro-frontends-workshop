import React from "react";
import ReactDOM from "react-dom";

import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router";
import { queryClient } from "./query-client";

import "./index.css";

const App = () => (
  <div className="container">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </QueryClientProvider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

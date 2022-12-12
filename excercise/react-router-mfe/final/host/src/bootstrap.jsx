import React from "react";
import ReactDOM from "react-dom";

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import "./index.css";

const App = () => (
  <div className="container">
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

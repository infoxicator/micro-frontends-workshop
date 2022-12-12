import React from "react";
import ReactDOM from "react-dom";

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import "./index.css";

const App = () => (
  <div className="container">
    {/* Render a Router Provider passing the router as a parameter 
    https://reactrouter.com/en/main/routers/router-provider */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

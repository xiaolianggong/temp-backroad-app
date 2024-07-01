import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //StrictMode is for debuging purpose, it only run in the development mode, it also cause the rander twice on console
  //it will not affact the build and production
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

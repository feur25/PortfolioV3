import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/style/style.css";
import { GlobalStyles } from "./utils";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);

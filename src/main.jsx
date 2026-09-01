import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { copy } from "./copy.js";
import "./index.css";

document.title = `${copy.siteName} | ${copy.meta.titleSuffix}`;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

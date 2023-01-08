import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import MedinicesProvider from "@Context/MedicinesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MedinicesProvider>
      <App />
    </MedinicesProvider>
  </React.StrictMode>
);

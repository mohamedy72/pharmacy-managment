import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Configuration,
  Dashboard,
  Inventory,
  Reports,
} from "./components/Routes";
import MedicinesList from "./components/SubRoutes/MedicinesList/MedicinesList";
import MedicinesGroup from "./components/SubRoutes/MedicinesGroup/MedicinesGroup";
import Payments from "./components/SubRoutes/Payments/Payments";
import Sales from "./components/SubRoutes/Sales/Sales";
import AddMedicines from "./components/SubRoutes/AddMedicines/AddMedicines";
import MedicineDetails from "./components/SubRoutes/MedicineDetails/MedicineDetails";
import { MedinicesProvider } from "./context/MedicinesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MedinicesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />}>
              <Route path="medicineslist" element={<MedicinesList />}>
                <Route path="addmedicines" element={<AddMedicines />} />
                <Route path=":medName" element={<MedicineDetails />} />
              </Route>
              <Route path="medicinesgroup" element={<MedicinesGroup />} />
            </Route>
          </Route>
          <Route path="reports" element={<Reports />}>
            <Route path="sales" element={<Sales />} />
            <Route path="payments" element={<Payments />} />
          </Route>
          <Route path="config" element={<Configuration />} />
          <Route path="*" element={<h1>Coming Soon...</h1>} />
        </Routes>
      </BrowserRouter>
    </MedinicesProvider>
  </React.StrictMode>
);

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "@Components/Layouts/RootLayout";

import {
  Configuration,
  Dashboard,
  Inventory,
  Reports,
} from "@Components/Routes";
import MedicinesList from "@Components/SubRoutes/MedicinesList/MedicinesList";
import AddMedicines from "@Components/SubRoutes/AddMedicines/AddMedicines";
import MedicineDetails from "@Components/SubRoutes/MedicineDetails/MedicineDetails";
import MedicinesGroup from "@Components/SubRoutes/MedicinesGroup/MedicinesGroup";
import Sales from "@Components/SubRoutes/Sales/Sales";
import Payments from "@Components/SubRoutes/Payments/Payments";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="inventory" element={<Inventory />}>
        <Route path="medicineslist" element={<MedicinesList />}>
          <Route path="addmedicines" element={<AddMedicines />} />
          <Route path=":medID" element={<MedicineDetails />} />
        </Route>
        <Route path="medicinesgroup" element={<MedicinesGroup />} />
      </Route>
      <Route path="reports" element={<Reports />}>
        <Route path="sales" element={<Sales />} />
        <Route path="payments" element={<Payments />} />
      </Route>
      <Route path="config" element={<Configuration />} />
      <Route path="*" element={<h1>Coming Soon...</h1>} />
    </Route>
  )
);

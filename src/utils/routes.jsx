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
import MedicineDetails from "@Components/SubRoutes/MedicineDetails/MedicineDetails";
import MedicinesGroup from "@Components/SubRoutes/MedicinesGroup/MedicinesGroup";
import Sales from "@Components/SubRoutes/Sales/Sales";
import Payments from "@Components/SubRoutes/Payments/Payments";

import NewMedicinePage, {
  action as newMedicineAction,
} from "@Components/Routes/NewMedicinePage/NewMedicinePage";
import AddMedicineForm from "@/components/SubRoutes/AddMedicineForm/AddMedicineForm";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="inventory" element={<Inventory />}>
        <Route path="medicineslist" element={<MedicinesList />}>
          <Route path="addmedicines" element={<AddMedicineForm />} />
          <Route path=":medID" element={<MedicineDetails />} />
        </Route>
        <Route path="medicinesgroup" element={<MedicinesGroup />} />
      </Route>
      <Route path="reports" element={<Reports />}>
        <Route path="sales" element={<Sales />} />
        <Route path="payments" element={<Payments />} />
      </Route>
      <Route path="config" element={<Configuration />} />
      <Route
        path="/inventory/new"
        element={<NewMedicinePage />}
        action={newMedicineAction}
      />
      <Route path="*" element={<h1>Coming Soon...</h1>} />
    </Route>
  )
);

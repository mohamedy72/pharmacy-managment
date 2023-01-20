import { lazy, Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const RootLayout = lazy(() => import("@Components/Layouts/RootLayout"));
const Configuration = lazy(() =>
  import("@Components/Routes/Configuration/Configuration")
);
const Dashboard = lazy(() => import("@Components/Routes/Dashboard/Dashboard"));
const Inventory = lazy(() => import("@Components/Routes/Inventory/Inventory"));
const Reports = lazy(() => import("@Components/Routes/Reports/Reports"));

const MedicinesList = lazy(() =>
  import("@Components/SubRoutes/MedicinesList/MedicinesList")
);
const MedicineDetails = lazy(() =>
  import("@Components/SubRoutes/MedicineDetails/MedicineDetails")
);
const MedicinesGroup = lazy(() =>
  import("@Components/SubRoutes/MedicinesGroup/MedicinesGroup")
);
const Sales = lazy(() => import("@Components/SubRoutes/Sales/Sales"));
const Payments = lazy(() => import("@Components/SubRoutes/Payments/Payments"));

const NewMedicinePage = lazy(() =>
  import("@Components/SubRoutes/AddMedicineForm/AddMedicineForm")
);

import { action as newMedicineAction } from "@Components/Routes/NewMedicinePage/NewMedicinePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="dashboard"
        element={<Dashboard />}
        handle={{
          crumb: () => <span>Dashboard</span>,
        }}
      />
      <Route
        path="inventory"
        element={<Inventory />}
        handle={{
          crumb: () => <span>Inventory</span>,
        }}
      >
        <Route
          path="medicineslist"
          element={<MedicinesList />}
          handle={{
            crumb: () => <span>Medicines List</span>,
          }}
        >
          <Route path=":medID" element={<MedicineDetails />} />
        </Route>
        <Route
          path="medicinesgroup"
          element={<MedicinesGroup />}
          handle={{
            crumb: () => <span>Medicines Group</span>,
          }}
        />
      </Route>
      <Route
        path="reports"
        element={<Reports />}
        handle={{
          crumb: () => <span>Reports</span>,
        }}
      >
        <Route
          path="sales"
          element={<Sales />}
          handle={{
            crumb: () => <span>Sales</span>,
          }}
        />
        <Route
          path="payments"
          element={<Payments />}
          handle={{
            crumb: () => <span>Payments</span>,
          }}
        />
      </Route>
      <Route
        path="config"
        element={<Configuration />}
        handle={{
          crumb: () => <span>Configuration</span>,
        }}
      />
      <Route
        path="inventory/new"
        element={<NewMedicinePage />}
        action={newMedicineAction}
      />
      <Route path="*" element={<h1>Coming Soon...</h1>} />
    </Route>
  )
);

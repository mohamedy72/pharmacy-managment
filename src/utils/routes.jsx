import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
} from "react-router-dom";

import RootLayout from "@/components/Layouts/RootLayout";
import Dashboard from "@/components/Routes/Dashboard/Dashboard";
import Inventory from "@/components/Routes/Inventory/Inventory";
import Reports from "@/components/Routes/Reports/Reports";
import Sales from "@/components/SubRoutes/Sales/Sales";
import Payments from "@/components/SubRoutes/Payments/Payments";
import Configuration from "@/components/Routes/Configuration/Configuration";

// Lazy Loaded components
const MedicinesList = lazy(() =>
  import("@Components/SubRoutes/MedicinesList/MedicinesList")
);
const MedicineDetails = lazy(() =>
  import("@Components/SubRoutes/MedicineDetails/MedicineDetails")
);
const MedicinesGroup = lazy(() =>
  import("@Components/SubRoutes/MedicinesGroup/MedicinesGroup")
);

// Loaders and Actions
import NewMedicinePage, {
  action as newMedicineAction,
} from "@Components/Routes/NewMedicinePage/NewMedicinePage";
import { detailsLoader } from "@/components/SubRoutes/MedicineDetails/MedicineDetails";
import { medicinesLoader } from "@/components/SubRoutes/MedicinesList/MedicinesList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="dashboard"
        element={<Dashboard />}
        handle={{
          crumb: () => <Link to="/dashboard">Dashboard</Link>,
        }}
      />
      <Route
        path="inventory"
        element={<Inventory />}
        handle={{
          crumb: () => <Link to="/inventory">Inventory</Link>,
        }}
      >
        <Route
          path="medicineslist"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <MedicinesList />
            </Suspense>
          }
          loader={medicinesLoader}
          handle={{
            crumb: () => (
              <Link to="/inventory/medicineslist">Medicines List</Link>
            ),
          }}
          // NOTE: Add a custom error boundry Component
          errorElement={<h1>An error has happend while fetching!</h1>}
        >
          <Route
            path=":medID"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <MedicineDetails />
              </Suspense>
            }
            loader={detailsLoader}
            handle={{
              crumb: (data) => <span>{data.name}</span>,
            }}
          />
        </Route>
        <Route
          path="medicinesgroup"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <MedicinesGroup />
            </Suspense>
          }
          handle={{
            crumb: () => <Link to="/medicinesgroup">Medicines Group</Link>,
          }}
        />
      </Route>
      <Route
        path="reports"
        element={<Reports />}
        handle={{
          crumb: () => <Link to="/reports">Reports</Link>,
        }}
      >
        <Route
          path="sales"
          element={<Sales />}
          handle={{
            crumb: () => <Link to="/reports/sales">Sales</Link>,
          }}
        />
        <Route
          path="payments"
          element={<Payments />}
          handle={{
            crumb: () => <Link to="/reports/payments">Payments</Link>,
          }}
        />
      </Route>
      <Route
        path="config"
        element={<Configuration />}
        handle={{
          crumb: () => <Link to="/config">Configuration</Link>,
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

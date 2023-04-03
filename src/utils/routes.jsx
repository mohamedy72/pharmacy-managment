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
import {
  detailsAction,
  detailsLoader,
} from "@/components/SubRoutes/MedicineDetails/MedicineDetails";
import { medicinesListLoader } from "@/components/SubRoutes/MedicinesList/MedicinesList";
import EditExistingMedicine, {
  editExistingMedicineAction,
  editExistingMedicineLoader,
} from "@/components/SubRoutes/EditExistingMedicine/EditExistingMedicine";
import Login, { loginAction } from "@/components/Routes/Auth/Login";
import Signup, { signupAction } from "@/components/Routes/Auth/Signup";
import ProtectedRoutes from "@/components/Routes/ProtectedRoutes/ProtectedRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/login" element={<Login />} action={loginAction} />
      <Route path="/signup" element={<Signup />} action={signupAction} />

      <Route element={<ProtectedRoutes />}>
        <Route
          index
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
            loader={medicinesListLoader}
            handle={{
              crumb: () => (
                <Link to="/inventory/medicineslist">Medicines List</Link>
              ),
            }}
          >
            <Route
              path=":medID"
              element={<MedicineDetails />}
              loader={detailsLoader}
              handle={{
                crumb: (data) => <span>{data.med_name}</span>,
              }}
              action={detailsAction}
            />
            <Route
              path=":medID/edit"
              element={<EditExistingMedicine />}
              loader={editExistingMedicineLoader}
              action={editExistingMedicineAction}
            />
          </Route>
          {/* TODO: Implment Medicines Group page  */}
          <Route
            path="new"
            element={<NewMedicinePage />}
            action={newMedicineAction}
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
      </Route>
      <Route path="*" element={<h1>Coming Soon...</h1>} />
    </Route>
  )
);

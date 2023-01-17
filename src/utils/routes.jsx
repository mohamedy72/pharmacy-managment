import { lazy, Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Route,
  Router,
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
  import("@Components/Routes/NewMedicinePage/NewMedicinePage")
);

const AddMedicineForm = lazy(() =>
  import("@/components/SubRoutes/AddMedicineForm/AddMedicineForm")
);

import { action as newMedicineAction } from "@Components/Routes/NewMedicinePage/NewMedicinePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route
        path="inventory"
        element={<Inventory />}
        handle={{
          crumb: () => <NavLink to="/inventory">Inventory</NavLink>,
        }}
      >
        <Route
          path="medicineslist"
          element={<MedicinesList />}
          handle={{
            crumb: () => <NavLink to="medicineslist">Medicines List</NavLink>,
          }}
        >
          <Route
            path=":medID"
            element={<MedicineDetails />}
            handle={{
              crumb: (data) => {
                return <NavLink to=":medID">{data}</NavLink>;
              },
            }}
          />
        </Route>
        <Route
          path="medicinesgroup"
          element={<MedicinesGroup />}
          handle={{
            crumb: () => <NavLink to="medicinesgroup">Medicines Group</NavLink>,
          }}
        />
      </Route>
      <Route path="reports" element={<Reports />}>
        <Route path="sales" element={<Sales />} />
        <Route path="payments" element={<Payments />} />
      </Route>
      <Route path="config" element={<Configuration />} />
      <Route
        path="inventory/new"
        element={<NewMedicinePage />}
        action={newMedicineAction}
      />
      <Route path="*" element={<h1>Coming Soon...</h1>} />
    </Route>
  )
);

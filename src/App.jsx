import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import { Layouts } from "./components/Layouts/Layouts";
import {
  Configuration,
  Dashboard,
  Inventory,
  Reports,
} from "./components/Routes";
import Header from "./components/UI/Header/Header";

import Sidebar from "./components/UI/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Layouts>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/config" element={<Configuration />} />
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;

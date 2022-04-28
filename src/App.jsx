import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layouts } from "./components/Layouts/Layouts";
import {
  Configuration,
  Dashboard,
  Inventory,
  Reports,
} from "./components/Routes";
import Header from "./components/UI/Header/Header";
import Sidebar from "./components/UI/Sidebar/Sidebar";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 56.25rem)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 56.25rem)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (matches) {
      setNavOpen(true);
    }
  }, [matches]);

  const handleNavOpen = () => {
    setNavOpen(true);
    sidebarRef.current.classList.add("active");
  };
  const handleNavClose = () => {
    setNavOpen(false);
    sidebarRef.current.classList.remove("active");
  };

  return (
    <div className="app">
      <Sidebar
        navOpen={navOpen}
        handleNavClose={handleNavClose}
        sidebarRef={sidebarRef}
      />
      <Layouts>
        <Header navOpen={navOpen} handleNavOpen={handleNavOpen} />
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

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
  const [position, setPosition] = useState({});
  const [dropdownOpen, SetdropdownOpen] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 56.25rem)")
      .addEventListener("change", (e) => setMatches(e.matches));
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
  const handleDropDown = (e) => {
    // Get the e.target position from the left of the viewport
    const elPosition = e.target.getBoundingClientRect();
    console.log(e.target.parentElement);
    // Save that value into state
    console.log(elPosition);
    setPosition(elPosition);

    // Handle opening the dropdown at the position of e.target
    SetdropdownOpen(!dropdownOpen);
  };

  return (
    <div className="app">
      <Sidebar
        navOpen={navOpen}
        handleNavClose={handleNavClose}
        sidebarRef={sidebarRef}
        handleDropDown={handleDropDown}
        position={position}
        dropdownOpen={dropdownOpen}
        SetdropdownOpen={SetdropdownOpen}
      />
      <Layouts>
        <Header navOpen={navOpen} handleNavOpen={handleNavOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                handleDropDown={handleDropDown}
                dropdownOpen={dropdownOpen}
                position={position}
                SetdropdownOpen={SetdropdownOpen}
              />
            }
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/config" element={<Configuration />} />
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;

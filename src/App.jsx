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
import Subpage from "./components/UI/Sidebar/Subpage";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 56.25rem)").matches
  );
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
    sidebarRef.current?.classList.add("active");
  };
  const handleNavClose = () => {
    setNavOpen(false);
    sidebarRef.current?.classList.remove("active");
  };
  const handleDropDown = (e) => {
    SetdropdownOpen(!dropdownOpen);
  };

  return (
    <div className="app">
      <Sidebar
        navOpen={navOpen}
        handleNavClose={handleNavClose}
        sidebarRef={sidebarRef}
        handleDropDown={handleDropDown}
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
                SetdropdownOpen={SetdropdownOpen}
              />
            }
          />
          <Route path="/inventory" element={<Inventory />}>
            <Route path=":subpage" element={<Subpage />} />
          </Route>
          <Route path="/reports" element={<Reports />} />
          <Route path="/config" element={<Configuration />} />
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;

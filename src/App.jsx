import { useRef, useState, useEffect } from "react";
import "./App.css";

import { Layouts } from "./components/Layouts/Layouts";
import Header from "./components/UI/Header/Header";
import Sidebar from "./components/UI/Sidebar/Sidebar";

import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
    if (matches) {
      setNavOpen(true);
    }
  }, [matches]);

  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
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
        <Outlet />
      </Layouts>
    </div>
  );
}

export default App;

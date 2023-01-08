import { useRef, useState, useEffect } from "react";
import "./App.css";

import { Layouts } from "./components/Layouts/Layouts";
import Header from "./components/UI/Header/Header";
import Sidebar from "./components/UI/Sidebar/Sidebar";

import { Outlet } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <div className="app">
      <Sidebar navOpen={navOpen} handleNavClose={handleNavClose} />
      <Layouts>
        <Header handleNavOpen={handleNavOpen} />
        <Outlet />
      </Layouts>
    </div>
  );
}

export default App;

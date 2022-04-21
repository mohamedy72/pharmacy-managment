import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import classes from "./navmenu.module.css";

import { ReactComponent as DashboardIcon } from "../../../assets/images/dashboard.svg";

const Navmenu = () => {
  return (
    <nav className="navmenu">
      <DashboardIcon />
      {/* <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes> */}
    </nav>
  );
};

export default Navmenu;

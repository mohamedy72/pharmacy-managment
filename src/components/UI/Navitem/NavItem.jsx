import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./navitem.module.css";
const NavItem = ({ path, icon, label, icon2, hasDropDown }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? classes.active : classes.nav_link
      }
    >
      <img src={icon} alt={label} className={classes.nav_icon} />
      {label}
      {hasDropDown && <i className={classes.icon2}>{icon2}</i>}
    </NavLink>
  );
};

export default NavItem;

import "./navitem.css";
import { ChevronDown } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

const NavItem = ({ link, handleNavClose }) => {
  const [open, setOpen] = useState(false);

  const handleClicks = () => {
    setOpen(!open);
  };

  if (link.submenus) {
    return (
      <div className={open ? "nav_item open" : "nav_item"}>
        <NavLink to={link.path} className="nav_link" onClick={handleClicks}>
          {link.icon && <span className="nav_icon">{link.icon}</span>}
          {link.title}
          <ChevronDown className="nav_chevron" />
        </NavLink>

        <div className="submenu">
          {link.submenus?.map((submenu, ind) => (
            <NavItem key={ind} link={submenu} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={link.path} className="nav_link" onClick={handleClicks}>
        {link.icon && <i className="nav_icon">{link.icon}</i>}
        {link.title}
      </NavLink>
    );
  }
};

export default NavItem;

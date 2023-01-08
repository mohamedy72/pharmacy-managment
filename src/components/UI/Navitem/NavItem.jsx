import "./navitem.css";

import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";

const NavItem = ({ link, handleNavClose }) => {
  const [open, setOpen] = useState(false);
  const { [link.icon]: Icon } = Icons;
  const [mediaScreen, setMediaScreen] = useState(
    window.matchMedia("(max-width: 45rem)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 45rem)")
      .addEventListener("change", (e) => setMediaScreen(e.matches));
  }, [mediaScreen]);

  const handleClicks = () => {
    setOpen(!open);
    if (mediaScreen && !link.submenus) {
      handleNavClose();
    }
  };

  if (link.submenus) {
    return (
      <div className={open ? "nav_item open" : "nav_item"}>
        <NavLink to={link.path} className="nav_link" onClick={handleClicks}>
          {link.icon && <Icon className="nav_icon" />}
          {link.title}
          <Icons.ChevronDown className="nav_chevron" />
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
      <NavLink
        to={link.path}
        className="nav_link"
        onClick={() => mediaScreen && handleNavClose()}
      >
        {link.icon && <Icon className="nav_icon" />}
        {link.title}
      </NavLink>
    );
  }
};

export default NavItem;

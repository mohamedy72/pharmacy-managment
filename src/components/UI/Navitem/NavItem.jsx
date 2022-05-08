import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navitem.css";

const NavItem = ({ link }) => {
  const [open, setOpen] = useState(false);
  if (link.submenus) {
    return (
      <div className={open ? "nav_item open" : "nav_item"}>
        <NavLink
          to={link.path}
          className="nav_link"
          onClick={() => setOpen(!open)}
        >
          {link.icon && <img src={link.icon} className="nav_icon" />}
          {link.title}
          <svg fill="#fff" className="nav_chevron" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
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
      <NavLink to={link.path} className="nav_link">
        {link.icon && <img src={link.icon} className="nav_icon" />}
        {link.title}
      </NavLink>
    );
  }
};

export default NavItem;

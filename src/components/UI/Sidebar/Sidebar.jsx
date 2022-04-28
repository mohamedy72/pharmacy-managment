import classes from "./sidebar.module.css";

import { IoEllipsisVertical, IoClose } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/avatar.jpg";

import { navItems } from "../../data/navitem";
import NavItem from "../Navitem/NavItem";

const Sidebar = ({ navOpen, handleNavClose, sidebarRef }) => {
  return (
    <>
      {navOpen && (
        <nav
          className={
            navOpen
              ? `
          ${classes.navmenu} ${classes.active} 
        `
              : classes.navmenu
          }
          ref={sidebarRef}
        >
          <i className={classes.navmenu_close} onClick={handleNavClose}>
            <IoClose />
          </i>
          <h1 className={classes.logo}>
            <img src={logo} alt="pharmaone logo" /> pharma one
          </h1>

          <div className={classes.user}>
            <div className={classes.user_img}>
              <img src={user} alt="User image" />
            </div>
            <p className={classes.user_info}>
              <span className={classes.user_name}>Mohamed</span>
              <span className={classes.user_role}>super admin</span>
            </p>
            <IoEllipsisVertical />
          </div>
          <ul className={classes.navlist}>
            {navItems &&
              navItems.map((item) =>
                item.label === "inventory" || item.label === "reports" ? (
                  <NavItem
                    hasDropDown
                    path={item.path}
                    label={item.label}
                    icon={item.icon}
                    icon2={item.icon2}
                    key={item.id}
                  />
                ) : (
                  <NavItem
                    icon={item.icon}
                    label={item.label}
                    key={item.id}
                    path={item.path}
                  />
                )
              )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Sidebar;

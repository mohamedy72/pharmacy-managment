import "./sidebar.css";

import NavItem from "../Navitem/NavItem";
import { Dropdown } from "../Widgets";

import menuItems from "../../data/navitem.json";

import { IoEllipsisVertical, IoClose } from "react-icons/io5";
import { CgProfile, CgLogOut } from "react-icons/cg";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/avatar.jpg";

const Sidebar = ({ navOpen, handleNavClose, sidebarRef, handleDropDown }) => {
  return (
    <>
      {navOpen && (
        <nav className="navmenu" ref={sidebarRef}>
          <i className="navmenu_close" onClick={handleNavClose}>
            <IoClose />
          </i>
          <h1 className="logo">
            <img src={logo} alt="pharmaone logo" /> pharma one
          </h1>

          <div className="user">
            <div className="user_img">
              <img src={user} alt="User image" />
            </div>
            <p className="user_info">
              <span className="user_name">Mohamed</span>
              <span className="user_role">super admin</span>
            </p>
            <IoEllipsisVertical onClick={handleDropDown} />
          </div>
          <ul className="navlist">
            {menuItems?.map((link, index) => (
              <NavItem key={index} link={link} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Sidebar;

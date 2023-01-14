// [*] ======================= Imports =======================
import { useState, useEffect, useRef } from "react";
import "./sidebar.css";

import NavItem from "../Navitem/NavItem";
import { Dropdown } from "../Widgets";

import { menuItems } from "@Data/menuItems";

import {
  ThreeDotsVertical,
  X,
  PersonCircle,
  BoxArrowRight,
} from "react-bootstrap-icons";

import logo from "@Assets/images/logo.png";
import user from "@Assets/images/avatar.jpg";
import useBodyDismiss from "@Hooks/useBodyDismiss";

// [*] ======================= Component =======================
const Sidebar = ({ navOpen, handleNavClose, sideBarRef }) => {
  const [sidebarDropdown, setSidebarDropdown] = useState(false);
  const [bottomPos, setBottomPos] = useState(0);

  const dropDownRef = useRef(null);

  useEffect(() => {
    useBodyDismiss(dropDownRef, setSidebarDropdown);
  }, [dropDownRef]);

  const handleSidebarDropdown = () => {
    setSidebarDropdown(!sidebarDropdown);
  };

  const getIconBounding = (e) => {
    const bottomPos = e.target.getBoundingClientRect().bottom;
    setBottomPos(bottomPos);
  };
  return (
    <>
      <nav className={navOpen ? "navmenu active" : "navmenu"} ref={sideBarRef}>
        <div className="nav_group">
          <X fill="#fff" onClick={handleNavClose} className="navmenu_close" />

          <h1 className="logo">
            <img src={logo} alt="pharmaone logo" /> pharma one
          </h1>
        </div>
        <div className="user">
          <div className="user_img">
            <img src={user} alt="User image" />
          </div>
          <p className="user_info">
            <span className="user_name">Mohamed</span>
            <span className="user_role">super admin</span>
          </p>
          <i>
            <ThreeDotsVertical
              onClick={(e) => {
                handleSidebarDropdown(e);
                getIconBounding(e);
              }}
            />
          </i>
          <div className="dropdown" ref={dropDownRef}>
            {sidebarDropdown && (
              <Dropdown bottomPos={bottomPos}>
                <p>
                  <i>
                    <PersonCircle />
                  </i>
                  <a href="$">my profile</a>
                </p>
                <hr />
                <p>
                  <i>
                    <BoxArrowRight />
                  </i>
                  <a href="$">Log out</a>
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <ul className="navlist">
          {menuItems?.map((link, index) => (
            <NavItem key={index} link={link} handleNavClose={handleNavClose} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

import { useRef, useEffect } from "react";
import classes from "./widgets.module.css";

const Dropdown = ({ children, position, SetdropdownOpen }) => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        SetdropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        right: position.right + 20,
        top: position.top + 90,
      }}
      className={classes.dropdown}
    >
      {children}
    </div>
  );
};

export default Dropdown;

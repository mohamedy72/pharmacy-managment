import { useRef, useEffect } from "react";
import useBodyDismiss from "../../../hooks/useBodyDismiss";
import "./widgets.css";

const Dropdown = ({ children, SetdropdownOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    useBodyDismiss(ref, SetdropdownOpen);
  }, [ref]);
  return (
    <div
      ref={ref}
      style={{
        right: "3.0625rem",
        top: "calc(100% - 2rem)",
      }}
      className="dropdown"
    >
      {children}
    </div>
  );
};

export default Dropdown;

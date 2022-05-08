import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import useBodyDismiss from "../../../hooks/personalHooks/useBodyDismiss";
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

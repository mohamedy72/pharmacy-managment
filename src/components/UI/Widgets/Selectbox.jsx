import "./widgets.css";

import { ChevronDown } from "react-bootstrap-icons";
const Selectbox = ({ children, name, isLabel, label }) => {
  return (
    <p className="selectbox">
      {isLabel && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name}>
        {children}
      </select>
      <ChevronDown />
    </p>
  );
};

export default Selectbox;

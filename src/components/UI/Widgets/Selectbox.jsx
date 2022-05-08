import "./widgets.css";

import { ChevronDown } from "react-bootstrap-icons";
const Selectbox = ({ children, name }) => {
  return (
    <p className="selectbox">
      <select id={name} name={name}>
        {children}
      </select>
      <ChevronDown />
    </p>
  );
};

export default Selectbox;

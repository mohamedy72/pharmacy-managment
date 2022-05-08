import "./widgets.css";

import { BiChevronDown } from "react-icons/bi";
const Selectbox = ({ children, name }) => {
  return (
    <p className="selectbox">
      <select id={name} name={name}>
        {children}
      </select>
      <BiChevronDown />
    </p>
  );
};

export default Selectbox;

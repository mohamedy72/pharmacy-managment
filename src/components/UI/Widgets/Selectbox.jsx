import classes from "./widgets.module.css";

import { BiChevronDown } from "react-icons/bi";
const Selectbox = ({ children, name }) => {
  return (
    <>
      <select id={name} name={name} className={classes.selectbox}>
        {children}
      </select>
      <BiChevronDown />
    </>
  );
};

export default Selectbox;

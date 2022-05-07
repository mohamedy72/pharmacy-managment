import { BiPlus } from "react-icons/bi";
import classes from "./widgets.module.css";

const Pages = ({ label, action, children }) => {
  return (
    <table className={classes.config_pages}>
      <thead className={classes.config_pages_header}>
        <tr>
          <th>{label}</th>
          <th>{action}</th>
        </tr>
      </thead>
      <hr />
      <tbody className={classes.config_pages_body}>{children}</tbody>
      <hr />
      <a href="#">
        <BiPlus /> Add a new page
      </a>
    </table>
  );
};

export default Pages;

import classes from "./widgets.module.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Status = ({ label, icon, subheader, linktext }) => {
  return (
    <div className={classes.statusbox}>
      <img src={icon} alt={subheader} />
      <h3 className={classes.status_header}>{label}</h3>
      <h4 className={classes.status_subheader}>{subheader}</h4>
      <a href="#" className={classes.status_details}>
        {linktext}
        <i>
          <AiOutlineArrowRight />
        </i>
      </a>
    </div>
  );
};

export default Status;

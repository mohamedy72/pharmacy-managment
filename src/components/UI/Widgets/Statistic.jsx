import classes from "./widgets.module.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Statistic = ({ label, icon, subheader, linktext, href }) => {
  return (
    <div className={classes.statisticbox}>
      <img src={icon} alt={subheader} />
      <h3 className={classes.stat_header}>{label}</h3>
      <h4 className={classes.stat_subheader}>{subheader}</h4>
      <a href={href} className={classes.stat_details}>
        {linktext}
        <i>
          <AiOutlineArrowRight />
        </i>
      </a>
    </div>
  );
};

export default Statistic;

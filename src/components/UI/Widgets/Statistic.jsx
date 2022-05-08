import "./widgets.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Statistic = ({ label, icon, subheader, linktext, href }) => {
  return (
    <div className="statisticbox">
      <img src={icon} alt={subheader} />
      <h3 className="stat_header">{label}</h3>
      <h4 className="stat_subheader">{subheader}</h4>
      <a href={href} className="stat_details">
        {linktext}
        <i>
          <AiOutlineArrowRight />
        </i>
      </a>
    </div>
  );
};

export default Statistic;

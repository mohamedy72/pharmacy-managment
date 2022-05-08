import "./widgets.css";

import { ArrowRight } from "react-bootstrap-icons";

const Statistic = ({ label, icon, subheader, linktext, href }) => {
  return (
    <div className="statisticbox">
      <img src={icon} alt={subheader} />
      <h3 className="stat_header">{label}</h3>
      <h4 className="stat_subheader">{subheader}</h4>
      <a href={href} className="stat_details">
        {linktext}
        <i>
          <ArrowRight />
        </i>
      </a>
    </div>
  );
};

export default Statistic;

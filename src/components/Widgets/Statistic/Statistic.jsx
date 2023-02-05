import "./statistic.css";

import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Statistic = ({ label, icon, subheader, linktext, linkpath }) => {
  return (
    <div className="statisticbox">
      <img src={icon} alt={subheader} />
      <h3 className="stat_header">{label}</h3>
      <h4 className="stat_subheader">{subheader}</h4>
      {linkpath && (
        <Link to={linkpath} className="stat_details">
          {linktext}
          <ArrowRight />
        </Link>
      )}
    </div>
  );
};

export default Statistic;

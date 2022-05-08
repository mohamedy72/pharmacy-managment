import "./widgets.css";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const State = ({ header, linktext, state, state2, label, label2, href }) => {
  return (
    <div className="statebox">
      <div className="state_header">
        <h3>{header}</h3>
        <Link to={href}>
          {linktext}
          <i className="state_icon">
            <ArrowRight />
          </i>
        </Link>
      </div>
      <hr />
      <div className="state_body">
        <div className="state">
          <h4>{state}</h4>
          <p>{label}</p>
        </div>
        <div className="state">
          <h4>{state2}</h4>
          <p>{label2}</p>
        </div>
      </div>
    </div>
  );
};

export default State;

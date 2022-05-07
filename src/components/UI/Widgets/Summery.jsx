import classes from "./widgets.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const State = ({ header, linktext, state, state2, label, label2, href }) => {
  return (
    <div className={classes.statebox}>
      <div className={classes.state_header}>
        <h3>{header}</h3>
        <Link to={href}>
          {linktext}
          <i className={classes.state_icon}>
            <AiOutlineArrowRight />
          </i>
        </Link>
      </div>
      <hr />
      <div className={classes.state_body}>
        <div className={classes.state}>
          <h4>{state}</h4>
          <p>{label}</p>
        </div>
        <div className={classes.state}>
          <h4>{state2}</h4>
          <p>{label2}</p>
        </div>
      </div>
    </div>
  );
};

export default State;

import "./widgets.css";
import { Pencil } from "react-bootstrap-icons";

const Config = ({ label, value, property, value_2, property_2 }) => {
  return (
    <div className="config">
      <div className="config_header">
        <h3>{label}</h3>
        <Pencil />
      </div>
      <hr />
      <div className="config_body">
        <div className="config_body_box">
          <h4>{value}</h4>
          <small>{property}</small>
        </div>
        <div className="config_body_box">
          <h4>{value_2}</h4>
          <small>{property_2}</small>
        </div>
      </div>
    </div>
  );
};

export default Config;

import "./config.css";
import { Pencil } from "react-bootstrap-icons";

const Config = ({
  label,
  label2,
  hasIcon,
  configsData,
  hasParagraph,
  para,
}) => {
  return (
    <div className="config">
      <div className="config_header">
        <h3>{label}</h3>
        {hasIcon ? (
          <Pencil />
        ) : (
          <h3>
            <a href="#">{label2}</a>
          </h3>
        )}
      </div>
      <hr />
      <div className="config_body">
        {hasParagraph ? (
          <p>{para}</p>
        ) : (
          configsData?.map((config, ind) => (
            <div className="config_body_box" key={ind + config.value}>
              <h4 className="config_body_value">{config.value}</h4>
              <small className="config_body_prop">{config.property}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Config;

import "./button.css";

import { Link } from "react-router-dom";

const Button = ({
  iconDir,
  label,
  icon,
  handleHeaderDropdown,
  btnClass,
  path,
}) => {
  return (
    <Link
      className={`btn ${btnClass}`}
      onClick={handleHeaderDropdown}
      to={path}
    >
      {iconDir === "left" ? (
        <span className="btn_data">
          {icon} {label}
        </span>
      ) : iconDir === "right" ? (
        <span className="btn_data">
          {label} {icon}
        </span>
      ) : (
        { label }
      )}
    </Link>
  );
};

export default Button;

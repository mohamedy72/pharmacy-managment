import "./button.css";

import { Link } from "react-router-dom";

export const LinkButton = ({
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

export const ActionButton = ({
  iconDir,
  label,
  icon,
  btnClass,
  handleClick,
  type,
  disabled,
}) => {
  const renderCustomButtons = () => {
    if (icon && iconDir) {
      if (iconDir === "left") {
        return (
          <span className="btn_data">
            {icon} {label}
          </span>
        );
      } else {
        return (
          <span className="btn_data">
            {label} {icon}
          </span>
        );
      }
    } else {
      return label;
    }
  };

  return (
    <button
      type={type}
      className={`btn ${btnClass}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {renderCustomButtons()}
    </button>
  );
};

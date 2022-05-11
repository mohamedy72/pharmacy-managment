import "./button.css";
const Button = ({ iconDir, label, icon, handleHeaderDropdown, btnClass }) => {
  return (
    <button
      className={`
      btn ${btnClass}
    `}
      onClick={handleHeaderDropdown}
    >
      {iconDir === "left" ? (
        <>
          <span className="btn_data">
            {icon} {label}
          </span>
        </>
      ) : iconDir === "right" ? (
        <>
          <span className="btn_data">
            {label} {icon}
          </span>
        </>
      ) : (
        { label }
      )}
    </button>
  );
};

export default Button;

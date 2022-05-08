import "./button.css";
const Button = ({ iconDir, label, icon, handleDropDown, btnClass }) => {
  return (
    <button
      className={`
      btn ${btnClass}
    `}
      onClick={handleDropDown}
    >
      {iconDir === "left" ? (
        <>
          <i>{icon}</i> <span>{label}</span>
        </>
      ) : iconDir === "right" ? (
        <>
          <span>{label}</span> <i>{icon}</i>
        </>
      ) : (
        { label }
      )}
    </button>
  );
};

export default Button;

import classes from "./button.module.css";
const Button = ({ iconDir, label, icon, handleDropDown, btnClass }) => {
  return (
    <button
      className={`
      ${classes.btn} ${btnClass}
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
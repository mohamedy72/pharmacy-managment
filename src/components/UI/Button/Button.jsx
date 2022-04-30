import classes from "./button.module.css";
const Button = ({ iconDir, label, icon, handleDropDown }) => {
  return (
    <button className={classes.btn} onClick={handleDropDown}>
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

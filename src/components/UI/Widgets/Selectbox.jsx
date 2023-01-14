import "./widgets.css";

const Selectbox = ({ children, name, isLabel, label }) => {
  return (
    <div className="selectbox">
      {isLabel && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name}>
        {children}
      </select>
    </div>
  );
};

export default Selectbox;

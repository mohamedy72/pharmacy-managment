import "./widgets.css";

const Dropdown = ({ children, bottomPos }) => {
  return (
    <div className="dropdown_menu">
      <span
        className="pointer"
        style={{
          bottom: bottomPos,
        }}
      ></span>
      {children}
    </div>
  );
};

export default Dropdown;

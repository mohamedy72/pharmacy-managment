import "./dropdown.css";

const Dropdown = ({ children, bottomPos }) => {
  return (
    <div className="dropdown_menu">
      <span className="pointer"></span>
      {children}
    </div>
  );
};

export default Dropdown;

import { IoSearch } from "react-icons/io5";
import "./widgets.css";

const Searchbar = ({ name, label, type, placeholder }) => {
  return (
    <p className="searchbox">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        aria-label={label}
      />
      <IoSearch />
    </p>
  );
};

export default Searchbar;

import { Search } from "react-bootstrap-icons";
import "./searchbar.css";

const Searchbar = ({ name, label, type = "text", placeholder }) => {
  return (
    <p className="searchbox">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        aria-label={label}
      />
      <Search />
    </p>
  );
};

export default Searchbar;

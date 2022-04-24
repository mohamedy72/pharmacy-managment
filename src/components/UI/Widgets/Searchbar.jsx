import { IoSearch } from "react-icons/io5";
import classes from "./widgets.module.css";

console.log(classes);
const Searchbar = ({ name, label, type, placeholder }) => {
  return (
    <p className={classes.searchbox}>
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

import classes from "./header.module.css";

import { Searchbar, Selectbox, Weather } from "../Widgets";

import { HiTranslate } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

// Data (Temporary location)
const langs = [
  {
    code: "en-US",
    label: "English (US)",
  },
  {
    code: "ar",
    label: "Arabic",
  },
  {
    code: "fr",
    label: "France",
  },
];

const Header = ({ handleNavOpen }) => {
  return (
    <header className={classes.header}>
      <GiHamburgerMenu className={classes.hamburger} onClick={handleNavOpen} />
      <Searchbar
        type="text"
        name="search-input"
        placeholder="Search for anything here.."
        label="search-input"
      />
      <p className={classes.select_lang}>
        <i className={classes.header_icon}>
          <HiTranslate />
        </i>
        <Selectbox name="language">
          {langs?.map((lang) => (
            <option value={lang.code}>{lang.label}</option>
          ))}
        </Selectbox>
      </p>
      <Weather greet="Good morning!" />
    </header>
  );
};

export default Header;

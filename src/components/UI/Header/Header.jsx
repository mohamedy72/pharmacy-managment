import "./header.css";

import { Searchbar, Selectbox, Weather } from "../Widgets";

import { Translate, List } from "react-bootstrap-icons";

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
    <header className="header">
      <List className="hamburger" onClick={handleNavOpen} />
      <Searchbar
        type="text"
        name="search-input"
        placeholder="Search for anything here.."
        label="search-input"
      />
      <div className="select_lang">
        <i className="header_icon">
          <Translate />
        </i>
        <Selectbox name="language">
          {langs?.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </Selectbox>
      </div>
      <Weather greet="Good morning!" />
    </header>
  );
};

export default Header;

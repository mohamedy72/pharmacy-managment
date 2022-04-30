import Button from "../../UI/Button/Button";
import { Dropdown } from "../../UI/Widgets";

import classes from "./layoutheader.module.css";

const LayoutHeader = ({
  btnClass,
  iconDir,
  label,
  text,
  paragraph,
  hasDropdown,
  handleDropDown,
  dropdownOpen,
  position,
  SetdropdownOpen,
}) => {
  return (
    <section className={classes.layoutheader}>
      <div className={classes.layout_text}>
        <h2>{text}</h2>
        <p>{paragraph}</p>
      </div>
      {hasDropdown ? (
        <Button
          btnClass={btnClass}
          iconDir={iconDir}
          label={label}
          handleDropDown={handleDropDown}
        />
      ) : (
        <Button btnClass={btnClass} iconDir={iconDir} label={label} />
      )}
      {dropdownOpen && (
        <Dropdown position={position} SetdropdownOpen={SetdropdownOpen}>
          <p>
            {/* <CgProfile /> */}
            <a href="$">my profile</a>
          </p>
          <p>
            {/* <CgLogOut /> */}
            <a href="$">Log out</a>
          </p>
        </Dropdown>
      )}
    </section>
  );
};

export default LayoutHeader;

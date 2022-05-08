import Button from "../../UI/Button/Button";
import { Dropdown } from "../../UI/Widgets";

import "./layoutheader.css";

import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";

const LayoutHeader = ({
  btnClass,
  iconDir,
  label,
  text,
  paragraph,
  hasDropdown,
  handleDropDown,
  dropdownOpen,
  SetdropdownOpen,
}) => {
  return (
    <section className="layoutheader">
      <div className="layout_text">
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
        <Dropdown SetdropdownOpen={SetdropdownOpen}>
          <p>
            <AiOutlineFileExcel />
            <a href="$">my profile</a>
          </p>
          <p>
            <AiOutlineFilePdf />
            <a href="$">Log out</a>
          </p>
        </Dropdown>
      )}
    </section>
  );
};

export default LayoutHeader;

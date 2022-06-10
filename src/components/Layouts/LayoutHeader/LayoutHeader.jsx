import { useState, useRef, useEffect } from "react";
import Button from "../../UI/Button/Button";
import "./layoutheader.css";

import { FileEarmarkExcel, FileEarmarkPdf } from "react-bootstrap-icons";
import { Dropdown } from "../../UI/Widgets";

import useBodyDismiss from "../../../hooks/useBodyDismiss";

const LayoutHeader = ({
  btnClass,
  iconDir,
  label,
  text,
  paragraph,
  hasDropdown,
  icon,
  path,
}) => {
  const [headerDropdown, setHeaderDropdown] = useState(false);
  const hRef = useRef(null);
  const handleHeaderDropdown = () => {
    setHeaderDropdown(!headerDropdown);
  };

  useEffect(() => {
    useBodyDismiss(hRef, setHeaderDropdown);
  }, [hRef]);
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
          icon={icon}
          handleHeaderDropdown={handleHeaderDropdown}
          path={path}
        />
      ) : (
        <Button
          btnClass={btnClass}
          iconDir={iconDir}
          label={label}
          icon={icon}
          path={path}
        />
      )}
      <div className="dropdown" ref={hRef}>
        {headerDropdown && (
          <Dropdown>
            <p>
              <FileEarmarkExcel />
              <a href="$">Excel</a>
            </p>
            <hr />
            <p>
              <FileEarmarkPdf />
              <a href="$">PDF</a>
            </p>
          </Dropdown>
        )}
      </div>
    </section>
  );
};

export default LayoutHeader;

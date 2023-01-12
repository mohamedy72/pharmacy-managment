import "./layoutheader.css";
import { useState, useRef, useEffect, Fragment } from "react";
import Button from "@Components/UI/Button/Button";
import { Dropdown } from "@Components/UI/Widgets";
import useBodyDismiss from "@Hooks/useBodyDismiss";

import { FileEarmarkExcel, FileEarmarkPdf } from "react-bootstrap-icons";

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
        <h2> {text} </h2>
        <p>{paragraph}</p>
      </div>
      {hasDropdown ? (
        <div className="layoutheader_cta">
          <Button
            btnClass={btnClass}
            iconDir={iconDir}
            label={label}
            icon={icon}
            handleHeaderDropdown={handleHeaderDropdown}
            path={path}
          />
          <div className="dropdown" ref={hRef}>
            {headerDropdown && (
              <Dropdown>
                <p>
                  <FileEarmarkExcel />
                  <a href="@Assets/files/sampleExcel.xls" download>
                    Excel
                  </a>
                </p>
                <hr />
                <p>
                  <FileEarmarkPdf />
                  <a href="../../../assets/files/PDFSample.pdf" download>
                    PDF
                  </a>
                </p>
              </Dropdown>
            )}
          </div>
        </div>
      ) : (
        <Button
          btnClass={btnClass}
          iconDir={iconDir}
          label={label}
          icon={icon}
          path={path}
        />
      )}
    </section>
  );
};

export default LayoutHeader;

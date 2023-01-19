import "./layoutheader.css";
import { useState, useRef, useEffect } from "react";
import { Dropdown } from "@Components/UI/Widgets";
import useBodyDismiss from "@Hooks/useBodyDismiss";

import { FileEarmarkExcel, FileEarmarkPdf } from "react-bootstrap-icons";
import { ActionButton, LinkButton } from "@/components/UI/Button/Button";

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
        <div className="breadcrumbs">{text}</div>
        <p>{paragraph}</p>
      </div>
      {hasDropdown ? (
        <div className="layoutheader_cta">
          <ActionButton
            iconDir={iconDir}
            icon={icon}
            label={label}
            btnClass={btnClass}
            handleClick={handleHeaderDropdown}
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
        <LinkButton
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

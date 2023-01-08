import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import "./reports.css";

import { reports } from "../../../data/reports";
import { Statistic } from "../../UI/Widgets";
import { Outlet } from "react-router-dom";

const Reports = () => {
  return (
    <section className="reports">
      <LayoutHeader
        layoutClass="reports_header"
        textClass="reports_header_text"
        btnClass="reports_btn"
        iconDir="left"
        text="Reports"
        paragraph="Overall reports related to the pharmacy."
        path=""
      />
      <section className="reports_stats">
        {reports?.map((report) => (
          <Statistic
            key={report.id}
            icon={report.icon}
            id={report.id}
            label={report.label}
            subheader={report.subheader}
            linktext={report.linktext}
            linkpath={report.linkpath}
          />
        ))}
        <Outlet />
      </section>
    </section>
  );
};
export default Reports;

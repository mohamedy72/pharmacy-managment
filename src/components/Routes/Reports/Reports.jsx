import "./reports.css";

import LayoutHeader from "@Components/Layouts/LayoutHeader/LayoutHeader";
import { Statistic } from "@/components/Widgets";
import { reports } from "@Data/reports";

import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";

const Reports = () => {
  return (
    <section className="reports">
      <LayoutHeader
        layoutClass="reports_header"
        textClass="reports_header_text"
        btnClass="reports_btn"
        iconDir="left"
        text={<Breadcrumbs />}
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

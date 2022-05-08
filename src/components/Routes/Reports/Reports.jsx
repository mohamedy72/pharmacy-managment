import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import classes from "./reports.module.css";

import { reports } from "../../data/reports";
import { Statistic } from "../../UI/Widgets";

const Reports = () => {
  return (
    <section className={classes.reports}>
      <LayoutHeader
        layoutClass={classes.reports_header}
        textClass={classes.reports_header_text}
        btnClass={classes.reports_btn}
        iconDir="left"
        text="Reports"
        paragraph="Overall reports related to the pharmacy."
      />
      <section className={classes.reports_stats}>
        {reports?.map((report) => (
          <Statistic
            key={report.id}
            icon={report.icon}
            id={report.id}
            label={report.label}
            subheader={report.subheader}
            linktext={report.linktext}
          />
        ))}
      </section>
    </section>
  );
};
export default Reports;

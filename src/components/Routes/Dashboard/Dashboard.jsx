import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";

import "./dashboard.css";

import { dashboard_statistics } from "../../../data/dashboard_statistics";
import { dashboard_summery } from "../../../data/dashboard_summery";
import { Summery, Statistic } from "../../UI/Widgets";
import { ArrowDownShort } from "react-bootstrap-icons";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <LayoutHeader
        btnClass="download_btn"
        iconDir="right"
        label="Download layout"
        text="Dashboard"
        paragraph="A quick data overview of the inventory."
        icon={<ArrowDownShort />}
        hasDropdown
        path=""
      />
      <section className="dashboard_statistics">
        {dashboard_statistics?.map((stat) => (
          <Statistic
            key={stat.id}
            icon={stat.icon}
            label={stat.label}
            subheader={stat.subheader}
            linktext={stat.linktext}
            linkpath={stat?.linkpath}
          />
        ))}
      </section>
      <section className="dashboard_summery">
        {dashboard_summery?.map((sum) => (
          <Summery
            key={sum.state}
            href={sum.href}
            header={sum.header}
            linktext={sum.linktext}
            state={sum.state}
            state2={sum.state2}
            label={sum.label}
            label2={sum.label2}
          />
        ))}
      </section>
    </section>
  );
};
export default Dashboard;

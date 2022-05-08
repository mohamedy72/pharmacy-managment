import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";

import "./dashboard.css";

import { statistics } from "../../data/statistics";
import { summery } from "../../data/summery";
import { Summery, Statistic } from "../../UI/Widgets";

const Dashboard = ({
  handleDropDown,
  dropdownOpen,
  position,
  SetdropdownOpen,
}) => {
  return (
    <section className="dashboard">
      <LayoutHeader
        iconDir="right"
        label="Download layout"
        text="Dashboard"
        paragraph="A quick data overview of the inventory."
        hasDropdown
        handleDropDown={handleDropDown}
        dropdownOpen={dropdownOpen}
        position={position}
        SetdropdownOpen={SetdropdownOpen}
      />
      <section className="dashboard_statistics">
        {statistics?.map((status) => (
          <Statistic
            key={status.id}
            icon={status.icon}
            label={status.label}
            subheader={status.subheader}
            linktext={status.linktext}
          />
        ))}
      </section>
      <section className="dashboard_summery">
        {summery?.map((sum) => (
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

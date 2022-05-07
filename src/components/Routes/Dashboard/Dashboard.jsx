import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";

import classes from "./dashboard.module.css";

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
    <section className={classes.dashboard}>
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
      <section className={classes.dashboard_statues}>
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
      <section className={classes.dashboard_states}>
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

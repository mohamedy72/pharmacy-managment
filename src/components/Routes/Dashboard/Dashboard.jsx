import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import Status from "../../UI/Widgets/Status";
import classes from "./dashboard.module.css";

import { statues } from "../../data/statues";
import { states } from "../../data/states";
import State from "../../UI/Widgets/State";

const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
      <LayoutHeader
        layoutClass={classes.dashboard_header}
        textClass={classes.dashboard_header_text}
        iconDir="right"
        label="Download layout"
        text="Dashboard"
        paragraph="A quick data overview of the inventory."
      />
      <section className={classes.dashboard_statues}>
        {statues?.map((status) => (
          <Status
            key={status.id}
            icon={status.icon}
            label={status.label}
            subheader={status.subheader}
            linktext={status.linktext}
          />
        ))}
      </section>
      <section className={classes.dashboard_states}>
        {states?.map((state) => (
          <State
            header={state.header}
            linktext={state.linktext}
            state={state.state}
            state2={state.state2}
            label={state.label}
            label2={state.label2}
          />
        ))}
      </section>
    </section>
  );
};
export default Dashboard;

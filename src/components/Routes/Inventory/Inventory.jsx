import React from "react";
import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import { Status } from "../../UI/Widgets";
import classes from "./inventory.module.css";

import inventory from "../../data/inventory";

const Inventory = () => {
  return (
    <section className={classes.inventory}>
      <LayoutHeader
        layoutClass={classes.inventory_header}
        textClass={classes.inventory_header_text}
        iconDir="left"
        label="Add new item"
        text="Inventory"
        paragraph="List of medicines available for sales."
      />
      <section className={classes.inventory_states}>
        {inventory?.map((inv) => (
          <Status
            id={inv.id}
            icon={inv.icon}
            label={inv.label}
            subheader={inv.subheader}
            linktext={inv.linktext}
          />
        ))}
      </section>
    </section>
  );
};
export default Inventory;

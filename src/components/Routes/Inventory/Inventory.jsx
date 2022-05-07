import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import { Statistic } from "../../UI/Widgets";
import classes from "./inventory.module.css";

import { inventory } from "../../data/inventory";

const Inventory = () => {
  return (
    <section className={classes.inventory}>
      <LayoutHeader
        layoutClass={classes.inventory_header}
        textClass={classes.inventory_header_text}
        btnClass={classes.inventory_btn}
        iconDir="left"
        label="Add new item"
        text="Inventory"
        paragraph="List of medicines available for sales."
      />
      <section className={classes.inventory_stats}>
        {inventory?.map((inv) => (
          <Statistic
            id={inv.id}
            icon={inv.icon}
            label={inv.label}
            subheader={inv.subheader}
            linktext={inv.linktext}
            href={inv.href}
          />
        ))}
      </section>
    </section>
  );
};
export default Inventory;

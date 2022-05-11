import LayoutHeader from "../../Layouts/LayoutHeader/LayoutHeader";
import { Statistic } from "../../UI/Widgets";
import "./inventory.css";
import { inventory } from "../../data/inventory";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useOutlet } from "react-router-dom";

const Inventory = () => {
  return (
    <section className="inventory">
      <LayoutHeader
        layoutClass="inventory_header"
        textClass="inventory_header_text"
        btnClass="inventory_btn"
        iconDir="left"
        label="Add new item"
        text="Inventory"
        paragraph="List of medicines available for sales."
      />
      <section className="inventory_stats">
        {inventory?.map((inv) => (
          <Statistic
            key={inv.id}
            id={inv.id}
            icon={inv.icon}
            label={inv.label}
            subheader={inv.subheader}
            linktext={inv.linktext}
            linkpath={inv.linkpath}
          />
        ))}
      </section>
    </section>
  );
};
export default Inventory;

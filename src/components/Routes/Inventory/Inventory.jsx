import "./inventory.css";
import LayoutHeader from "@Components/Layouts/LayoutHeader/LayoutHeader";
import { Statistic } from "@Components/UI/Widgets";
import { inventory } from "@Data/inventory";
import { locationToArray } from "@Utils/locationToArray";

import { Plus } from "react-bootstrap-icons";
import { Outlet, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Inventory = () => {
  let { pathname } = useLocation();
  const pathnameArr = locationToArray(pathname);

  return (
    <section className="inventory">
      <LayoutHeader
        layoutClass="inventory_header"
        textClass="inventory_header_text"
        btnClass="inventory_btn"
        iconDir="left"
        label="Add new item"
        text={<Breadcrumbs />}
        paragraph="List of medicines available for sales."
        icon={<Plus />}
        path={`new`}
      />
      {pathnameArr.length === 1 ? (
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
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default Inventory;

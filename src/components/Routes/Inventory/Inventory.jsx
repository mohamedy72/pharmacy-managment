import "./inventory.css";
import LayoutHeader from "@Components/Layouts/LayoutHeader/LayoutHeader";
import { Statistic } from "@/components/Widgets";
import { inventory } from "@Data/inventory";
import { locationToArray } from "@Utils/locationToArray";

import { Plus } from "react-bootstrap-icons";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";

const Inventory = () => {
  let { pathname } = useLocation();
  const pathnameArr = locationToArray(pathname);
  const medicines = useOutletContext();

  return (
    <section className="inventory">
      {pathnameArr.length === 1 ? (
        <>
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
        </>
      ) : (
        <Outlet context={medicines} />
      )}
    </section>
  );
};
export default Inventory;

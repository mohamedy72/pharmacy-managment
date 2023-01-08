import "./inventory.css";
import LayoutHeader from "@Components/Layouts/LayoutHeader/LayoutHeader";
import { Statistic } from "@Components/UI/Widgets";
import { inventory } from "@Data/inventory";
import { locationToArray } from "@Utils/locationToArray";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Plus } from "react-bootstrap-icons";
import { Outlet, useLocation, useParams } from "react-router-dom";

const Inventory = () => {
  let { pathname } = useLocation();
  const { param } = useParams();
  const pathnameArr = locationToArray(pathname);

  const breadcrumbs = pathnameArr?.map((name, ind) => {
    const notLast = ind < pathnameArr.length - 1;
    if (notLast) {
      return (
        <>
          <span className="name">{name}</span>
          <span className="arrow">&gt;</span>
        </>
      );
    } else {
      return <span className="name">{name}</span>;
    }
  });

  return (
    <section className="inventory">
      <LayoutHeader
        layoutClass="inventory_header"
        textClass="inventory_header_text"
        btnClass="inventory_btn"
        iconDir="left"
        label="Add new item"
        text={breadcrumbs.map((bread) => bread)}
        paragraph="List of medicines available for sales."
        icon={<Plus />}
        path="/inventory/new"
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

import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Plus } from "react-bootstrap-icons";
import "./medicinesgroup.css";

const MedicinesGroup = () => {
  return (
    <section>
      <LayoutHeader
        layoutClass="inventory_header"
        textClass="inventory_header_text"
        btnClass="inventory_btn"
        iconDir="left"
        label="Add new Group"
        text={<Breadcrumbs />}
        paragraph="List of groups available for sales."
        icon={<Plus />}
        path={`new`}
      />
    </section>
  );
};

export default MedicinesGroup;

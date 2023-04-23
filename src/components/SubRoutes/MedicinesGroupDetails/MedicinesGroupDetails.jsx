import "./medicinesGroupDetails.css";
import { getAllMedicines } from "@/utils/apiCalls";
import { useLoaderData } from "react-router-dom";
import Table from "@/components/UI/Tables/Table";
import { Fragment } from "react";
import { ActionButton } from "@/components/UI/Button/Button";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Plus, Trash } from "react-bootstrap-icons";

const MedicinesGroupDetails = () => {
  const filteredMedicines = useLoaderData();
  return (
    <section className="medicines_group_details">
      <LayoutHeader
        text={<Breadcrumbs />}
        btnClass="btn_red"
        paragraph="Detailed view of a medicine group."
        icon={<Plus />}
        label="Add Medicine"
        iconDir="left"
      />
      <Table>
        <Table.Header>
          <tr>
            <th>Medicine Name</th>
            <th>No of Medicines</th>
            <th>Action</th>
          </tr>
        </Table.Header>

        <Table.Body>
          {filteredMedicines?.map((med) => (
            <Fragment key={med.id}>
              <tr>
                <th>{med.med_name}</th>
                <td>{med.med_stock}</td>
                <td>
                  <ActionButton
                    btnClass="btn_transparent"
                    iconDir="left"
                    label="Remove from Group"
                    icon={<Trash />}
                  />
                </td>
              </tr>
            </Fragment>
          ))}
        </Table.Body>
      </Table>

      <ActionButton
        btnClass="btn_white"
        iconDir={"left"}
        icon={<Trash />}
        label={"Delete Group"}
      />
    </section>
  );
};

export default MedicinesGroupDetails;

export async function medicinesGroupDetailsLoader({ params }) {
  const allMedicines = await getAllMedicines();
  const filteredMedicines = allMedicines.filter(
    (med) => med.med_group === params.medGroup
  );

  return filteredMedicines;
}

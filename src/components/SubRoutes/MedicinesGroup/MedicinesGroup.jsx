import "./medicinesgroup.css";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Table from "@/components/UI/Tables/Table";
import { Searchbar } from "@/components/Widgets";
import { groupTableHeader } from "@/data/groupTableHeader";
import { ArrowDownUp, ArrowRightShort, Plus } from "react-bootstrap-icons";
import { Link, useLoaderData } from "react-router-dom";
import { getAllMedicines } from "@/utils/apiCalls";

const MedicinesGroup = () => {
  const medicines = useLoaderData();

  const medGroup = medicines?.reduce((group, currentMed) => {
    const { med_group, med_name } = currentMed;

    return { ...group, [med_group]: [...(group[med_group] || []), med_name] };
  }, {});

  const medGroupArray = Object.entries(medGroup);

  const tableHeaders = groupTableHeader?.map((header, ind) => (
    <th key={header + ind}>
      {header} <ArrowDownUp className="header_icon" />
    </th>
  ));

  return (
    <section className="group_list">
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
      <div className="group_header">
        <Searchbar
          label="Search Medicine Groups"
          name="search_group"
          placeholder="Search Medicine Groups.."
        />
      </div>
      <div className="group_table">
        <Table>
          <Table.Header>
            <tr>{tableHeaders}</tr>
          </Table.Header>
          <Table.Body>
            {medGroupArray.map((group, ind) => {
              const [groupName, meds] = group;

              return (
                <tr key={ind * 1.251}>
                  <th>{groupName.replace("_", " ")}</th>
                  <td>{meds.length}</td>
                  <td>
                    <Link to={groupName}>
                      Details <ArrowRightShort />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default MedicinesGroup;

export const medicinesGroupLoader = async () => {
  const res = await getAllMedicines();
  return res;
};

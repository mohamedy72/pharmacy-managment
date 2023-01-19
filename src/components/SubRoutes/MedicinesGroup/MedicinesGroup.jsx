import "./medicinesgroup.css";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Table from "@/components/UI/Tables/Table";
import { Searchbar } from "@/components/UI/Widgets";
import { groupTableHeader } from "@/data/groupTableHeader";
import { ArrowDownUp, ArrowRightShort, Plus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MedicinesGroup = () => {
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
            <tr>
              <th>generic</th>
              <td>02</td>
              <td>
                <Link href="#">
                  details <ArrowRightShort />
                </Link>
              </td>
            </tr>
            <tr>
              <th>diabetes</th>
              <td>02</td>
              <td>
                <Link href="#">
                  details <ArrowRightShort />
                </Link>
              </td>
            </tr>
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default MedicinesGroup;

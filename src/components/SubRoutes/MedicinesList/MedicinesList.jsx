import "./medicineslist.css";

import { Searchbar, Selectbox } from "@Components/UI/Widgets";
import Table from "@/components/UI/Tables/Table";
import { locationToArray } from "@Utils/locationToArray";
import { medicinesTableHeaders } from "@/data/medicinesTableHeaders";

import {
  useLocation,
  Outlet,
  Link,
  useLoaderData,
  useRouteError,
  defer,
  Await,
} from "react-router-dom";
import { Funnel, Plus } from "react-bootstrap-icons";

import {
  ArrowDownUp,
  ArrowLeftShort,
  ArrowRightShort,
} from "react-bootstrap-icons";
import MedicinesTableData from "@/components/UI/Tables/MedicinesTableData";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { getAllMedicines } from "@/utils/apiCalls";
import { useEffect, useState } from "react";

const MedicinesList = () => {
  const medicines = useLoaderData();
  // const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchMedicines = async () => {
  //     try {
  //       const data = await getAllMedicines();
  //       setMedicines(data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchMedicines();
  // }, []);

  const { pathname } = useLocation();
  const pathnameArr = locationToArray(pathname);

  const tableHeaders = medicinesTableHeaders?.map((header, ind) => (
    <th key={header + ind}>
      {header} <ArrowDownUp className="header_icon" />
    </th>
  ));

  return pathnameArr.length <= 2 ? (
    <section className="medicines_list">
      <LayoutHeader
        layoutClass="inventory_header"
        textClass="inventory_header_text"
        btnClass="inventory_btn"
        iconDir="left"
        label="Add new item"
        text={<Breadcrumbs />}
        paragraph="List of medicines available for sales."
        icon={<Plus />}
        path={`/inventory/new`}
      />
      <div className="list_header">
        <Searchbar
          label="Search Medicine Inventory.."
          type="text"
          placeholder="Search Medicine Inventory.."
          name="search_inventory"
        />
        <div className="select_group">
          <Funnel />
          <Selectbox name="medicines_group">
            <option value="select group" defaultChecked>
              Select group
            </option>
            <option value="generic">Generic medicine</option>
            <option value="diabetes">Diabetes</option>
            <option value="hypertension">Hypertens ion</option>
          </Selectbox>
        </div>
      </div>
      <div className="list_table">
        <Table>
          <Table.Header>
            <tr>{tableHeaders}</tr>
          </Table.Header>
          <Table.Body>
            <MedicinesTableData medicines={medicines} />
          </Table.Body>
        </Table>
        <div className="list_controls">
          <p>Showing 1 - 8 results of {medicines?.length}</p>
          <div className="pagination">
            <i className="arrow left end">
              <ArrowLeftShort />
            </i>
            <Selectbox name="pages">
              <option value="page 01" defaultChecked>
                Page 01
              </option>
              <option value="page 02" defaultChecked>
                Page 02
              </option>
              <option value="page 03" defaultChecked>
                Page 03
              </option>
            </Selectbox>
            <i className="arrow right">
              <ArrowRightShort />
            </i>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Outlet />
  );
};

export default MedicinesList;

export const medicinesListLoader = async () => {
  const res = await getAllMedicines();
  return res;
};

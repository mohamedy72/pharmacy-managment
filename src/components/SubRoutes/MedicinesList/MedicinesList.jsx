import "./medicineslist.css";
import { Fragment, useContext } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";

import { Searchbar, Selectbox } from "../../UI/Widgets";
import Table from "../../UI/Table/Table";

import { Funnel } from "react-bootstrap-icons";
import { headers } from "../../data/medicineslist";
import {
  ArrowDownUp,
  ArrowLeftShort,
  ArrowRightShort,
} from "react-bootstrap-icons";

import { locationToArray } from "../../../utils/locationToArray";
import { MedicinesContext } from "../../../context/MedicinesContext";

const MedicinesList = () => {
  const { medicines } = useContext(MedicinesContext);
  const { pathname } = useLocation();
  const pathnameArr = locationToArray(pathname);

  const tableHeaders = headers?.map((header, ind) => (
    <th key={header + ind}>
      {header} <ArrowDownUp className="header_icon" />
    </th>
  ));

  const tableData = medicines.medicines.map((med, ind) => {
    console.log(med);
    return (
      <Fragment key={med + ind}>
        <tr key={med.name + ind}>
          {med.name && (
            <th scope="row" className="med_name">
              {med.name}
            </th>
          )}
          <td> {med.id} </td>
          <td> {med.group} </td>
          <td> {med.qty} </td>
          <td className="action">
            <Link to={med.name}>Details</Link>
          </td>
        </tr>
      </Fragment>
    );
  });

  return pathnameArr.length <= 2 ? (
    <section className="medicines_list">
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
          <Table.Header>{tableHeaders}</Table.Header>
          <Table.Body>{tableData}</Table.Body>
        </Table>
        <div className="list_controls">
          <p>Showing 1 - 8 results of {tableData?.length}</p>
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

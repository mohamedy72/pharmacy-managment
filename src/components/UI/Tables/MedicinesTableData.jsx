import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./tables.css";

const MedicinesTableData = ({ medicines }) => {
  return (
    <>
      {medicines?.map((med, ind) => (
        <Fragment key={med + ind}>
          <tr key={med.med_name + ind} className={`data_row`}>
            {med.med_name && (
              <th scope="row" className="med_name">
                {med.med_name}
              </th>
            )}
            <td className="hide_on_mobile"> {med.med_ID} </td>
            <td className="hide_on_mobile"> {med.med_group} </td>
            <td> {med.med_stock} </td>
            <td className="action">
              <Link to={med.med_ID}>Details</Link>
            </td>
          </tr>
        </Fragment>
      ))}
    </>
  );
};

export default MedicinesTableData;

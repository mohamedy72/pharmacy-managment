import "./tables.css";

import { Fragment, useState } from "react";
import { useMedData } from "@/contexts/MedicinesContext";
import { Link } from "react-router-dom";
// import { medicinesList } from "@Data/medicinesList";

const MedicinesTableData = () => {
  const { medicines } = useMedData();
  // const [medicines, setMedicines] = useState(medicinesList);

  return (
    <>
      {medicines?.map((med, ind) => (
        <Fragment key={med + ind}>
          <tr key={med.name + ind} className={`data_row`}>
            {med.name && (
              <th scope="row" className="med_name">
                {med.name}
              </th>
            )}
            <td className="hide_on_mobile"> {med.id} </td>
            <td className="hide_on_mobile"> {med.group} </td>
            <td> {med.qty} </td>
            <td className="action">
              <Link to={med.id}>Details</Link>
            </td>
          </tr>
        </Fragment>
      ))}
    </>
  );
};

export default MedicinesTableData;
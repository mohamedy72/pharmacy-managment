import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./medicinedetails.css";
import { Config } from "../../UI/Widgets";
import { MedicinesContext } from "../../../context/MedicinesContext";

const MedicineDetails = () => {
  const { medName } = useParams();
  const { medicines } = useContext(MedicinesContext);

  return (
    <section className="medicine_detail">
      {medicines.map((med, ind) => {
        return (
          medName === med.name && (
            <>
              <Config
                label="Medicine"
                configsData={[
                  {
                    property: "Medicine ID",
                    value: med.id,
                  },
                  {
                    property: "Medicine Group",
                    value: med.group,
                  },
                ]}
              />
              <Config
                label="Inventory in Qty"
                label2="send stock request >>"
                configsData={[
                  {
                    property: "lifetime supply",
                    value: med.info.lifetimeSupply,
                  },
                  {
                    property: "lifetime sales",
                    value: med.info.lifetimeSales,
                  },
                  {
                    property: "stock lift",
                    value: med.info.stock,
                  },
                ]}
              />
              <Config label="how to use" hasParagraph para={med.info.dose} />
              <Config
                label="side effects"
                hasParagraph
                para={med.info.sideEffects}
              />
            </>
          )
        );
      })}
    </section>
  );
};

export default MedicineDetails;

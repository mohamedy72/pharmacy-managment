import { defer, useLoaderData, Await } from "react-router-dom";
import "./medicinedetails.css";
import axios from "axios";
import { Info } from "@/components/UI/Widgets/Info";
import { medicineDetails } from "@/data/medicineDetails";
import { GridLayout } from "@/components/Layouts/Layouts";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { PenFill } from "react-bootstrap-icons";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Searchbar } from "@/components/UI/Widgets";

const MedicineDetails = () => {
  const data = useLoaderData();
  console.log(`Data from MedicinesDetails: ${data}`);
  return (
    <section className="medicine_detail">
      <LayoutHeader
        btnClass="btn_edit"
        iconDir="left"
        icon={<PenFill />}
        label="edit details"
        text={<Breadcrumbs />}
        paragraph="List of medicines available for sales."
        path="/inventory/edit"
      />
      <Searchbar
        label="search_medicine_details"
        name="search_details"
        placeholder="search in medicine details"
      />

      <GridLayout gridClass="info_page">
        {/* {data.info.values?.map((med) => console.log(med))} */}
        <p>Your data is ready</p>
      </GridLayout>
    </section>
  );
};

export default MedicineDetails;

/**
 * <Info title={detail.title} key={med.id}>
            {typeof detail.body === "string" && med.info.dose
              ? <p>{med.info.dose}</p> || <p>{med.info.sideEffects}</p>
              : med.body.map((data) => (
                  <div key={data.identifer}>
                    <h4>{data.stat}</h4>
                    <small>{data.identifer}</small>
                  </div>
                ))}
          </Info>
 * 
 */

export const detailsLoader = async ({ params }) => {
  const { medID } = params;
  const res = await axios(`http://localhost:4000/medicines/${medID}`);
  console.log(res);
};

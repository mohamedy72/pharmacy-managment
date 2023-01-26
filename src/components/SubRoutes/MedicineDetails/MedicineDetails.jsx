import { defer, useLoaderData, Await } from "react-router-dom";
import "./medicinedetails.css";
import axios from "axios";
import { Info } from "@/components/UI/Widgets/Info";
import { medicineDetails } from "@/data/medicineDetails";
import { GridLayout } from "@/components/Layouts/Layouts";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { FlagFill, PenFill } from "react-bootstrap-icons";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Searchbar } from "@/components/UI/Widgets";
import { Suspense } from "react";

const MedicineDetails = () => {
  const drug = useLoaderData();
  return (
    <Suspense fallback={<h1>Hello</h1>}>
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
          <Info
            title="Medicines"
            withMultipleStats
            stats={[
              {
                label: "Medicine ID",
                value: drug?.id.slice(-3),
              },
              {
                label: "Medicine Group",
                value: drug?.group,
              },
            ]}
          />
          <Info
            title="Stock"
            withMultipleStats
            stats={[
              {
                label: "Lifetime Supply",
                value: drug?.qty,
              },
              {
                label: "Lifetime Sales",
                value: 120,
              },
              {
                label: "Stock Left",
                value: drug?.info.stock,
              },
            ]}
          />
          <Info
            title="How to use"
            withSingleParagraph
            paragraph={drug?.info.dose}
          />
          <Info
            title="Side Effects"
            withSingleParagraph
            paragraph={drug?.info.sideEffects}
          />
        </GridLayout>
      </section>
    </Suspense>
  );
};

export default MedicineDetails;

export const detailsLoader = async ({ params }) => {
  const { medID } = params;
  const res = await axios(`http://localhost:4000/medicines/${medID}`);
  return res.data;
};

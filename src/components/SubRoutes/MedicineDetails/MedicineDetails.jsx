import {
  defer,
  useLoaderData,
  Await,
  useLocation,
  useParams,
} from "react-router-dom";
import "./medicinedetails.css";
import axios from "axios";
import { Info } from "@/components/UI/Widgets/Info";
import { GridLayout } from "@/components/Layouts/Layouts";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { FlagFill, PenFill } from "react-bootstrap-icons";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Searchbar } from "@/components/UI/Widgets";
import { Suspense, useEffect, useState } from "react";
import { getSingleMedicine } from "@/utils/apiCalls";

const MedicineDetails = () => {
  const [medicine] = useLoaderData();

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
                value: medicine.med_ID.slice(-3),
              },
              {
                label: "Medicine Group",
                value: medicine?.med_group,
              },
            ]}
          />
          <Info
            title="Stock"
            withMultipleStats
            stats={[
              {
                label: "Lifetime Supply",
                value: medicine?.lifetime_supply,
              },
              {
                label: "Lifetime Sales",
                value: medicine?.lifetime_sales,
              },
              {
                label: "Stock Left",
                value: medicine?.med_stock,
              },
            ]}
          />
          <Info
            title="How to use"
            withSingleParagraph
            paragraph={medicine?.dose}
          />
          <Info
            title="Side Effects"
            withSingleParagraph
            paragraph={medicine?.side_effects}
          />
        </GridLayout>
      </section>
    </Suspense>
  );
};

export default MedicineDetails;

export const detailsLoader = async ({ params }) => {
  const { medID } = params;
  const res = await getSingleMedicine(medID);
  return res;
};

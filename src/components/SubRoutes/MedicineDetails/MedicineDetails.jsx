import "./medicinedetails.css";
import { useLoaderData } from "react-router-dom";
import { GridLayout } from "@/components/Layouts/Layouts";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { PenFill, Trash3Fill } from "react-bootstrap-icons";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Info, Searchbar } from "@/components/Widgets";
import { Suspense } from "react";
import { getSingleMedicine } from "@/utils/apiCalls";
import { ActionButton } from "@/components/UI/Button/Button";

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
        <ActionButton
          type="button"
          label="Delete Medicine"
          iconDir="left"
          btnClass="btn_white"
          icon={<Trash3Fill />}
          onClick=""
        />
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

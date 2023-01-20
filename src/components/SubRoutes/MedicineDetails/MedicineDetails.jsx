import { useParams } from "react-router-dom";
import "./medicinedetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Info } from "@/components/UI/Widgets/Info";
import { medicineDetails } from "@/data/medicineDetails";
import { GridLayout } from "@/components/Layouts/Layouts";
import LayoutHeader from "@/components/Layouts/LayoutHeader/LayoutHeader";
import { PenFill } from "react-bootstrap-icons";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs/Breadcrumbs";
import { Searchbar } from "@/components/UI/Widgets";

const MedicineDetails = () => {
  const [singleMedicine, setSingleMedicine] = useState({});
  const [medicineDetail, setMedicineDetail] = useState(medicineDetails);
  const { medID } = useParams();

  useEffect(() => {
    const getSingleMedicine = async () => {
      const get = await axios.get(`http://localhost:4000/medicines/${medID}`);
      const data = await get.data;
      setSingleMedicine(data);
    };

    getSingleMedicine();
  }, [medID]);

  return (
    <section>
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
        {medicineDetail?.map((med) => (
          <Info title={med.title} key={med.id}>
            {typeof med.body === "string" ? (
              <p>{med.body}</p>
            ) : (
              med.body.map((data) => (
                <div>
                  <h4>{data.stat}</h4>
                  <small>{data.identifer}</small>
                </div>
              ))
            )}
          </Info>
        ))}
      </GridLayout>
    </section>
  );
};

export default MedicineDetails;

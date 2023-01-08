import "./medicinedetails.css";

import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const MedicineDetails = () => {
  const [singleMedicine, setSingleMedicine] = useState({});
  const { medID } = useParams();
  useEffect(() => {
    const getSingleMedicine = async () => {
      const get = await axios.get(`http://localhost:4000/medicines/${medID}`);
      const data = await get.data;
      console.log(data);
      setSingleMedicine(data);
    };

    getSingleMedicine();
  }, [medID]);

  return (
    <section>
      <div className="parent"></div>
    </section>
  );
};

export default MedicineDetails;

import "./addMedicineForm.css";
import { useState } from "react";

import {
  Selectbox,
  Textarea,
  TextInput,
} from "@Components/UI/Widgets/FormElements";

import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { ActionButton } from "@/components/UI/Button/Button";

const AddMedicines = ({ isSubmitting }) => {
  const selectboxOptions = [
    { key: "Select an option", value: "" },
    { key: "General Medicines", value: "generalMedicine" },
    { key: "Diabetes", value: "diabetes" },
  ];

  const [newMedicine, setNewMedicine] = useState({});
  const initialValues = {
    med_name: "",
    med_id: "",
    med_qty: "",
    med_group: "",
    htu: "",
    side_effects: "",
  };
  const validationSchema = Yup.object({
    med_name: Yup.string().required("Required Field"),
    med_id: Yup.string().required("Required Field").length(10),
    med_qty: Yup.number().required("Required Field").min(1),
    med_group: Yup.string().required("Required Field"),
    htu: Yup.string().required("Required Field"),
    side_effects: Yup.string().required("Required Field"),
  });

  // Redundant as React Router now handles submitting
  // const onSubmit = (values, onSubmitProps) => {
  //   console.log(onSubmitProps);
  //   setTimeout(() => {
  //     setNewMedicine(values);
  //     onSubmitProps.resetForm();
  //     onSubmitProps.setSubmitting(false);
  //     console.log("Submitting");
  //   }, 400);
  // };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => {
        return (
          <Form method="post" action="/inventory/new" className="form">
            <div className="form_container" tabIndex="1">
              <TextInput
                label="medicine name"
                name="med_name"
                type="text"
                placeholder="Augmentin 1gm"
              />
            </div>
            <div className="form_container">
              <TextInput
                label="medicine id"
                name="med_id"
                type="text"
                placeholder="P156145456"
              />
            </div>
            <div className="form_container">
              <Selectbox
                name="med_group"
                label="medicine group"
                options={selectboxOptions}
              />
            </div>
            <div className="form_container">
              <TextInput
                label="quantity in number"
                name="med_qty"
                type="text"
                placeholder="100"
              />
            </div>
            <div className="form_container textarea">
              <Textarea label="how to use" cols="30" row="10" name="htu" />
            </div>
            <div className="form_container textarea">
              <Textarea
                label="side effects"
                cols="30"
                row="10"
                name="side_effects"
              />
            </div>
            <div className="form_container">
              <ActionButton
                type="submit"
                btnClass="btn-red"
                disabled={isSubmitting || !formik.isValid}
                label="Submit medicine"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddMedicines;

import "./addMedicineForm.css";
import { useEffect, useState } from "react";

import {
  Selectbox,
  Textarea,
  TextInput,
} from "@Components/UI/Widgets/FormElements";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ActionButton } from "@/components/UI/Button/Button";

import { addNewMedicine } from "@/utils/apiCalls";
import { Error } from "@/components/UI/Widgets/Error";

const AddMedicines = () => {
  const [error, setError] = useState(null);

  const selectboxOptions = [
    { key: "Select an option", value: "" },
    { key: "General Medicines", value: "generalMedicine" },
    { key: "Diabetes", value: "diabetes" },
  ];

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

  const onSubmit = async (values, onSubmitProps) => {
    try {
      await addNewMedicine(values);
      console.log("Submitting");
      // onSubmitProps.resetForm();
      onSubmitProps.setSubmitting(false);
    } catch (error) {
      return setError(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="form">
            {error && <Error duration={4000} error={error} />}
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
                disabled={formik.isSubmitting || !formik.isValid}
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

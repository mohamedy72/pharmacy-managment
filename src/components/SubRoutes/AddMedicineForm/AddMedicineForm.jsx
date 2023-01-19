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

const AddMedicines = () => {
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

  const onSubmit = (values, onSubmitProps) => {
    setTimeout(() => {
      setNewMedicine(values);
      onSubmitProps.resetForm();
      onSubmitProps.setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
            <div className="form_container" tabIndex="2">
              <TextInput
                label="medicine id"
                name="med_id"
                type="text"
                placeholder="P156145456"
              />
            </div>
            <div className="form_container">
              <Selectbox name="med_group" label="medicine group">
                <option value="*" defaultValue>
                  Select a group
                </option>
                <option value="generic">Generic Medicines</option>
                <option value="diabetes">Diabetes</option>
              </Selectbox>
            </div>
            <div className="form_container" tabIndex="1">
              <TextInput
                label="quantity in number"
                name="med_qty"
                type="text"
                placeholder="100"
              />
            </div>
            <div className="form_container textarea ">
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

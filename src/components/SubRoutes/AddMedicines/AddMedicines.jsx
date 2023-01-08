import "./addmedicines.css";
import { useState } from "react";

import {
  Selectbox,
  Textarea,
  TextInput,
} from "@Components/UI/Widgets/FormElements";

import * as Yup from "yup";
import { Form, Formik } from "formik";

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
    med_id: Yup.string().required("Required Field"),
    med_qty: Yup.number().required("Required Field"),
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

    console.log(newMedicine);
    console.log(onSubmitProps);
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
            <div className="form_container" tabIndex="1">
              <TextInput
                label="medicine name"
                name="med_name"
                type="text"
                placeholder="Augmentin 1gm"
              />
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
              <TextInput
                label="quantity in number"
                name="med_qty"
                type="number"
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
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="btn btn-red"
            >
              save details
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddMedicines;

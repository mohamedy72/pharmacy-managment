import "./addMedicineForm.css";
import { useState } from "react";

import {
  Selectbox,
  Textarea,
  TextInput,
} from "@Components/UI/Widgets/FormElements";

import { Formik, Form } from "formik";
import { ActionButton } from "@/components/UI/Button/Button";

import { Error } from "@/components/UI/Widgets/Error";
import { addNewMedicine } from "@/utils/apiCalls";
import {
  initialValues,
  selectGroupOptions,
  validationSchema,
} from "./addMedicineForm";

const AddMedicines = () => {
  const [error, setError] = useState(null);

  const onSubmit = async (values, onSubmitProps) => {
    try {
      console.log("Submitting");
      await addNewMedicine(values);
      // onSubmitProps.resetForm();
      onSubmitProps.setSubmitting(false);
    } catch (err) {
      return setError(err);
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
                options={selectGroupOptions}
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

import "./addMedicineForm.css";
import { useState } from "react";

import { Formik, Form } from "formik";
import { ActionButton } from "@/components/UI/Button/Button";

import {
  Error,
  FormSelectbox,
  Textarea,
  TextInput,
} from "@/components/Widgets";
import { addNewMedicine, getAllMedicines } from "@/utils/apiCalls";
import {
  initialValues,
  selectGroupOptions,
  validationSchema,
} from "./addMedicineForm";
import { useNavigate } from "react-router-dom";

const AddMedicines = () => {
  // TODO: Refactor to React Router DOM form mutation

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const onSubmit = async (values, onSubmitProps) => {
    setError(null);
    try {
      await addNewMedicine(values);
      onSubmitProps.resetForm();
      onSubmitProps.setSubmitting(false);
      navigate("/inventory/medicineslist");
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
          <Form className="add_medicine_form">
            {error && <Error duration={4000} error={error} />}
            <TextInput
              label="medicine name"
              name="med_name"
              type="text"
              placeholder="Augmentin 1gm"
            />
            <TextInput
              label="dosage form"
              name="dosage_form"
              type="text"
              placeholder="Tablet"
            />
            <TextInput
              label="medicine id"
              name="med_ID"
              type="text"
              placeholder="P156145456"
            />
            <FormSelectbox
              name="med_group"
              label="medicine group"
              options={selectGroupOptions}
            />
            <Textarea label="how to use" cols="30" row="10" name="dose" />
            <Textarea
              label="side effects"
              cols="30"
              row="10"
              name="side_effects"
            />
            <TextInput
              label="quantity in number"
              name="med_stock"
              type="text"
              placeholder="100"
            />
            <ActionButton
              type="submit"
              btnClass="btn_red btn_form"
              disabled={formik.isSubmitting || !formik.isValid}
              label="Submit medicine"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddMedicines;

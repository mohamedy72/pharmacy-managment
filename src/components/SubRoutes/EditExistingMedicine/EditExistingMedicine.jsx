import "./editExistingMedicine.css";
import { useState } from "react";

import { Formik, useFormik } from "formik";
import { ActionButton } from "@/components/UI/Button/Button";

import {
  Error,
  FormSelectbox,
  Textarea,
  TextInput,
} from "@/components/Widgets";
import {
  addNewMedicine,
  getAllMedicines,
  getSingleMedicine,
  updateSingleMedicine,
} from "@/utils/apiCalls";
import { selectGroupOptions, validationSchema } from "./editExistingMedicine";
import { useLoaderData, useNavigate, Form, redirect } from "react-router-dom";

const EditExistingMedicine = () => {
  const [singleMedicine] = useLoaderData();
  const [error, setError] = useState(null);

  const initialValues = {
    med_name: singleMedicine?.med_name,
    med_ID: singleMedicine?.med_ID,
    med_stock: singleMedicine?.med_stock,
    med_group: singleMedicine.med_group,
    dose: singleMedicine.dose,
    side_effects: singleMedicine.side_effects,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      {(formik) => {
        return (
          <Form className="form" method="post">
            {error && <Error duration={4000} error={error} />}
            <div className="form_container" tabIndex="1">
              <TextInput label="medicine name" name="med_name" type="text" />
            </div>

            <div className="form_container">
              <TextInput
                label="medicine id"
                name="med_ID"
                type="text"
                placeholder="P156145456"
              />
            </div>
            <div className="form_container">
              <FormSelectbox
                name="med_group"
                label="medicine group"
                options={selectGroupOptions}
              />
            </div>

            <div className="form_container textarea">
              <Textarea label="how to use" cols="30" row="10" name="dose" />
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
              <TextInput
                label="quantity in number"
                name="med_stock"
                type="text"
                placeholder="100"
              />
            </div>
            <div className="form_container btn_form">
              <ActionButton
                type="submit"
                btnClass="btn_red"
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

export default EditExistingMedicine;

export async function editExistingMedicineLoader({ params }) {
  const { medID } = params;
  const singleMedicine = await getSingleMedicine(medID);
  return singleMedicine;
}

export async function editExistingMedicineAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  try {
    await updateSingleMedicine(params.medID, updates);
    return redirect("/inventory/medicineslist/D06ID232435454");
  } catch (error) {
    return error;
  }
}

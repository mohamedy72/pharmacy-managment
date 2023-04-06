import * as Yup from "yup";

export const selectGroupOptions = [
  { key: "Select an option", value: "" },
  { key: "General Medicines", value: "General_Medicine" },
  { key: "Diabetes", value: "diabetes" },
];

export const initialValues = {
  med_name: "",
  med_ID: "",
  med_stock: "",
  med_group: "",
  dose: "",
  side_effects: "",
  dosage_form: "",
};

export const validationSchema = Yup.object({
  med_name: Yup.string().required("Required Field"),
  med_ID: Yup.string().required("Required Field").length(14).nullable(false),
  med_stock: Yup.number()
    .required("Required Field")
    .min(0, "Medicine stock shouldn't be less than 0"),
  med_group: Yup.string().required("Required Field"),
  dose: Yup.string().required(
    "Every medicine should be assigned to a category"
  ),
  side_effects: Yup.string().required("Required Field"),
  dosage_form: Yup.string().required(
    "Every medicine should be have a dosage form"
  ),
});

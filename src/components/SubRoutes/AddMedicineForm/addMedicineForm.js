import * as Yup from "yup";

export const selectGroupOptions = [
  { key: "Select an option", value: "" },
  { key: "General Medicines", value: "generalMedicine" },
  { key: "Diabetes", value: "diabetes" },
];

export const initialValues = {
  med_name: "",
  med_id: "",
  med_qty: "",
  med_group: "",
  htu: "",
  side_effects: "",
};

export const validationSchema = Yup.object({
  med_name: Yup.string().required("Required Field"),
  med_id: Yup.string().required("Required Field").length(10),
  med_qty: Yup.number().required("Required Field").min(1),
  med_group: Yup.string().required("Required Field"),
  htu: Yup.string().required("Required Field"),
  side_effects: Yup.string().required("Required Field"),
});

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../UI/Widgets/Input";
import Selectbox from "../../UI/Widgets/Selectbox";
import "./addmedicines.css";

const AddMedicines = () => {
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

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Input label="medicine name" type="text" name="med_name" />
        <Input label="medicine id" type="text" name="med_id" />
        <Selectbox name="med_group" label="medicine group">
          <option value="generic">Generic Medicines</option>
          <option value="diabetes">Diabetes</option>
        </Selectbox>
        <Input label="quantity in number" type="qty" name="med_qty" />
        <Input.TextArea name="htu" />
        <Input.TextArea name="side_effects" />
      </Form>
    </Formik>
  );
};

export default AddMedicines;

import { Field } from "formik";

const Input = ({ label, type, name }) => {
  return (
    <p className="form_control">
      <label htmlFor={name} className="input_label">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        aria-label={label}
        className="input"
      />
    </p>
  );
};

Input.TextArea = ({ name, value }) => {
  return <Field as="textarea" name={name} id={name} cols="30" rows="10" />;
};

export { Input };

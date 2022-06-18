import "./widgets.css";
import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <p className="form_control">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text_input" {...field} {...props} aria-label={label} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </p>
  );
};

export const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <p className="textarea_control">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...props} {...field} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </p>
  );
};

export const Selectbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <p className="selectbox_control">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </p>
  );
};

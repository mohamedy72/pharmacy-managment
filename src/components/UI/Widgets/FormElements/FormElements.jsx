import "./widgets.css";
import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <p className="form_control">
      <label htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        className="text_input"
        {...field}
        {...props}
        aria-label={label}
      />
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
      <label htmlFor={props.name}>{label}</label>
      <textarea id={props.name} {...props} {...field} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </p>
  );
};

export const Selectbox = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <p className="selectbox_control">
      <label htmlFor={field.name}>{label}</label>
      <select id={field.name} {...field} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </p>
  );
};
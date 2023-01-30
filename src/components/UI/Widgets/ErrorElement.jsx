import "./widgets.css";

export const ErrorElement = ({ customClass, label }) => {
  return <div className={`error_container ${customClass}`}>{label}</div>;
};

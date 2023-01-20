import "./widgets.css";

export const Info = ({ title, children }) => {
  return (
    <div className="info_card">
      <h3 className="info_title">{title}</h3>
      <hr />
      <div className="info_body">{children}</div>
    </div>
  );
};

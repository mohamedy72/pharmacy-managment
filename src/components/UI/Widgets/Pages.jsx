import { Plus } from "react-bootstrap-icons";
import "./widgets.css";

const Pages = ({ label, action, children }) => {
  return (
    <table className="config_pages">
      <thead className="config_pages_header">
        <tr>
          <th>{label}</th>
          <th>{action}</th>
        </tr>
      </thead>
      <hr />
      <tbody className="config_pages_body">{children}</tbody>
      <hr />
      <a href="#">
        <Plus /> Add a new page
      </a>
    </table>
  );
};

export default Pages;

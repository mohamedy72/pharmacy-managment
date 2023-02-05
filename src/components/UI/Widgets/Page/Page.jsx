import "./page.css";
import { Pencil, Trash, Plus } from "react-bootstrap-icons";

const Page = ({ page_name }) => {
  return (
    <>
      <td>{page_name}</td>
      <td>
        <a href="#">
          <Plus /> Add sub page
        </a>
      </td>
      <td className="page_icons">
        <Pencil />
        <Trash />
      </td>
    </>
  );
};

export default Page;

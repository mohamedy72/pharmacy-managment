import { BiPlus } from "react-icons/bi";
import { MdDelete, MdEdit } from "react-icons/md";
import classes from "./widgets.module.css";

const Page = ({ page_name }) => {
  return (
    <>
      <td>{page_name}</td>
      <td>
        <a href="#">
          <BiPlus /> Add sub page
        </a>
      </td>
      <td className={classes.page_icons}>
        <MdEdit />
        <MdDelete />
      </td>
    </>
  );
};

export default Page;

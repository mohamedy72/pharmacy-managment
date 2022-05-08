import { useParams } from "react-router-dom";
import "./sidebar.css";

const Subpage = ({ children }) => {
  const { param } = useParams();
  console.log();
  return <div className="subpage_container"></div>;
};

export default Subpage;

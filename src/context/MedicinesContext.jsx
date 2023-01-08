import {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
import axios from "axios";
const MedicinesContext = createContext();
// const medReducer = (state, action) => {
//   switch (action.type) {
//     case "DELETE_MED":
//       return state.filter((med) => med.name !== action.name);
//     default:
//       return state;
//   }
// };

function MedinicesProvider({ children }) {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const URL = "http://localhost:4000/medicines";
      const res = await axios.get(URL);
      const data = await res.data;
      setMedicines(data);
    };

    fetchData();
  }, []);

  return (
    <MedicinesContext.Provider value={{ medicines }}>
      {children}
    </MedicinesContext.Provider>
  );
}
export default MedinicesProvider;

export const useMedData = () => {
  const medicines = useContext(MedicinesContext);
  return medicines;
};

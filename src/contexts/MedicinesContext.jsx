/**
 * This context should hold all related medicines calls (getALlMedicines, SubmitNewMedicine, DeleteMedicine ... etc)
 *
 * Reducer function should contain the logic
 *
 */

import {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
import axios from "axios";
const MedicinesContext = createContext();

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

/**
 *
 * Context => is where i want whatever shared state to be encapsulated
 *
 * Reducer => is a function that
 *
 *
 *
 *
 * */

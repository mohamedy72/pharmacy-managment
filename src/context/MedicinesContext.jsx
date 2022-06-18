import { createContext, useReducer } from "react";
import medicinesList from "../components/data/medicines.json";

const MedicinesContext = createContext();
const medReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_MED":
      return state.filter((med) => med.name !== action.name);
    default:
      return state;
  }
};

function MedinicesProvider({ children }) {
  const [medicines, dispatch] = useReducer(medReducer, medicinesList);
  // const [medicines, setMedicines] = useState(medicinesList);
  console.log(medicines);
  return (
    <MedicinesContext.Provider value={{ medicines, dispatch }}>
      {children}
    </MedicinesContext.Provider>
  );
}

export { MedicinesContext, MedinicesProvider };

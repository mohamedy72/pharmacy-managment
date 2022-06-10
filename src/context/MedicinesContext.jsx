import { createContext, useState } from "react";
import medicinesList from "../components/data/medicines.json";

const MedicinesContext = createContext();

function MedinicesProvider({ children }) {
  const [medicines, setMedicines] = useState(medicinesList);
  return (
    <MedicinesContext.Provider value={medicines}>
      {children}
    </MedicinesContext.Provider>
  );
}

export default { MedicinesContext, MedinicesProvider };

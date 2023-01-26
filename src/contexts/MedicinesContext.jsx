// import { createContext, useEffect, useState } from "react";
// import { getAllMedicines } from "@/utils/apiCalls";
// import { useLoaderData } from "react-router-dom";

// export const MedicinesContext = createContext();

// export function MedinicesProvider({ children }) {

//   // const [medicines, setMedicines] = useState([]);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   setIsLoading(true);
//   //   const fetchData = async () => {
//   //     try {
//   //       const data = await getAllMedicines();
//   //       setMedicines(data);
//   //       setIsLoading(false);
//   //     } catch (error) {
//   //       setIsLoading(false);
//   //       setError(error);
//   //       console.log(error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   return (
//     <MedicinesContext.Provider value={data}>
//       {children}
//     </MedicinesContext.Provider>
//   );
// }

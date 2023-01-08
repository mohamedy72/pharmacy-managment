import axios from "axios";

export async function getAllMedicines() {
  const fetchMedicines = await axios.get("http://localhost:4000/medicines");
  if (!fetchMedicines.request.response) {
    throw {
      message: "Cannot retrieve list of medicines",
      status: fetchMedicines.request.status,
    };
  }
  return fetchMedicines.data;
}

export async function addNewMedicine(post) {
  const addNewMedicine = await axios.post(
    "http://localhost:4000/medidasdcines",
    JSON.stringify(post),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

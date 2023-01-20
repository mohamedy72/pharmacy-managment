import axios from "axios";

const URL = axios.create({
  baseURL: "http://localhost:4000",
});

const ENDPOINT = "/medicines";

export async function getAllMedicines() {
  const fetchMedicines = await URL.get(ENDPOINT);
  if (!fetchMedicines.request.response) {
    throw {
      message: "Cannot retrieve list of medicines",
      status: fetchMedicines.request.status,
    };
  }
  return fetchMedicines.data;
}

export async function addNewMedicine(medicine) {
  const addNewMedicine = await URL.post(ENDPOINT, JSON.stringify(medicine), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getSingleMedicine(id) {
  const getSingleMedicine = await URL.get(`${ENDPOINT}/${id}`);

  if (!getSingleMedicine.request.response) {
    throw {
      message: `Cannot retrieve medicine with ID: ${id}`,
      status: getSingleMedicine.request.status,
    };
  }
  return getSingleMedicine.data;
}

import axios from "axios";

const URL = axios.create({
  baseURL: "https://pharma-one-server.onrender.com",
});

const ENDPOINT = "/medicines";

export async function getAllMedicines() {
  const response = await URL.get(ENDPOINT);
  if (response.status !== 200) {
    throw new Response("Cannot retireve a list of medicines", {
      status: response.status,
    });
  }
  return response;
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
  return getSingleMedicine;
}

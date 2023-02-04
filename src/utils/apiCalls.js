import supabase from "@/config/supabaseClient";

export async function getAllMedicines() {
  const { data, error, status } = await supabase.from("medicines").select();
  if (error) {
    throw new Error(`Cannot retrieve a list of medicines: ${status}`);
  }
  return data;
}

export async function addNewMedicine(medicine) {
  const { _, error, status } = await supabase
    .from("medicines")
    .insert([medicine])
    .select();

  if (error) {
    throw {
      message: error.message,
      status,
    };
  }
}

export async function getSingleMedicine(medID) {
  const { data, error, status } = await supabase
    .from("medicines")
    .select()
    .eq("med_ID", medID);

  if (error) {
    throw {
      message: `Cannot retrieve medicine with ID: ${id}`,
      status,
    };
  }
  return data;
}

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
      message: `Cannot retrieve medicine with ID: ${medID}`,
      status,
    };
  }
  return data;
}

export async function updateSingleMedicine(medID, updatedData) {
  const { data, error } = await supabase
    .from("medicines")
    .update(updatedData)
    .eq("med_ID", medID)
    .select();

  if (error) {
    throw new Error("Cannot update current item");
  }
}

export async function login(email, password) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}
export async function signup(email, password, username) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        user_name: username,
      },
    },
  });
}

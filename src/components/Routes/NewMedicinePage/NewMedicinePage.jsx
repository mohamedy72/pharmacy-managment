import AddMedicines from "@/components/SubRoutes/AddMedicineForm/AddMedicineForm";
import { addNewMedicine } from "@Utils/apiCalls";
import { redirect } from "react-router-dom";

const NewMedicinePage = () => {
  return (
    <section>
      <AddMedicines />
    </section>
  );
};

export default NewMedicinePage;

export async function action({ request }) {
  const formData = await request.formData();
  const medicine = {
    id: formData.get("med_id"),
    name: formData.get("med_name"),
    group: formData.get("med_group"),
    qty: formData.get("med_qty"),
    info: {
      medID: formData.get("id"),
      medGroup: "Generic",
      lifetimeSupply: 150,
      lifetimeSales: 350,
      stock: 10,
      dose: formData.get("htu"),
      sideEffects: formData.get("side_effects"),
    },
  };

  try {
    await addNewMedicine(medicine);
  } catch (error) {
    return error;
  }

  return redirect("/inventory/medicineslist");
}

import medicines from "@Assets/icons/medicines.png";
import medicines_green from "@Assets/icons/medicines_green.png";
import warning from "@Assets/icons/warning.png";

export const inventory = [
  {
    id: 1,
    icon: medicines,
    label: "298",
    subheader: "Medicines Available",
    linktext: "View full list",
    linkpath: "medicineslist",
  },
  {
    id: 2,
    icon: medicines_green,
    label: "02",
    subheader: "Medicines Groups",
    linktext: "View Groups",
    linkpath: "medicinesgroup",
  },
  {
    id: 3,
    icon: warning,
    label: "01",
    subheader: "Medicine Shortage",
    linktext: "Resolve Now",
    linkpath: "medicinesshortage",
  },
];

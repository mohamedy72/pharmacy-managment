import medicines from "../../assets/icons/medicines.png";
import medicines_green from "../../assets/icons/medicines_green.png";
import warning from "../../assets/icons/warning.png";

export const inventory = [
  {
    id: 1,
    icon: medicines,
    label: "298",
    subheader: "Medicines Available",
    linktext: "View full list",
    href: "inventory/list-of-medicines",
  },
  {
    id: 2,
    icon: medicines_green,
    label: "02",
    subheader: "Medicines Groups",
    linktext: "View Groups",
    href: "inventory/medicines-group",
  },
  {
    id: 3,
    icon: warning,
    label: "01",
    subheader: "Medicine Shortage",
    linktext: "Resolve Now",
    href: "inventory/medicines-shortage",
  },
];

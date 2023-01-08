import inventory from "../../assets/icons/health.png";
import money from "../../assets/icons/money.png";
import medicines from "../../assets/icons/medicines.png";
import warning from "../../assets/icons/warning.png";

export const dashboard_statistics = [
  {
    id: 1,
    icon: inventory,
    label: "good",
    subheader: "inventory status",
    linktext: "View Detailed Report",
    linkpath: "inventory",
  },
  {
    id: 2,
    icon: money,
    label: "Rs. 8,55,875",
    subheader: "Revenue : Jan 2022",
    linktext: "View Detailed Report",
    linkpath: "/reports/sales",
  },
  {
    id: 3,
    icon: medicines,
    label: "298",
    subheader: "Medicines Available",
    linktext: "Visit inventory",
    linkpath: "/inventory/medicineslist",
  },
  {
    id: 4,
    icon: warning,
    label: "01",
    subheader: "Medicine Shortage",
    linktext: "Resolve Now",
    linkpath: "/inventory",
  },
];

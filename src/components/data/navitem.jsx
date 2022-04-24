import { IoArrowDown } from "react-icons/io5";

export const navItems = [
  {
    id: 1,
    path: "/",
    icon: "./src/assets/icons/dashboard.png",
    label: "dashboard",
  },
  {
    id: 2,
    path: "/inventory",
    icon: "./src/assets/icons/inventory.png",
    label: "inventory",
    icon2: <IoArrowDown />,
  },
  {
    id: 3,
    path: "/reports",

    icon: "./src/assets/icons/reports.png",
    label: "reports",
    icon2: <IoArrowDown />,
  },
  {
    id: 4,
    path: "/config",
    icon: "./src/assets/icons/config.png",
    label: "configurations",
  },
];

import {
  Kanban,
  Archive,
  ChevronDown,
  EnvelopePaper,
  Gear,
} from "react-bootstrap-icons";

export const menuItems = [
  {
    title: "Dashboard",
    icon: <Kanban size={18} />,
    path: "dashboard",
  },
  {
    title: "Inventory",
    icon: <Archive size={18} />,
    path: "inventory",
    chevron: <ChevronDown />,
    submenus: [
      {
        title: "List of medicines",
        path: "/inventory/medicineslist",
      },
      {
        title: "Medicines group",
        path: "/inventory/medicinesgroup",
      },
    ],
  },
  {
    title: "Reports",
    icon: <EnvelopePaper size={18} />,
    path: "reports",
    chevron: <ChevronDown />,
    submenus: [
      {
        title: "Sales reports",
        path: "reports/sales",
      },
      {
        title: "payments reports",
        path: "reports/payments",
      },
    ],
  },
  {
    title: "Configurations",
    icon: <Gear size={18} />,
    path: "config",
  },
];

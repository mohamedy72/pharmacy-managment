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
    icon: <Kanban />,
    path: "dashboard",
  },
  {
    title: "Inventory",
    icon: <Archive />,
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
    icon: <EnvelopePaper />,
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
    icon: <Gear />,
    path: "config",
  },
];

export const pages = [
  {
    id: 1,
    page_name: "dashboard",
  },
  {
    id: 2,
    page_name: "inventory",
    subpages: [
      {
        id: Date.now(),
        subpage_name: "list of medicines",
      },
      {
        id: Date.now(),
        subpage_name: "medicine groups",
      },
    ],
  },
  {
    id: 3,
    page_name: "reports",
    subpages: [
      {
        id: Date.now(),
        subpage_name: "sales reports",
      },
      {
        id: Date.now(),
        subpage_name: "payments report",
      },
    ],
  },
  {
    id: 4,
    page_name: "configurations",
  },
];

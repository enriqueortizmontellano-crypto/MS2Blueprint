// Central list of every section in the guide.
// `path` is the hash route (e.g. "#/global-method").
// `status` controls whether the page is built yet ("ready") or a placeholder ("locked").

const NAV_SECTIONS = [
  {
    title: "Method",
    items: [
      { id: "global-method", label: "The Method", path: "#/global-method", status: "ready" },
    ],
  },
  {
    title: "Blocks",
    items: [
      { id: "ib1", label: "IB1 — Immuno + Intro Path + Pharm Foundations", path: "#/block/ib1", status: "ready" },
      { id: "ib2", label: "IB2 — Path Escalation + Pharm Escalation", path: "#/block/ib2", status: "ready" },
      { id: "ib3", label: "IB3 — Bacteria, Antibiotics, Antifungals, Mycology", path: "#/block/ib3", status: "locked" },
      { id: "ib4", label: "IB4 — Viruses, Antivirals, Autonomics, Neoplasia", path: "#/block/ib4", status: "locked" },
      { id: "pulm-renal", label: "Pulmonary + Renal", path: "#/block/pulm-renal", status: "locked" },
      { id: "cardio", label: "Cardiology", path: "#/block/cardio", status: "locked" },
      { id: "gi", label: "Gastroenterology (GI)", path: "#/block/gi", status: "locked" },
      { id: "endo-repro", label: "Endocrinology + Reproductive", path: "#/block/endo-repro", status: "locked" },
      { id: "derm-msk", label: "Dermatology + MSK", path: "#/block/derm-msk", status: "locked" },
      { id: "neuro-heme", label: "Neurology + Hematology/Oncology", path: "#/block/neuro-heme", status: "locked" },
    ],
  },
  {
    title: "Step 1",
    items: [
      { id: "step1", label: "Step 1 Integration", path: "#/block/step1", status: "locked" },
    ],
  },
];

// Flat list, useful for search
const ALL_PAGES = NAV_SECTIONS.flatMap((s) => s.items);

// Pulmonary + Renal — Block 5 of 10.
// The first systems block. Straightforward scope: all of BootCamp Pulmonology,
// all of BootCamp Nephrology, the pneumonia half of BootCamp Micro ch.32,
// Sketchy systemic mycoses, and Pathoma Respiratory + Renal.
// Lesson lists below are pulled directly from the AnKing v12 tag tree, so the
// video list and the unsuspend list are the same list.

const PR_BC_PULM = [
  {
    chapter: "Pulmonology → 1. Introduction to the Respiratory System",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::01_Introduction_to_the_Respiratory_System",
    videos: [
      "Pulmonology System Function, Anatomy, and Histo",
      "Embryologic Defects",
      "Muscles of Respiration",
    ],
  },
  {
    chapter: "Pulmonology → 2. Air Physiology",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::02_Air_Physiology",
    videos: [
      "Breathing and Pressure",
      "Equal Pressure Point",
      "Lung Volumes and Capacities",
      "Lung And Chest Wall Curve",
      "Ventilation and Dead Space",
      "Surfactant",
      "Compliance",
      "Airflow and Airway Resistance",
      "Flow Volume Loops",
      "Pulmonary Function Testing",
    ],
    footnote:
      "The chapter's opening video has no dedicated AnKing tag — watch it anyway, its cards sit at the chapter level.",
  },
  {
    chapter: "Pulmonology → 3. Blood Physiology",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::03_Blood_Physiology",
    videos: [
      "Blood and Respiratory Basics",
      "Pulmonary Vascular Resistance",
      "Ventilation and Perfusion",
      "Pathological V/Q Mismatch",
      "Hemoglobin",
      "Carbon Dioxide",
      "Oxygen Content",
      "Abnormal Oxygen Levels",
      "Perfusion vs Diffusion",
      "Blood Gas Scenarios",
      "A-a Gradient",
    ],
    footnote:
      "This is the chapter the block exam and Step both lean on hardest. A-a gradient and blood gas scenarios are worth a second pass.",
  },
  {
    chapter: "Pulmonology → 4. Lung Pathology Fundamentals",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::04_Lung_Pathology_Fundamentals",
    videos: ["Lung Physical Exam", "Introduction to Respiratory Infections"],
  },
  {
    chapter: "Pulmonology → 5. Obstructive Lung Disease",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::05_Obstructive_Lung_Disease",
    videos: [
      "Obstructive Lung Disease Basics",
      "Asthma",
      "Asthma Treatments",
      "COPD",
      "Cystic Fibrosis",
    ],
    footnote:
      "Asthma Treatments is the pulmonary pharm for this block — there is no separate pharm chapter for the lung.",
  },
  {
    chapter: "Pulmonology → 6. Restrictive Lung Disease",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::06_Restrictive_Lung_Disease",
    videos: [
      "Restrictive Lung Disease Basics",
      "Pulmonary Fibrosis",
      "Pneumoconiosis",
      "Hypersensitivity Pneumonitis",
    ],
  },
  {
    chapter: "Pulmonology → 7. Lung Cancer",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::07_Lung_Cancer",
    videos: [
      "Lung Cancer Basics",
      "Small Cell Carcinoma",
      "Non-Small Cell Carcinoma",
      "Mesothelioma",
    ],
    footnote:
      "You already did the neoplasia framework in IB4. This is the organ-specific layer on top of it.",
  },
  {
    chapter: "Pulmonology → 8. Lung Pathology Special Topics",
    tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::08_Lung_Pathology_Special_Topics",
    videos: [
      "DVT and Pulmonary Embolism",
      "Pulmonary Hypertension",
      "Pneumothorax",
      "Pulmonary Edema",
      "Pleural Effusion",
      "ARDS and NRDS",
      "Sleep Apnea",
    ],
  },
];

const PR_BC_RENAL = [
  {
    chapter: "Nephrology → 1. Anatomy & Embryology",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::01_Anatomy_&_Embryology",
    videos: ["Embryology", "Developmental Anomalies", "Anatomy"],
  },
  {
    chapter: "Nephrology → 2. Fluid & Filtration Physiology",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::02_Fluid_&_Filtration_Physiology",
    videos: [
      "Fluid Physiology",
      "Filtration Physiology Overview",
      "Clearance, Renal Plasma and Blood Flow",
      "Glucose Clearance",
      "Autoregulation",
    ],
  },
  {
    chapter: "Nephrology → 3. Nephron Transporters",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::03_Nephron_Transporters",
    videos: [
      "Proximal Convoluted Tubule",
      "Loop of Henle",
      "Distal Convoluted Tubule",
      "Collecting Duct",
    ],
    footnote:
      "Learn these four cold. Diuretics, the RTAs and half the electrolyte questions are just this chapter asked sideways.",
  },
  {
    chapter: "Nephrology → 4. Renin-Angiotensin-Aldosterone System",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::04_Renin-Angiotensin-Aldosterone_System",
    videos: ["RAAS Overview", "RAAS Effects", "Natriuretic Peptides"],
  },
  {
    chapter: "Nephrology → 5. Electrolytes",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::05_Electrolytes",
    videos: ["Sodium", "Potassium", "Calcium", "Magnesium", "Phosphate"],
  },
  {
    chapter: "Nephrology → 6. Acid-Base Physiology",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::06_Acid-Base_Physiology",
    videos: [
      "Acid Base Physiology Overview",
      "Metabolic Acidosis",
      "Metabolic Alkalosis",
      "Respiratory Acidosis",
      "Respiratory Alkalosis",
      "Type 1 RTA",
      "Type 2 RTA",
      "Type 4 RTA",
    ],
    footnote:
      "Acid-base is the bridge between the two halves of this block. Doing pulm and renal together is the whole reason these are one block.",
  },
  {
    chapter: "Nephrology → 7. Pathology Diagnostics",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::07_Pathology_Diagnostics",
    videos: ["Nomenclature", "Urinalysis Basics", "Urinary Casts"],
  },
  {
    chapter: "Nephrology → 8. Nephrotic Syndromes",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::08_Nephrotic_Syndromes",
    videos: [
      "Glomerular Disease Overview",
      "Minimal Change Disease",
      "Focal Segmental Glomerulosclerosis",
      "Membranous Nephropathy",
      "Amyloid Nephropathy",
      "Diabetic Glomerulonephropathy",
    ],
  },
  {
    chapter: "Nephrology → 9. Nephritic Syndromes",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::09_Nephritic_Syndromes",
    videos: [
      "Poststreptococcal Glomerulonephritis",
      "Rapidly Progressive Glomerulonephritis",
      "Diffuse Proliferative Glomerulonephritis",
      "Membranoproliferative Glomerulonephritis",
      "IgA Nephropathy",
      "Alport Syndrome",
    ],
    footnote:
      "Pair chapters 8 and 9 with Pathoma 12.3 and 12.4 on the same day. The light-microscopy / IF / EM triads are what gets tested.",
  },
  {
    chapter: "Nephrology → 10. Nephrolithiasis",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::10_Nephrolithiasis",
    videos: [
      "Nephrolithiasis Overview",
      "Ammonium Magnesium Phosphate Stones",
      "Calcium Stones",
      "Cystine Stones",
      "Uric Acid Stones",
    ],
  },
  {
    chapter: "Nephrology → 11. Urinary Incontinence",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::11_Urinary_Incontinence",
    videos: [
      "Micturition Overview",
      "Overflow Incontinence",
      "Stress Incontinence",
      "Urge Incontinence",
    ],
  },
  {
    chapter: "Nephrology → 12. Kidney Injury",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::12_Kidney_Injury",
    videos: [
      "Kidney Injury - Overview",
      "Prerenal AKI",
      "Intrarenal AKI",
      "Postrenal AKI",
      "Acute Interstitial Nephritis",
      "Acute Tubular Necrosis",
      "Diffuse Cortical Necrosis",
      "Renal Papillary Necrosis",
      "Chronic Kidney Disease",
    ],
  },
  {
    chapter: "Nephrology → 13. Inflammatory Conditions & Malignancy",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::13_Inflammatory_Conditions_&_Malignancy",
    videos: [
      "Acute Cystitis",
      "Acute Pyelonephritis",
      "Chronic Pyelonephritis",
      "Renal Cell Carcinoma",
      "Renal Oncocytoma",
      "Wilm's Tumor",
      "Urothelial Carcinoma",
      "Squamous Cell Carcinoma of the Bladder",
    ],
    footnote:
      "RCC, Wilm's, urothelial and bladder SCC were listed as optional tumor videos back in IB4. This is the block where they stop being optional.",
  },
  {
    chapter: "Nephrology → 14. Cystic Kidney Disease",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::14_Cystic_Kidney_Disease",
    videos: [
      "Autosomal Dominant Polycystic Kidney Disease",
      "Autosomal Recessive Polycystic Kidney Disease",
      "Autosomal Dominant Tubulointerstitial Kidney Disease",
    ],
  },
  {
    chapter: "Nephrology → 15. Renal Pharmacology",
    tag: "#AK_Step1_v12::#Bootcamp::Nephrology::15_Renal_Pharmacology",
    videos: [
      "Carbonic Anhydrase Inhibitors",
      "Osmotic Diuretics",
      "Loop Diuretics",
      "Thiazide Diuretics",
      "Potassium-Sparing Diuretics",
      "ACEi, ARBs, Direct Renin Inhibitors",
    ],
    footnote:
      "Same rule as every block: pharm is integrated, not separate. Do these with chapter 3 fresh in your head and they take half the time.",
  },
];

const PR_BC_MICRO = [
  "Principles of Pneumonia",
  "Pneumonia Diagnostics",
  "Typical Pneumonia Pathogens",
  "Atypical Pneumonia Pathogens",
  "Pediatric and Additional Pneumonia Pathogens",
];

const PR_MICRO_REVIEW = [
  {
    label: "Mycobacteria",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::08_Mycobacteria",
    note: "7 lessons · unsuspended in IB3",
  },
  {
    label: "Dimorphic Mycosis",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::17_Dimorphic_Mycosis",
    note: "6 lessons · IB3",
  },
  {
    label: "Opportunistic Mycosis",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::18_Opportunistic_Mycosis",
    note: "8 lessons · IB3",
  },
  {
    label: "Gram-Negative Coccobacilli (Haemophilus, Bordetella)",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::14_Gram_Negative_Coccobacilli",
    note: "IB3",
  },
  {
    label: "Respiratory viruses — Influenza, RSV, Parainfluenza, Measles",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::29_Negative-sense_RNA_Viruses",
    note: "IB4",
  },
  {
    label: "Rhinovirus, Coronavirus",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::28_Positive-sense_RNA_Viruses",
    note: "IB4",
  },
  {
    label: "Adenovirus",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::31_DNA_Viruses::06_Adenovirus",
    note: "IB4",
  },
  {
    label: "Opportunistic Infections (CMV, disseminated non-TB mycobacteria)",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::35_Opportunistic_Infections",
    note: "IB4",
  },
];

const PR_SKETCHY = [
  "Histoplasma capsulatum",
  "Blastomyces dermatitidis",
  "Coccidioides immitis",
  "Paracoccidioides brasiliensis",
];

const PR_PATHOMA_RESPI = [
  "Nasopharynx",
  "Larynx",
  "Pulmonary Infections",
  "Chronic Obstructive Pulmonary Disease",
  "Restrictive Diseases",
  "Pulmonary Hypertension",
  "Respiratory Distress Syndromes",
  "Lung Cancer",
  "Pleura",
];

const PR_PATHOMA_RENAL = [
  "Congenital",
  "Acute Renal Failure",
  "Nephrotic Syndrome",
  "Nephritic Syndrome",
  "Urinary Tract Infection",
  "Nephrolithiasis",
  "Chronic Renal Failure",
  "Renal Neoplasia",
  "Lower Urinary Tract Carcinoma",
];

const PR_TAG_INDEX = [
  { label: "BootCamp Pulmonology (all 8 chapters)", tag: "#AK_Step1_v12::#Bootcamp::Pulmonology::*" },
  { label: "BootCamp Nephrology (all 15 chapters)", tag: "#AK_Step1_v12::#Bootcamp::Nephrology::*" },
  {
    label: "BootCamp Micro — Cardiorespiratory Infections",
    tag: "#AK_Step1_v12::#Bootcamp::Microbiology::32_Cardiorespiratory_Infections",
    warn: "Lessons 01-05 only. Leave 06-11 (endocarditis, rheumatic fever) suspended for Cardiology.",
  },
  {
    label: "Sketchy Micro — Systemic Mycoses",
    tag: "#AK_Step1_v12::#SketchyMicro::02_Fungi::01_Systemic_Mycoses",
  },
  { label: "Pathoma — Respiratory", tag: "#AK_Step1_v12::#Pathoma::09_Respiratory" },
  { label: "Pathoma — Renal", tag: "#AK_Step1_v12::#Pathoma::12_Renal" },
];

const PR_AMBOSS_FILTERS = [
  { label: "Study objective", value: "USMLE Step 1" },
  { label: "Exams", value: "USMLE Step 1 + Supplemental Step 1 + Basic Science Exams — check all 11" },
  { label: "Systems", value: "Respiratory System · Renal & Urinary Systems" },
  { label: "Articles / Disciplines / Symptoms", value: "All — leave them alone" },
  { label: "Difficulty", value: "All" },
  { label: "Status", value: "Not yet answered" },
  { label: "Session type", value: "Study mode" },
];

const PR_CHECKLIST_ITEMS = [
  { id: "bc-pulm", text: "BootCamp Pulmonology — all 8 chapters, 46 videos" },
  { id: "bc-renal", text: "BootCamp Nephrology — all 15 chapters, 78 videos (includes Renal Pharmacology)" },
  { id: "bc-micro", text: "BootCamp Micro ch.32 — videos 1-5 only (pneumonia). Skip 6-11, those are Cardiology." },
  { id: "sketchy", text: "Sketchy Micro — Systemic Mycoses: all 4 lessons" },
  { id: "pathoma-respi", text: "Pathoma ch.9 Respiratory — all 9 sections + their AnKing cards" },
  { id: "pathoma-renal", text: "Pathoma ch.12 Renal — all 9 sections + their AnKing cards" },
  { id: "acid-base", text: "Acid-base: do BootCamp Nephrology ch.6 and the pulm blood gas videos in the same week" },
  { id: "anki-unsuspend", text: "Unsuspend each chapter's AnKing tag the day you watch it — never in one batch" },
  { id: "custom-cards", text: "Import the Pulm/Renal custom deck (210 cards) and run it alongside AnKing" },
  { id: "daily-anki", text: "Daily Anki reviews — no exceptions, no pile-up" },
  { id: "day-9", text: "DAY 9 BEFORE THE EXAM: all content watched, all cards caught up, then suspend the entire block" },
  { id: "q-phase", text: "Days 9 to 0: questions only. AMBOSS + UWorld + Rx. No block-wide Anki reviews." },
  { id: "q-cards", text: "During the question phase, the only cards you do are the ones you unsuspend off a question's tag" },
  { id: "mehlman", text: "Final 1-2 days: Mehlman Pulm + Renal PDFs and their matching Anki cards" },
];

function PRChapterList({ groups }) {
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.chapter}>
          <h4 className="font-semibold text-navy-800">{group.chapter}</h4>
          <p className="text-xs text-slate-500 mb-1.5">{group.videos.length} videos</p>
          <ul className="space-y-1 text-sm text-slate-600">
            {group.videos.map((v) => (
              <li key={v} className="text-navy-900 font-medium">
                {v}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-slate-400 mt-1.5 break-all">
            <code className="bg-slate-100 px-1 py-0.5 rounded">{group.tag}</code>
          </p>
          {group.footnote ? (
            <p className="text-xs text-slate-500 mt-1.5 italic">{group.footnote}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function PulmRenal() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Block 5 of 10</p>
        <h1 className="text-3xl font-bold text-navy-900 mt-1">Pulmonary + Renal</h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          The first systems block, and an easy one to scope: two complete BootCamp subjects, two complete Pathoma
          chapters, the pneumonia half of one micro chapter, and four Sketchy lessons. No judgment calls about what
          counts.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">These two systems are one block for a reason.</span>{" "}
          Acid-base lives in both. The lung compensates for what the kidney does and the kidney compensates for what
          the lung does, and the exam writes questions that make you hold both at once. Do not study them as two
          blocks that happen to share a date.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">Step 1 connection:</span> renal physiology and pulmonary
          physiology are two of the densest calculation-and-reasoning areas on the exam, and they are also two of
          the most stable — the content barely moves. What you build here is still load-bearing in Dedicated. The
          nephron transporters and the A-a gradient are worth over-learning.
        </p>
      </div>

      {/* Whole block */}
      <Collapsible
        title="The Whole Block, In One Place"
        subtitle="Two BootCamp subjects, two Pathoma chapters, five micro videos, four Sketchy lessons"
        defaultOpen
        tone="navy"
      >
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">BootCamp Pulmonology</span> — all 8 chapters, all 46
            videos. Includes asthma pharm.
          </li>
          <li>
            <span className="font-semibold text-navy-900">BootCamp Nephrology</span> — all 15 chapters, all 78
            videos. Includes the diuretics and ACEi/ARB chapter.
          </li>
          <li>
            <span className="font-semibold text-navy-900">BootCamp Microbiology ch.32</span> — videos 1-5 only, the
            pneumonia half. Videos 6-11 are endocarditis and rheumatic fever; those belong to Cardiology.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Sketchy Micro — Systemic Mycoses</span> — Histoplasma,
            Blastomyces, Coccidioides, Paracoccidioides.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Pathoma ch.9 Respiratory and ch.12 Renal</span> — both
            complete, with their AnKing chapters.
          </li>
        </ul>
        <p className="text-sm text-slate-600 mt-3">
          All of the above is required. The only thing that moves is the order you do it in.
        </p>
      </Collapsible>

      {/* BootCamp Pulm */}
      <Collapsible
        title="BootCamp — Pulmonology"
        subtitle="8 chapters · 46 videos · every one of them"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-4">
          The tag under each chapter is the AnKing tag for that chapter. Unsuspend it the day you finish the
          chapter — that is the whole Anki workflow for this block.
        </p>
        <PRChapterList groups={PR_BC_PULM} />
      </Collapsible>

      {/* BootCamp Renal */}
      <Collapsible
        title="BootCamp — Nephrology"
        subtitle="15 chapters · 78 videos · every one of them"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-4">
          Bigger than the pulm half and front-loaded with physiology. Chapters 2 through 6 are the foundation —
          everything from chapter 8 onward is easier if you actually learned them.
        </p>
        <PRChapterList groups={PR_BC_RENAL} />
      </Collapsible>

      {/* Micro */}
      <Collapsible
        title="BootCamp Microbiology — Respiratory Infections"
        subtitle="Chapter 32, videos 1-5 only"
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          Chapter 32 is called <span className="font-semibold text-navy-900">Cardiorespiratory Infections</span> and
          covers both pneumonia and endocarditis. You only want the pneumonia half here.
        </p>
        <ul className="space-y-1 text-sm text-slate-600 mb-3">
          {PR_BC_MICRO.map((v, i) => (
            <li key={v} className="text-navy-900 font-medium">
              {i + 1}. {v}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 italic mb-3">
          Videos 6-11 (infective endocarditis, acute rheumatic fever) are Cardiology. Leave them suspended — you
          will unsuspend them next block.
        </p>
        <p className="text-[11px] text-slate-400 break-all mb-4">
          <code className="bg-slate-100 px-1 py-0.5 rounded">
            #AK_Step1_v12::#Bootcamp::Microbiology::32_Cardiorespiratory_Infections
          </code>
        </p>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">Already covered — review as needed</h4>
        <p className="text-xs text-slate-500 mb-2">
          Every respiratory pathogen that shows up on this block exam is in scope, but you already unsuspended it in
          IB3 or IB4. Your daily reviews are the plan. Do not re-watch unless a Qbank question tells you to.
        </p>
        <ul className="space-y-1.5 text-sm text-slate-600">
          {PR_MICRO_REVIEW.map((r) => (
            <li key={r.tag}>
              <span className="text-navy-900 font-medium">{r.label}</span>{" "}
              <span className="text-xs text-slate-400">— {r.note}</span>
              <br />
              <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded break-all">{r.tag}</code>
            </li>
          ))}
        </ul>
      </Collapsible>

      {/* Sketchy */}
      <Collapsible
        title="Sketchy — Systemic Mycoses"
        subtitle="4 lessons · the fungi that present as pneumonia"
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          The dimorphic fungi. These are the ones that walk in looking like TB or community-acquired pneumonia, and
          the exam tests them on geography plus morphology — which is exactly what Sketchy is good for.
        </p>
        <ul className="space-y-1 text-sm text-slate-600 mb-3">
          {PR_SKETCHY.map((v) => (
            <li key={v} className="text-navy-900 font-medium">
              {v}
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-slate-400 break-all mb-3">
          <code className="bg-slate-100 px-1 py-0.5 rounded">
            #AK_Step1_v12::#SketchyMicro::02_Fungi::01_Systemic_Mycoses
          </code>
        </p>
        <p className="text-xs text-slate-500 italic">
          The opportunistic fungi (Aspergillus, Cryptococcus, Mucor, Pneumocystis, Candida) were required in IB3 —
          they are in scope for this exam but you have already seen them. Review, do not re-watch.
        </p>
      </Collapsible>

      {/* Pathoma */}
      <Collapsible
        title="Pathoma — Respiratory + Renal"
        subtitle="Chapters 9 and 12, complete"
        defaultOpen
        tone="navy"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-navy-800 mb-1 text-sm">Chapter 9 — Respiratory</h4>
            <ul className="space-y-1 text-sm text-slate-600 mb-2">
              {PR_PATHOMA_RESPI.map((s, i) => (
                <li key={s} className="text-navy-900 font-medium">
                  9.{i + 1} {s}
                </li>
              ))}
            </ul>
            <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded break-all">
              #AK_Step1_v12::#Pathoma::09_Respiratory
            </code>
          </div>
          <div>
            <h4 className="font-semibold text-navy-800 mb-1 text-sm">Chapter 12 — Renal</h4>
            <ul className="space-y-1 text-sm text-slate-600 mb-2">
              {PR_PATHOMA_RENAL.map((s, i) => (
                <li key={s} className="text-navy-900 font-medium">
                  12.{i + 1} {s}
                </li>
              ))}
            </ul>
            <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded break-all">
              #AK_Step1_v12::#Pathoma::12_Renal
            </code>
          </div>
        </div>
        <p className="text-sm text-slate-600 mt-4">
          Pathoma is not a substitute for the BootCamp pathology videos and BootCamp is not a substitute for
          Pathoma. Both decks have cards the other does not. Watch Pathoma 12.3 and 12.4 the same week you do
          BootCamp Nephrology chapters 8 and 9 and the glomerular diseases stop being a blur.
        </p>
      </Collapsible>

      {/* AnKing tags */}
      <Collapsible
        title="AnKing Tags — The Short Version"
        subtitle="Paste these into the Anki browser search bar"
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          Chapter-level tags are listed with each chapter above. These are the top-level searches if you want to see
          the whole block at once. Prefix each with{" "}
          <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">tag:</code> in the browser.
        </p>
        <ul className="space-y-2 text-sm text-slate-600">
          {PR_TAG_INDEX.map((t) => (
            <li key={t.tag}>
              <span className="font-semibold text-navy-900">{t.label}</span>
              <br />
              <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded break-all">{t.tag}</code>
              {t.warn ? (
                <span className="block text-xs text-amber-700 mt-0.5">{t.warn}</span>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 mt-3">
          Unsuspend by chapter, as you finish each chapter. Not all at once at the start, and not in one panicked
          batch the week before the exam.
        </p>
      </Collapsible>

      {/* Custom cards */}
      <Collapsible
        title="Custom High-Yield Cards"
        subtitle="Enrique's additional cards for this block — 210 cards"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          Split by system: <span className="font-semibold text-navy-900">94 pulmonary</span> and{" "}
          <span className="font-semibold text-navy-900">116 nephrology</span>. These are the gaps AnKing and
          BootCamp left — the ones I kept getting wrong until I wrote a card for them.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          Import it; it lands as{" "}
          <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">
            MS2::HY Enrique&apos;s Custom Cards::PULM/NEPHRO
          </code>{" "}
          with the PULM and NEPHRO subdecks already split. Study these alongside your AnKing reviews, not as a
          separate pile.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1K46splbtBWIoJ21CRtWyHOnuyk938MvO?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-teal-600 underline hover:text-teal-700 text-sm font-semibold"
        >
          Download the Pulm/Nephro custom deck (.apkg, 210 cards)
        </a>
        <p className="text-xs text-slate-500 mt-2">
          Hosted on Drive rather than in the repo — the deck ships with its images and is too large for GitHub.
        </p>
      </Collapsible>

      {/* Mehlman */}
      <Collapsible
        title="Final-Days Resources — Mehlman High-Yield"
        subtitle="1-2 days before the exam: read + do the matching Anki cards"
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-3">
          Two PDFs apply to this block. Read them in the last 48 hours and do Mehlman&apos;s matching Anki cards
          alongside — not instead of the question phase, on top of it.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-3">
          <li>
            <a
              href="./HY%20Pulmonary.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman — High Yield Pulmonary (PDF)
            </a>
          </li>
          <li>
            <a
              href="./HY%20Renal.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman — High Yield Renal (PDF)
            </a>
          </li>
        </ul>
        <p className="text-sm text-slate-600">
          The Mehlman PDFs Anki deck covers every block and is downloadable from the{" "}
          <a href="#/block/ib1" className="text-teal-600 underline hover:text-teal-700">
            IB1 page
          </a>{" "}
          — import it once.
        </p>
      </Collapsible>

      {/* Qbank */}
      <Collapsible
        title="Qbank — AMBOSS, UWorld, Rx"
        subtitle="How to build the sessions"
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-4">
          Both systems, every question. How you slice them is your call — what is not negotiable is that you finish
          all of them.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">AMBOSS — two sessions, one per system</h4>
        <p className="text-sm text-slate-600 mb-2">
          My recommendation: run Respiratory and Renal as{" "}
          <span className="font-semibold text-navy-900">separate custom sessions</span>. AMBOSS explanations are
          long; keeping one system per session keeps you inside one mental model instead of flipping.
        </p>
        <ul className="space-y-1 text-sm text-slate-600 mb-2">
          {PR_AMBOSS_FILTERS.map((f) => (
            <li key={f.label}>
              <span className="font-semibold text-navy-900">{f.label}:</span> {f.value}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 italic mb-5">
          Both systems selected together returns roughly 650 unanswered questions. Leave Articles, Disciplines and
          Symptoms on All — the system filter already drags in the anatomy, histo, physio and micro that belong to
          these organs. That integration is the whole point; do not filter it out.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">UWorld — one mixed pool</h4>
        <p className="text-sm text-slate-600 mb-2">
          Opposite recommendation here: <span className="font-semibold text-navy-900">mix both systems</span> in the
          same blocks. UWorld stems are shorter and the renal/pulm crossover questions — acid-base, V/Q, volume
          status — only show up when the two sit side by side.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-2">
          <li>
            In the <span className="font-semibold text-navy-900">upper section (subjects)</span> — select{" "}
            <span className="font-semibold text-navy-900">all</span> of them.
          </li>
          <li>
            In the <span className="font-semibold text-navy-900">lower section (systems)</span> — select every
            Respiratory tag and every Renal/Urinary tag.
          </li>
          <li>Tutor mode. Unused questions.</li>
        </ul>
        <p className="text-xs text-slate-500 italic mb-5">
          Selecting all subjects on top is deliberate. That is what pulls the biochem, path, pharm and micro
          questions that happen to be about the lung and kidney into your pool.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">Rx — one pass per system</h4>
        <p className="text-sm text-slate-600">
          Respiratory and Renal, separately, no special filters. Rx is the easiest of the three and the fastest to
          get through — use it to confirm you actually know the facts cold.
        </p>
      </Collapsible>

      {/* The 9-day switch */}
      <Collapsible
        title="The 9-Day Switch — Read This Twice"
        subtitle="Where most people waste a week"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-3">
          Nine days before the exam, the block changes mode. Not gradually —{" "}
          <span className="font-semibold text-navy-900">on a specific day, completely</span>.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">Day 9: the cutoff</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-4">
          <li>Every video watched. All of them. No &quot;I will catch up on restrictive lung later.&quot;</li>
          <li>Every AnKing card for this block unsuspended and the review queue at zero.</li>
          <li>
            Then <span className="font-semibold text-navy-900">suspend the whole block</span> — AnKing, custom
            cards, all of it. The queue goes to zero and stays there.
          </li>
        </ul>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">Days 9 through 0: questions only</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-4">
          <li>AMBOSS, UWorld and Rx. That is the whole study plan.</li>
          <li>
            Every question you miss or guess on — open its AnKing tag, unsuspend{" "}
            <span className="font-semibold text-navy-900">only those cards</span>, and do only those cards.
          </li>
          <li>Your Anki queue during these nine days is built entirely out of questions you got wrong.</li>
        </ul>

        <div className="rounded-lg bg-rose-50 border border-rose-200 p-4">
          <h4 className="font-semibold text-rose-800 mb-1 text-sm">The mistake people actually make</h4>
          <p className="text-sm text-rose-900">
            They start the question phase but{" "}
            <span className="font-semibold">keep doing their full block reviews on top of it</span>. A thousand
            cards a day plus two question blocks, days before the test — of course there are no hours left. That is
            not discipline, it is the single biggest time sink in the last week.
          </p>
          <p className="text-sm text-rose-900 mt-2">
            <span className="font-semibold">Suspend means suspend.</span> Once you hit day 9 you do not touch the
            block-wide review queue again before the exam. The only cards you see are the ones a question sent you
            to.
          </p>
        </div>

        <p className="text-sm text-slate-600 mt-3">
          Nothing is lost. The cards come back out of suspension after the exam and fold into your long-run Step 1
          reviews. You are not deleting work — you are deciding that in the last nine days, questions teach you more
          per hour than reviews do.
        </p>
      </Collapsible>

      {/* Checklist */}
      <Checklist storageKey="pulm-renal" title="Pulmonary + Renal Execution Checklist" items={PR_CHECKLIST_ITEMS} />
    </div>
  );
}

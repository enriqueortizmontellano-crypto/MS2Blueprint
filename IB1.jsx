// IB1 — Immunology + Intro Pathology + Pharm Foundations (PK/PD)
// Block 1 of 10 in the sequence.

const IB1_CONTENT_GROUPS = [
  {
    title: "Lymphoid Tissue & Innate vs. Adaptive Immunity",
    items: [
      "Primary lymphoid tissue (thymus, bone marrow)",
      "Spleen — structure and function",
      "Lymph nodes — structure and function",
      "Innate immunity overview",
      "Adaptive immunity and antigen presentation",
    ],
  },
  {
    title: "Inflammatory Response & Cytokines",
    items: [
      "Acute inflammatory response",
      "Neutrophil migration",
      "Disorders of leukocyte migration (LAD, Chediak-Higashi)",
      "Chronic inflammatory response",
      "Pro-inflammatory cytokines",
      "Additional cytokines (full panel — TNF-α through IFN-γ)",
    ],
  },
  {
    title: "Cells of the Innate Immune System",
    items: [
      "Neutrophils — overview, granules, oxidative burst",
      "Basophils",
      "Eosinophils",
      "Mast cells",
      "Monocytes / macrophages",
      "NK cells",
      "Dendritic cells",
    ],
  },
  {
    title: "T Cells, B Cells & MHC",
    items: [
      "T-cell development",
      "MHC I and MHC II — loading, comparison, clinical correlations",
      "T-cell activation",
      "T cells overview, activation, differentiation, cytotoxic T cells",
      "Helper T cells overview — Th1 / Th2 / Th17",
      "Regulatory T cells",
      "B cells — overview, activation, plasma cells, memory cells",
    ],
  },
  {
    title: "Antibodies, Complement & Immunoglobulins",
    items: [
      "Antibody structure and properties",
      "Antibody isotypes",
      "Complement overview, pathways (classical, alternative, lectin) and disorders",
      "Immunoglobulins: IgA, IgG, IgM, IgE, IgD",
    ],
  },
  {
    title: "Vaccines & Immunodeficiency Syndromes",
    items: [
      "Active vs. passive immunity",
      "Live attenuated, whole inactivated, subunit protein, and subunit polysaccharide vaccines",
      "SCID and B-/T-cell variants",
      "Selective IgA deficiency",
      "Hyper-IgM syndrome, Hyper-IgE (Job) syndrome",
      "DiGeorge syndrome, Bruton agammaglobulinemia, Wiskott-Aldrich syndrome",
      "IPEX, LAD, CGD, IL-12 receptor deficiency",
    ],
  },
  {
    title: "Transfusion Reactions, Hypersensitivity & Transplant Rejection",
    items: [
      "Blood transfusion reactions: RBC incompatibility, acute hemolytic, delayed hemolytic, febrile non-hemolytic, TRALI, anaphylactic",
      "Hypersensitivity reactions — Types I, II, III, and IV",
      "Transplant rejection — hyperacute, acute, chronic, and GVHD",
      "Hemolytic Disease of the Newborn (BootCamp video, located in the Hematology & Oncology → Embryology chapter — it's immunology content, just filed there)",
    ],
  },
  {
    title: "Pharm Foundations — Pharmacodynamics (BootCamp Ch.1)",
    items: [
      "Protein Structure and Function",
      "Enzymes",
      "Michaelis Menten Enzyme Kinetics Derivation",
      "Michaelis Menten Enzyme Kinetics Interpretation",
      "Drug-Enzyme Interactions",
      "Enzyme Kinetics Practice Question",
      "Membrane Proteins",
      "Receptor Physiology",
      "Drug-Receptor Interactions",
      "Board-style Question Breakdown",
    ],
  },
  {
    title: "Pharm Foundations — Pharmacokinetics (BootCamp Ch.2)",
    items: [
      "Drug Delivery",
      "Drug Elimination",
      "Elimination Kinetics",
      "Cytochrome P450 Interactions",
      "Effect of Urine pH on Drug Elimination",
      "Dosage Calculations",
      "Board-style Question Breakdown 1",
      "Board-style Question Breakdown 2",
    ],
  },
  {
    title: "Pharm Foundations — Side Effects and Toxins (BootCamp Ch.4)",
    items: [
      "Age Considerations for Pharmacokinetics",
      "Pharmacological Toxicity and Treatment",
      "Environmental Toxins and their Treatments",
      "Seafood Toxins and their Treatments",
      "Board-style Question Breakdown",
    ],
  },
  {
    title: "BootCamp Pathology (Principles) — Chapters 1 & 2",
    items: [
      "Chapter 1, Inflammatory Response (all 5 videos): Acute Inflammatory Response, Neutrophil Migration, Disorders of the Leukocyte Migration, Chronic Inflammatory Response, Board-style Question Breakdown",
      "Chapter 2, Cellular Injury & Neoplasia (5 of 12 videos — stop after Calcification): Cellular Adaptations, Metaplasia, Cellular Injury, Necrosis, Calcification",
      "Skip 'Dysplasia and Neoplasia' and everything from 'Apoptotic Pathways' onward in Chapter 2 — that's oncology content that belongs to a later block",
    ],
  },
  {
    title: "Pathoma — Chapter 1: Growth Adaptations, Cellular Injury, and Cell Death",
    items: [
      "Cellular adaptations (hypertrophy, hyperplasia, atrophy, metaplasia)",
      "Dysplasia and neoplasia",
      "Necrosis — patterns and clinical correlations",
      "Apoptosis — intrinsic and extrinsic pathways",
      "Free radical injury",
      "Pathologic calcification and amyloidosis",
    ],
  },
  {
    title: "Pathoma — Chapter 2: Inflammation, Inflammatory Disorders, and Healing",
    items: [
      "Acute inflammation — vascular and cellular events",
      "Chronic inflammation and granulomatous disease",
      "Mediators of inflammation",
      "Wound healing — phases, types of healing, complications",
    ],
  },
];

const IB1_CHECKLIST_ITEMS = [
  { id: "bootcamp-immuno", text: "Watch all BootCamp Immunology videos (full section)" },
  { id: "bootcamp-hdn", text: "Watch \"Hemolytic Disease of the Newborn\" video (BootCamp Hematology & Oncology → Embryology chapter)" },
  { id: "bootcamp-pharm", text: "Watch BootCamp Pharm: Pharmacodynamics (Ch.1), Pharmacokinetics (Ch.2), Side Effects and Toxins (Ch.4) — skip Autonomic System (Ch.3, comes in IB4)" },
  { id: "bootcamp-pathology", text: "Watch BootCamp Pathology (Principles) Ch.1 (all 5) and Ch.2 through Calcification, skipping Dysplasia and Neoplasia" },
  { id: "pathoma-1", text: "Watch Pathoma Chapter 1 — Growth Adaptations, Cellular Injury, and Cell Death" },
  { id: "pathoma-2", text: "Watch Pathoma Chapter 2 — Inflammation, Inflammatory Disorders, and Healing" },
  { id: "anking-unsuspend", text: "Unsuspend AnKing tags as you go (immunology + pharm foundations + Pathoma ch.1-2)" },
  { id: "custom-cards", text: "Import the IB1 Custom Cards deck (637 cards) and unsuspend alongside AnKing" },
  { id: "daily-anki", text: "Daily Anki reviews — no exceptions, no pile-up" },
  { id: "qbank-week", text: "Final week: suspend new cards, stop new content, grind UWorld + Rx (AMBOSS optional) in tutor mode" },
  { id: "mehlman", text: "1-2 days before exam: read Mehlman HY Immunology + HY Pathology PDFs and do Mehlman's Anki cards" },
];

function IB1() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Block 1 of 10</p>
        <h1 className="text-3xl font-bold text-navy-900 mt-1">
          IB1 — Immunology + Intro Pathology + Pharm Foundations (PK/PD)
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          This is the first block, and it sets the pattern for everything that follows. The content map below is
          everything covered — immunology, the foundational pharm concepts (PK/PD) that every later block builds on,
          and the first two chapters of Pathoma. Run it through the{" "}
          <a href="#/global-method" className="text-teal-600 underline hover:text-teal-700">
            5-step method
          </a>{" "}
          exactly as described on the Global Method page.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">Step 1 connection:</span> Immunology and pharm PK/PD show up
          constantly on Step 1 — immunodeficiencies, hypersensitivity reactions, and pharmacokinetic calculations are
          recurring question types. Pathoma chapters 1 and 2 (cell injury and inflammation) are the foundation every
          other organ system's pathology builds on. Cover all of it now, even the parts that won't show up on the
          block exam — that's the whole point of this method.
        </p>
      </div>

      {/* Content covered */}
      <Collapsible
        title="Content Covered"
        subtitle="Everything in this block — watched in full via BootCamp + Pathoma"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-4">
          Status for this block: the entire BootCamp Immunology section (all videos listed below) and Pathoma
          Chapters 1 &amp; 2 have been watched in full.
        </p>
        <div className="space-y-5">
          {IB1_CONTENT_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-navy-800 mb-1.5">{group.title}</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* What to watch */}
      <Collapsible
        title="What to Watch"
        subtitle="Video platform for IB1"
        defaultOpen
        tone="teal"
      >
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">BootCamp — Immunology (full section):</span> all topics
            listed in "Content Covered" above, from lymphoid tissue through transplant rejection.
          </li>
          <li>
            <span className="font-semibold text-navy-900">BootCamp — Hematology &amp; Oncology, "Hemolytic Disease of
            the Newborn":</span> one video (15:34) tucked inside the Embryology chapter of Heme/Onc. It's immunology
            content (Rh/ABO incompatibility, Type II hypersensitivity) — BootCamp just files it there. Watch it as
            part of IB1.
          </li>
          <li>
            <span className="font-semibold text-navy-900">BootCamp — Pharm Foundations:</span> Chapter 1
            (Pharmacodynamics, 10 videos), Chapter 2 (Pharmacokinetics, 8 videos), and Chapter 4 (Side Effects and
            Toxins, 5 videos) — exact lesson titles in "Content Covered" above.{" "}
            <span className="font-semibold text-navy-900">Skip Chapter 3 (Autonomic System)</span> — that's covered
            in Intro Block 4 (IB4).
          </li>
          <li>
            <span className="font-semibold text-navy-900">BootCamp — Pathology (Principles):</span> Chapter 1
            (Inflammatory Response, all 5 videos) and Chapter 2 (Cellular Injury &amp; Neoplasia) up through
            Calcification — skip "Dysplasia and Neoplasia" and everything from "Apoptotic Pathways" onward (that's
            oncology content for a later block).
          </li>
          <li>
            <span className="font-semibold text-navy-900">Pathoma — Chapters 1 &amp; 2:</span> Growth Adaptations /
            Cellular Injury / Cell Death, and Inflammation / Inflammatory Disorders / Healing. Full videos and PDFs
            are in the shared{" "}
            <a
              href="https://drive.google.com/drive/folders/17IltmLSAor6ys0iaQKP3QIW12ZSbBbjy?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Pathoma Complete Drive folder
            </a>{" "}
            (chapter-numbered subfolders, 01 and 02 for this block).
          </li>
          <li>
            <span className="font-semibold text-navy-900">Sketchy / Pixo:</span> not used for IB1. Per the global
            method, Sketchy is reserved for the micro-heavy blocks (IB3/IB4). BootCamp + Pathoma is enough here.
          </li>
        </ul>
      </Collapsible>

      {/* AnKing tags */}
      <Collapsible
        title="AnKing Tags"
        subtitle="Unsuspend chapter-by-chapter, in the order you watch BootCamp"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          You need the AnKing Step 1 deck (v12, distributed via AnkiHub — this requires a paid subscription) for
          these tags to exist in your collection. Don't unsuspend everything below on day one. As you finish each
          BootCamp chapter, unsuspend the matching tag and start reviewing it that day.
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">BootCamp Immunology (full section)</span> —{" "}
            <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Bootcamp::Immunology</code>{" "}
            (982 cards, all 13 subtopics — Lymphoid Tissue through Transplant Rejection)
          </li>
          <li>
            <span className="font-semibold text-navy-900">"Hemolytic Disease of the Newborn"</span> —{" "}
            <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">
              #AK_Step1_v12::#Bootcamp::Hematology_and_Oncology::01_Embryology::02_Hemolytic_Disease_of_the_Newborn
            </code>{" "}
            (33 cards)
          </li>
          <li>
            <span className="font-semibold text-navy-900">BootCamp Pharm Foundations</span> — three tags, unsuspend
            each as you finish that chapter:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Bootcamp::Pharmacology::01_Pharmacodynamics</code> (211 cards)</li>
              <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Bootcamp::Pharmacology::02_Pharmacokinetics</code> (140 cards)</li>
              <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Bootcamp::Pharmacology::04_Side_Effects_and_Toxins</code> (143 cards)</li>
            </ul>
            Skip <span className="font-semibold">03_Autonomic_System</span> — that's IB4.
          </li>
          <li>
            <span className="font-semibold text-navy-900">BootCamp Pathology (Principles)</span> — two tags, but the
            second one needs trimming:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Bootcamp::Pathology::01_Inflammatory_Response</code>{" "}
                (155 cards) — unsuspend the full tag
              </li>
              <li>
                <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Bootcamp::Pathology::02_Cellular_Injury_&amp;_Neoplasia</code>{" "}
                (653 cards total) — only unsuspend the{" "}
                <span className="font-semibold">01_Cellular_Adaptations, 02_Metaplasia, 04_Cellular_Injury, 05_Necrosis,
                and 06_Calcification</span>{" "}
                sub-tags. Leave <span className="font-semibold">03_Dysplasia_and_Neoplasia</span> and everything from{" "}
                <span className="font-semibold">07_Apoptotic_Pathways</span> onward suspended — that's oncology
                content for a later block, matching what you skipped in the BootCamp videos.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-navy-900">Pathoma Ch.1 &amp; 2</span> — separate tags from the
            BootCamp Pathology ones above. Unsuspend as you watch each chapter:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Pathoma::01_Growth_Adaptations</code> (209 cards)</li>
              <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">#AK_Step1_v12::#Pathoma::02_Inflammation</code> (459 cards)</li>
            </ul>
          </li>
        </ol>
      </Collapsible>

      {/* Qbank filters */}
      <Collapsible
        title="Qbank Filters"
        subtitle="Final week — UWorld + Rx, in tutor mode"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          These are the filters for the final-week Qbank grind (Step 6) — not something you run throughout the
          block. Set them up, work in tutor mode, and feed wrong/flagged questions back into Anki.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-navy-800 mb-1 text-sm">UWorld — Create Test → Systems</h4>
            <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-600">
              <li><span className="font-semibold text-navy-900">Allergy &amp; Immunology</span> — full category</li>
              <li><span className="font-semibold text-navy-900">Pathology (Gen. Principles)</span> — Cellular pathology, Inflammation and repair</li>
              <li><span className="font-semibold text-navy-900">Pharmacology (Gen. Principles)</span> — full category</li>
              <li><span className="font-semibold text-navy-900">Poisoning &amp; Environmental Exposure</span> — Environmental exposure, Toxicology</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-navy-800 mb-1 text-sm">Rx — High-Yield Topics</h4>
            <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-600">
              <li><span className="font-semibold text-navy-900">Immunology</span> — full category</li>
              <li><span className="font-semibold text-navy-900">Hem/Onc → Embryology</span> — HDN only</li>
              <li><span className="font-semibold text-navy-900">Pathology</span> — Aging, Cellular Injury, Inflammation (skip Neoplasia)</li>
              <li><span className="font-semibold text-navy-900">Pharmacology</span> — PK/PD, Toxicities &amp; Side Effects (skip Autonomic)</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          <span className="font-semibold">AMBOSS:</span> not used for intro blocks, no verified filter set. If you
          use it, Allergy/Immunology, Foundational Pharmacology, and Poisoning/Toxicology are the closest
          disciplines — treat as a guess, not a recommendation.
        </p>
      </Collapsible>

      {/* Custom cards */}
      <Collapsible
        title="Custom High-Yield Cards"
        subtitle="Enrique's additional cards for this block — 637 cards across Immuno, Path, and Pharm"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          This is the extra layer on top of AnKing — cards built from lecture, BootCamp, Pathoma, and Qbank misses
          that AnKing doesn't cover well. Import the deck below; it lands as{" "}
          <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">MS2::HY Enrique's Custom Cards::Intro Block 1</code>{" "}
          with subdecks already organized by topic. Unsuspend and study these alongside your AnKing reviews — don't
          treat them as a separate pile.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-4">
          <li><span className="font-semibold text-navy-900">Immuno</span> — 163 cards</li>
          <li><span className="font-semibold text-navy-900">Path</span> — 73 cards</li>
          <li>
            <span className="font-semibold text-navy-900">Pharm</span> — 27 cards, plus organized subdecks:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                <span className="font-semibold text-navy-900">PHARM CAS I ULTRA HY:</span> PK/PD/Graphs/Kinetics (34),
                Toxicities (22), Integrative Deck (20), Dosage Calculations and Formulas (25), Drug Interactions (18),
                Polymorphisms (13)
              </li>
              <li>
                <span className="font-semibold text-navy-900">PPTS criollos:</span> pharmacogenomics (51), Supplements
                (35), Drug Interactions (33), FDA (20), plus a "Pharm criollo tablas HY" sub-branch (Peds vs
                Geriatrics, Pharmacogenomics, Drug Toxicity, Supplements)
              </li>
            </ul>
          </li>
        </ul>
        <a
          href="./IB1-HY-Custom-Cards.apkg"
          target="_blank"
          rel="noreferrer"
          className="text-teal-600 underline hover:text-teal-700 text-sm font-semibold"
        >
          Download IB1 Custom Cards (.apkg, 637 cards)
        </a>
      </Collapsible>

      {/* Final week resources */}
      <Collapsible
        title="Final-Week Resources — Mehlman High-Yield"
        subtitle="1-2 days before the exam: read + do the matching Anki cards"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          The last step of the method. Read these the day or two before the block exam, and do Mehlman's matching
          Anki cards alongside them.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
          <li>
            <a
              href="./HY-Immunology.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman — High Yield Immunology (PDF)
            </a>
          </li>
          <li>
            <a
              href="./HY-Pathology.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              Mehlman — High Yield Pathology (PDF)
            </a>
          </li>
        </ul>
      </Collapsible>

      {/* Checklist */}
      <Checklist storageKey="ib1" title="IB1 Execution Checklist" items={IB1_CHECKLIST_ITEMS} />
    </div>
  );
}

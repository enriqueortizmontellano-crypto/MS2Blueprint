// IB3 — Bacteria, Antibiotics, Antifungals, Mycology
// Block 3 of 10 in the sequence.
// The most straightforward block in the guide: BootCamp micro + all of Sketchy bacteria.

const IB3_BOOTCAMP = [
  {
    chapter: "Microbiology → 1. Fundamentals of Bacteriology",
    meta: "9 videos · 1h 29m",
    videos: [
      { title: "Structural Bacterial Envelope", time: "20:29" },
      { title: "Bacterial Adherence and Motility", time: "11:17" },
      { title: "Bacterial Morphology", time: "12:32" },
      { title: "Gram Stain Procedure", time: "5:12" },
      { title: "Poor Staining Organisms and Variant Staining Procedures", time: "14:16" },
      { title: "MacConkey Agar and Eosin Methylene Blue Agar", time: "6:47" },
      { title: "Blood Agar", time: "7:31" },
      { title: "Additional Culture Associations", time: "4:33" },
      { title: "Board-style Question Breakdown", time: "6:50" },
    ],
  },
  {
    chapter: "Microbiology → 2. Bacterial Genetics",
    meta: "6 videos · 45m",
    videos: [
      { title: "DNA Structures and Genetic Material Exchange", time: "6:13" },
      { title: "Transformation", time: "5:13" },
      { title: "Conjugation", time: "10:17" },
      { title: "Transduction", time: "11:12" },
      { title: "Transposition", time: "4:10" },
      { title: "Board-style Question Breakdown", time: "8:28" },
    ],
  },
  {
    chapter: "Microbiology → 3. Bacterial Toxins",
    meta: "5 videos · 50m",
    videos: [
      { title: "Endotoxin Properties", time: "6:35" },
      { title: "Endotoxin Mechanisms and Associations", time: "10:09", status: "optional", note: "IB2" },
      { title: "Gram Negative Sepsis", time: "13:11", status: "optional", note: "IB2" },
      { title: "Exotoxin", time: "14:00", status: "hy", note: "the big one in this chapter" },
      { title: "Board-style Question Breakdown", time: "6:34" },
    ],
    footnote: "Two of these were already required in IB2 for the Systemic Inflammation lecture. Exotoxin and Endotoxin Properties are the new material.",
  },
  {
    chapter: "Microbiology → 36. Antibiotics",
    meta: "28 videos · 4h 33m",
    videos: [
      { title: "General Principles of Antibiotics", time: "15:54" },
      { title: "Bacterial Coverage Overview", time: "4:19" },
      { title: "Classic Penicillins", time: "10:48" },
      { title: "Penicillinase-Resistant Penicillins", time: "3:46" },
      { title: "Aminopenicillins", time: "7:16" },
      { title: "Antipseudomonal Penicillins", time: "7:05" },
      { title: "Introduction to Cephalosporins", time: "7:47" },
      { title: "1st and 2nd Generation Cephalosporins", time: "4:52" },
      { title: "3rd, 4th, and 5th Generation Cephalosporins", time: "9:58" },
      { title: "Carbapenems and Monobactams", time: "8:00" },
      { title: "Glycopeptides (including Vancomycin)", time: "8:52" },
      { title: "Aminoglycosides", time: "16:27" },
      { title: "Tetracyclines and Derivatives", time: "12:11" },
      { title: "Macrolides", time: "16:49" },
      { title: "Lincosamides", time: "5:06" },
      { title: "Streptogramins, Oxazolidinones, and Amphenicols", time: "12:52" },
      { title: "Fluoroquinolones", time: "18:36" },
      { title: "Nitroimidazoles", time: "5:28" },
      { title: "Diaminopyrimidines and Sulfonamides", time: "11:06" },
      { title: "Nitrofurans", time: "4:04" },
      { title: "Fosfomycin, Daptomycin, and Polymyxins", time: "10:10" },
      { title: "Isoniazid", time: "11:25" },
      { title: "Rifamycins", time: "12:30" },
      { title: "Pyrazinamide, Ethambutol, Dapsone, and Clofazimine", time: "10:08" },
      { title: "Empiric Antibiotics in Respiratory and ENT Diseases", time: "9:38" },
      { title: "Empiric Antibiotics in Meningitis, Cystitis, and Pyelonephritis", time: "6:06" },
      { title: "Empiric Antibiotics in GI, Skin, Bone, and Hematogenous Infections", time: "7:44" },
      { title: "Board-style Question Breakdown", time: "14:15" },
    ],
    footnote: "4.5 hours is the single biggest time commitment in the block. Worth every minute — this section is exceptional for Step 1.",
  },
];
const IB3_SKETCHY_BACTERIA = [
  { section: "Gram-Positive Cocci", count: 7 },
  { section: "Gram-Positive Bacilli", count: 7 },
  { section: "Gram-Positive Branching Filamentous Rods", count: 2 },
  { section: "Gram-Negative Cocci", count: 4 },
  { section: "Gram-Negative Bacilli: Enteric Tract", count: 11 },
  { section: "Gram-Negative Bacilli: Respiratory Tract", count: 5 },
  { section: "Gram-Negative Bacilli: Zoonotics", count: 5 },
  { section: "Mycobacteria", count: 3 },
  { section: "Spirochetes", count: 4 },
  { section: "Gram-Indeterminate Bacteria", count: 7 },
];

const IB3_SKETCHY_FUNGI = [
  { title: "Candida albicans", time: "13m" },
  { title: "Aspergillus fumigatus", time: "11m" },
  { title: "Cryptococcus neoformans", time: "9m" },
  { title: "Mucor spp. & Rhizopus spp. (Mucormycetes)", time: "6m" },
  { title: "Pneumocystis jirovecii", time: "6m" },
];

const IB3_SKETCHY_ANTIFUNGALS = [
  { title: "Amphotericin & Flucytosine", time: "12m" },
  { title: "Azoles", time: "12m" },
  { title: "Griseofulvin, Terbinafine, Echinocandins", time: "9m" },
];

const IB3_CHECKLIST_ITEMS = [
  { id: "bc-fundamentals", text: "BootCamp Micro 1 — Fundamentals of Bacteriology: all 9 videos" },
  { id: "bc-genetics", text: "BootCamp Micro 2 — Bacterial Genetics: all 6 videos" },
  { id: "bc-toxins", text: "BootCamp Micro 3 — Bacterial Toxins: all 5 videos (2 are IB2 review)" },
  { id: "bc-abx", text: "BootCamp Micro 36 — Antibiotics: all 28 videos" },
  { id: "sk-bacteria", text: "Sketchy Bacteria: all 55 lessons across the 10 sections" },
  { id: "sk-unit-test", text: "Sketchy Bacteria Unit Test" },
  { id: "sk-fungi", text: "Sketchy Fungi — Opportunistic Fungal Infections: all 5 videos" },
  { id: "sk-antifungals", text: "Sketchy Pharm — Antifungals: all 3 videos" },
  { id: "anki-unsuspend", text: "Unsuspend the matching AnKing cards for every video as you finish it — not in one batch at the end" },
  { id: "daily-anki", text: "Daily Anki reviews — no exceptions, no pile-up" },
  { id: "qbank-week", text: "Final week: suspend new cards, stop new content, grind UWorld + Rx in tutor mode" },
];

function IB3Badge({ status, note }) {
  if (!status) return null;
  const styles = {
    optional: "bg-slate-100 text-slate-500",
    skip: "bg-rose-50 text-rose-600",
    hy: "bg-teal-50 text-teal-700",
  };
  const labels = { optional: "optional", skip: "skip", hy: "high yield" };
  return (
    <span className={"ml-2 text-[11px] font-semibold px-1.5 py-0.5 rounded " + styles[status]}>
      {labels[status]}
      {note ? " · " + note : ""}
    </span>
  );
}
function IB3() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Block 3 of 10</p>
        <h1 className="text-3xl font-bold text-navy-900 mt-1">
          IB3 — Bacteria, Antibiotics, Antifungals, Mycology
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          This is the most straightforward block in the guide. There is no picking and choosing, no
          cross-referencing eleven chapters, no judgment calls about scope. Two resources, four BootCamp chapters,
          and all of Sketchy bacteria. That is the entire block.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">This is also the Sketchy block.</span> Everywhere else in
          MS2 Sketchy is optional. Here it is the backbone — 55 bacteria lessons that you will lean on for the rest
          of med school and all through Dedicated. Do not skip them and plan to catch up later.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">Step 1 connection:</span> micro is one of the highest-yield
          areas on the exam and one of the least forgiving — it rewards recognition, and recognition comes from
          having seen the image before. Every hour you spend on Sketchy now is an hour you do not spend relearning
          organisms in Dedicated.
        </p>
      </div>

      {/* The whole block */}
      <Collapsible
        title="The Whole Block, In One Place"
        subtitle="Four BootCamp chapters + three Sketchy units"
        defaultOpen
        tone="navy"
      >
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">BootCamp Microbiology</span> — every video from the first
            three chapters (Fundamentals of Bacteriology, Bacterial Genetics, Bacterial Toxins) plus the entire
            Antibiotics chapter.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Sketchy Bacteria</span> — all 55 lessons, plus the unit
            test.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Sketchy Fungi</span> — the Opportunistic Fungal Infections
            section only.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Sketchy Pharm</span> — the Antifungals section.
          </li>
        </ul>
        <p className="text-sm text-slate-600 mt-3">
          That is it. Nothing else to hunt for.
        </p>
      </Collapsible>

      {/* Antibiotics escape hatch */}
      <Collapsible
        title="If the Antibiotics Chapter Feels Like Too Much"
        subtitle="An honest alternative — and why I would not take it"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          BootCamp Antibiotics is 28 videos and four and a half hours. It is the biggest single block of content in
          IB3 and it is reasonable to look at that number and flinch.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          <span className="font-semibold text-navy-900">The alternative:</span> Sketchy Pharm has an antibiotics
          section that covers the same drug classes in less time. If you are drowning, take it. A completed Sketchy
          antibiotics section beats a half-finished BootCamp one.
        </p>
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-navy-900">But if you can afford the hours, do BootCamp.</span> That
          chapter is genuinely excellent — the mechanism and coverage explanations are the best I used, and it paid
          off directly on Step. This is the one place in IB3 where I would spend extra time rather than save it.
        </p>
      </Collapsible>
      {/* BootCamp */}
      <Collapsible
        title="BootCamp — Chapter by Chapter"
        subtitle="48 videos across four chapters"
        defaultOpen
        tone="navy"
      >
        <div className="space-y-5">
          {IB3_BOOTCAMP.map((group) => (
            <div key={group.chapter}>
              <h4 className="font-semibold text-navy-800">{group.chapter}</h4>
              <p className="text-xs text-slate-500 mb-1.5">{group.meta}</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {group.videos.map((v) => (
                  <li key={v.title} className="flex flex-wrap items-baseline">
                    <span className={v.status === "optional" ? "text-slate-400" : "text-navy-900 font-medium"}>
                      {v.title}
                    </span>
                    {v.time ? <span className="ml-2 text-xs text-slate-400">{v.time}</span> : null}
                    <IB3Badge status={v.status} note={v.note} />
                  </li>
                ))}
              </ul>
              {group.footnote ? (
                <p className="text-xs text-slate-500 mt-1.5 italic">{group.footnote}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Sketchy */}
      <Collapsible
        title="Sketchy — Bacteria, Opportunistic Fungi, Antifungals"
        subtitle="55 bacteria lessons + 8 fungal"
        defaultOpen
        tone="teal"
      >
        <h4 className="font-semibold text-navy-800 mb-1">Bacteria — all 55 lessons</h4>
        <p className="text-xs text-slate-500 mb-2">Work through the sections in order; they build on each other.</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-2">
          {IB3_SKETCHY_BACTERIA.map((s) => (
            <li key={s.section}>
              <span className="font-medium text-navy-900">{s.section}</span>{" "}
              <span className="text-slate-400">— {s.count} lessons</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 italic mb-5">
          Finish with the Bacteria Unit Test — 56 lessons total.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1">Fungi — Opportunistic Fungal Infections only</h4>
        <ul className="space-y-1 text-sm text-slate-600 mb-2">
          {IB3_SKETCHY_FUNGI.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 italic mb-5">
          The cutaneous and subcutaneous sections above these (Malassezia, dermatophytes, Sporothrix) are not
          required for this block.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1">Pharmacology — Antifungals</h4>
        <ul className="space-y-1 text-sm text-slate-600">
          {IB3_SKETCHY_ANTIFUNGALS.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
      </Collapsible>
      {/* AnKing tags */}
      <Collapsible
        title="AnKing Tags"
        subtitle="Unsuspend per video as you go"
        badge="TBD"
        tone="default"
      >
        <p className="text-sm text-slate-600 mb-3">
          Same rule as every block: unsuspend the matching cards the day you watch the video, never in one batch at
          the end. IB3 is the block where that discipline matters most — 55 Sketchy lessons is a lot of cards, and
          letting them stack up will bury you.
        </p>
        <p className="text-sm text-slate-600">
          Exact tag strings and card counts still need pulling from the Anki browser. The BootCamp and Sketchy micro
          tags both apply here — send screenshots and this section gets built out.
        </p>
      </Collapsible>

      {/* Qbank */}
      <Collapsible
        title="Qbank"
        subtitle="Final week — UWorld + Rx, in tutor mode"
        badge="TBD"
        tone="default"
      >
        <p className="text-sm text-slate-600">
          Final-week grind (Step 6), not something you run throughout the block. Question IDs or filter screenshots
          needed to fill this in.
        </p>
      </Collapsible>

      {/* Custom cards */}
      <Collapsible
        title="Custom High-Yield Cards"
        subtitle="Enrique's additional cards for this block"
        badge="TBD"
        tone="default"
      >
        <p className="text-sm text-slate-600">
          Upload the IB3 custom deck and this section gets the same treatment as IB1 and IB2 — subdeck breakdown,
          card counts, and a download link.
        </p>
      </Collapsible>

      {/* Mehlman */}
      <Collapsible
        title="Final-Week Resources — Mehlman High-Yield"
        subtitle="1-2 days before the exam"
        badge="TBD"
        tone="default"
      >
        <p className="text-sm text-slate-600">
          The Mehlman Anki deck is already downloadable from the{" "}
          <a href="#/block/ib1" className="text-teal-600 underline hover:text-teal-700">
            IB1 page
          </a>{" "}
          and covers every block — import it once. Which HY PDFs apply to IB3 still needs confirming.
        </p>
      </Collapsible>

      {/* Checklist */}
      <Checklist storageKey="ib3" title="IB3 Execution Checklist" items={IB3_CHECKLIST_ITEMS} />
    </div>
  );
}

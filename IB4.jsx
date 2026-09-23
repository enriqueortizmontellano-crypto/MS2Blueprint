// IB4 — Viruses, Antivirals, Autonomics, Neoplasia
// Block 4 of 10 in the sequence. The heaviest of the intro blocks.

const IB4_VIROLOGY_FUNDAMENTALS = [
  {
    chapter: "Microbiology → 26. Approach to Virology",
    meta: "2 videos · 13m",
    videos: [
      { title: "Approach to Virology", time: "8:31", status: "hy", note: "the virus algorithm" },
      { title: "Comprehensive Virus Diagrams", time: "4:49" },
    ],
  },
  {
    chapter: "Microbiology → 27. Basics of Virology",
    meta: "4 videos · 57m",
    videos: [
      { title: "Viral Organization", time: "16:51" },
      { title: "Mechanisms of Viral Infectivity", time: "19:09" },
      { title: "Viral Genetics", time: "13:11" },
      { title: "Host Defense", time: "7:59" },
    ],
  },
];

const IB4_SKETCHY_VIRUSES = [
  { section: "RNA Viruses: Positive Sense", count: 13, note: "Picornaviridae Overview through HIV Life Cycle" },
  { section: "RNA Viruses: Negative Sense", count: 8, note: "Influenzavirus through Rotavirus & Colorado Tick Fever" },
  { section: "DNA Viruses", count: 13, note: "HSV 1 & 2 through Hepatitis B Viral Life Cycle" },
];

const IB4_ANTIVIRALS = [
  { title: "Respiratory Antiviral Therapy", time: "12:18" },
  { title: "HSV and VZV Antiviral Therapy", time: "13:38" },
  { title: "Additional Herpetic Antiviral Therapy", time: "9:27" },
  { title: "HIV Antiretroviral Pharmacology", time: "4:19" },
  { title: "Antiretroviral Attachment and Fusion Inhibitors", time: "5:38" },
  { title: "Antiretroviral Nucleoside Reverse Transcriptase Inhibitors", time: "11:57" },
  { title: "Additional Antiretroviral Therapies", time: "13:22" },
  { title: "HIV Antiretroviral Management", time: "4:56" },
  { title: "Hepatitis B Antiviral Therapy", time: "14:24" },
  { title: "Hepatitis C Antiviral Therapy", time: "13:46" },
  { title: "Board-style Question Breakdown", time: "9:11" },
];
const IB4_AUTONOMICS = [
  { title: "Autonomic System Overview", time: "9:51" },
  { title: "Autonomic System Signaling", time: "9:02" },
  { title: "Autonomic Secondary Messengers", time: "5:35" },
  { title: "Autonomic System Summary", time: "10:51" },
  { title: "Other Involuntary Signaling Systems", time: "4:30" },
  { title: "Cholinomimetics - Direct Agonists", time: "10:19" },
  { title: "Cholinomimetics - Anticholinesterases", time: "8:39" },
  { title: "Anticholinesterase Poisoning", time: "8:17" },
  { title: "Muscarinic Antagonists", time: "5:48" },
  { title: "Endogenous Adrenergic Agonists", time: "14:03" },
  { title: "Direct Sympathomimetics", time: "8:31" },
  { title: "Indirect Sympathomimetics", time: "4:50" },
  { title: "Physiological Effects of Sympathomimetics", time: "10:00" },
  { title: "Sympatholytics", time: "3:05" },
  { title: "Alpha Adrenergic Antagonists", time: "9:05" },
  { title: "Beta Adrenergic Antagonists", time: "14:06" },
  { title: "Phosphodiesterase Inhibitors", time: "8:47" },
  { title: "Exposure to Multiple Autonomic Drugs", time: "13:47" },
  { title: "Board-style Question Breakdown 1", time: "5:31" },
  { title: "Board-style Question Breakdown 2", time: "10:10" },
];

const IB4_NEOPLASIA = [
  { title: "Dysplasia and Neoplasia", time: "10:15", note: "skipped in IB1 — this is where it lands" },
  { title: "Apoptotic Pathways", time: "12:19" },
  { title: "Cell Growth Regulation", time: "16:01" },
  { title: "Oncogenes and Tumor Suppressor Genes", time: "13:37" },
  { title: "Board-style Question Breakdown", time: "13:58" },
];

const IB4_CHEMO = [
  { title: "Cell Cycle Dependent Drug Targets", time: "13:36" },
  { title: "Cell Cycle Independent Drug Targets", time: "19:11" },
];

const IB4_PATHOMA = [
  "3.1 Neoplasia",
  "3.2a Carcinogenesis",
  "3.2b Carcinogenesis",
  "3.2c Carcinogenesis",
  "3.3 Tumor Progression",
  "3.4 Clinical Characteristics",
];
const IB4_TUMORS = [
  {
    section: "Gastroenterology → 9. Large Intestine",
    videos: ["13. Colonic Polyps (11:07)", "14. Colorectal Carcinogenesis Molecular Pathway (11:15)", "15. Colorectal Cancer (13:51)", "16. Polyposis Syndromes (11:17)"],
    tier: "required",
  },
  {
    section: "Gastroenterology → 8. Small Intestine",
    videos: ["18. Carcinoid Tumor (16:31)"],
    tier: "required",
  },
  {
    section: "Gastroenterology → 5. Liver",
    videos: ["22. Hepatocellular Carcinoma (17:49)", "23. Additional Liver Masses (16:07)"],
    tier: "required",
  },
  {
    section: "Pulmonology → 7. Lung Cancer",
    videos: ["1. Lung Cancer Basics (5:43)", "2. Small Cell Carcinoma (6:01)", "3. Non-Small Cell Carcinoma (10:32)", "4. Mesothelioma (3:29)"],
    tier: "required",
    note: "The whole chapter — only 25 minutes and all of it is high yield.",
  },
  {
    section: "Nephrology → 13. Inflammatory Conditions & Malignancy",
    videos: ["4. Renal Cell Carcinoma (13:28)", "6. Wilm\u2019s Tumor (7:05)", "7. Urothelial Carcinoma (9:26)", "8. Squamous Cell Carcinoma of the Bladder (5:32)"],
    tier: "semi",
    note: "Worth doing, but these are the first to cut if the block is burying you.",
  },
  {
    section: "Endocrinology → 6. Adrenal Glands",
    videos: ["9. Adrenal Neoplasms (11:13)"],
    tier: "optional",
    note: "Low yield for this block.",
  },
  {
    section: "Reproductive → cancer sections",
    videos: ["Male and female repro cancer videos"],
    tier: "optional",
    note: "I do not remember this being tested. Listed so you know it exists, not because you need it.",
  },
];

const IB4_CHECKLIST_ITEMS = [
  { id: "bc-virology-fund", text: "BootCamp Micro 26 + 27 — Approach to Virology and Basics of Virology (mandatory, no substitute)" },
  { id: "viruses", text: "Virus organisms — pick ONE for content: all 34 Sketchy virus lessons, or BootCamp\u2019s virus chapters" },
  { id: "virus-anki", text: "Virus Anki — do BOTH the Sketchy and BootCamp decks for each pathogen, whichever one you watched" },
  { id: "antivirals", text: "BootCamp Micro 39 — Antivirals: all 11 videos" },
  { id: "autonomics", text: "BootCamp Pharm 3 — Autonomic System: all 20 videos" },
  { id: "neoplasia", text: "BootCamp Pathology 2 — the post-Calcification videos plus Dysplasia and Neoplasia" },
  { id: "chemo", text: "Cancer chemo — Cell Cycle Dependent and Independent Drug Targets" },
  { id: "pathoma", text: "Pathoma Chapter 3 — Principles of Neoplasia (all 6 videos)" },
  { id: "tumors-required", text: "Tumor videos — Gastro (large intestine, small intestine, liver) and the full Lung Cancer chapter" },
  { id: "tumors-semi", text: "Tumor videos — Nephrology: RCC, Wilm\u2019s, Urothelial, SCC of bladder (sacrificeable if short on time)" },
  { id: "anki-unsuspend", text: "Unsuspend the matching AnKing deck for every video listed on this page — as you go, not in one batch" },
  { id: "daily-anki", text: "Daily Anki reviews — no exceptions, no pile-up" },
  { id: "qbank-week", text: "Final week: suspend new cards, stop new content, grind UWorld + Rx in tutor mode" },
];

function IB4Badge({ status, note }) {
  if (!status) return null;
  const styles = {
    optional: "bg-slate-100 text-slate-500",
    semi: "bg-amber-50 text-amber-700",
    hy: "bg-teal-50 text-teal-700",
    required: "bg-teal-50 text-teal-700",
  };
  const labels = { optional: "optional", semi: "sacrificeable", hy: "high yield", required: "required" };
  return (
    <span className={"ml-2 text-[11px] font-semibold px-1.5 py-0.5 rounded " + styles[status]}>
      {labels[status]}
      {note ? " \u00b7 " + note : ""}
    </span>
  );
}
function IB4() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Block 4 of 10</p>
        <h1 className="text-3xl font-bold text-navy-900 mt-1">
          IB4 — Viruses, Antivirals, Autonomics, Neoplasia
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          This is the biggest intro block, and it is not close. Four unrelated domains land at once: every virus,
          every antiviral, the entire autonomic nervous system, and all of oncology. Roughly{" "}
          <span className="font-semibold text-navy-900">15 hours of video</span> before Anki. Read the pacing
          section below before you start — this is the block people fall behind in.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">Step 1 connection:</span> virology and autonomics are two of
          the densest, most reliably tested areas on the exam, and neoplasia principles underpin every organ-specific
          cancer question you will ever see. Nothing here is filler. The volume is the problem, not the relevance.
        </p>
      </div>

      {/* Pacing */}
      <Collapsible
        title="Read This First — How to Pace 15 Hours"
        subtitle="The block people fall behind in"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-3">
          IB4 is roughly double IB3. If you treat it like a normal block you will not finish, and the part that gets
          dropped is always the last thing on the list — which here is oncology, the part that carries into every
          later block.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">Start with virus organisms, not fundamentals.</span> They
            are the single largest chunk (~5h on Sketchy) and the slowest to get through. Front-load them while you
            still have runway. Fundamentals are only 70 minutes and can slot in anywhere.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Autonomics in one continuous stretch.</span> Nearly three
            hours, and the drug classes only make sense against each other. Splitting it across two weeks means
            relearning the receptor logic twice.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Neoplasia is a prerequisite, not a topic.</span> The
            BootCamp principles and Pathoma Ch.3 explain the mechanisms behind every organ-specific tumor video. Do
            them before the tumor list, not after.
          </li>
          <li>
            <span className="font-semibold text-navy-900">If you have to cut, cut in this order:</span> the repro
            cancer sections, then adrenal neoplasms, then the nephrology tumors. Everything above those is load
            bearing.
          </li>
        </ul>
      </Collapsible>

      {/* Virus choice */}
      <Collapsible
        title="Viruses — Pick One for Content, Do Both for Anki"
        subtitle="The rule here is different from IB3. Read it carefully."
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          For the virus organisms themselves, Sketchy and BootCamp are both genuinely good and you should{" "}
          <span className="font-semibold text-navy-900">watch only one</span>. I did about half of each because I
          got bored of Sketchy partway through — that worked fine.
        </p>
        <div className="rounded-lg bg-teal-50 border border-teal-100 p-3 mb-3">
          <p className="text-sm text-navy-900">
            <span className="font-semibold">But do both Anki decks.</span> This is the part people get wrong. The
            Sketchy and BootCamp virus decks overlap heavily, but each one has cards the other simply does not. The
            content is redundant; the cards are not.
          </p>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          <span className="font-semibold text-navy-900">Time check, so you choose with open eyes:</span> Sketchy
          covers all 34 virus lessons in about 5 hours. BootCamp's virus chapters run considerably longer — the
          positive-sense RNA chapter alone is over 5 hours. They are equally good; they are not equally long.
        </p>
        <p className="text-sm text-slate-600">
          One thing BootCamp has that Sketchy does not: the{" "}
          <span className="font-semibold text-navy-900">virus classification algorithm</span> taught in Approach to
          Virology. It is genuinely excellent for sorting an unknown virus on an exam, and it is the reason the
          fundamentals chapters are mandatory regardless of which resource you pick for the organisms.
        </p>
      </Collapsible>
      {/* Virology fundamentals */}
      <Collapsible
        title="BootCamp — Virology Fundamentals"
        subtitle="Mandatory. No substitute, whichever resource you pick for the organisms."
        defaultOpen
        tone="navy"
      >
        <div className="space-y-5">
          {IB4_VIROLOGY_FUNDAMENTALS.map((group) => (
            <div key={group.chapter}>
              <h4 className="font-semibold text-navy-800">{group.chapter}</h4>
              <p className="text-xs text-slate-500 mb-1.5">{group.meta}</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {group.videos.map((v) => (
                  <li key={v.title} className="flex flex-wrap items-baseline">
                    <span className="text-navy-900 font-medium">{v.title}</span>
                    <span className="ml-2 text-xs text-slate-400">{v.time}</span>
                    <IB4Badge status={v.status} note={v.note} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Virus organisms */}
      <Collapsible
        title="Virus Organisms — Sketchy (or BootCamp)"
        subtitle="34 Sketchy lessons, ~5h"
        defaultOpen
        tone="teal"
      >
        <h4 className="font-semibold text-navy-800 mb-1">Sketchy Viruses</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-4">
          {IB4_SKETCHY_VIRUSES.map((s) => (
            <li key={s.section}>
              <span className="font-medium text-navy-900">{s.section}</span>{" "}
              <span className="text-slate-400">— {s.count} lessons</span>
              <span className="block text-xs text-slate-500">{s.note}</span>
            </li>
          ))}
        </ul>
        <div className="pt-3 border-t border-slate-200">
          <h4 className="font-semibold text-navy-800 mb-1 text-sm">Or: BootCamp virus chapters</h4>
          <p className="text-sm text-slate-600">
            If Sketchy is not for you, BootCamp covers the same organisms across its virus chapters in the
            Microbiology section — positive-sense RNA, negative-sense RNA, and DNA viruses. Individual videos are
            not listed here on purpose: it is an alternative path, not a second checklist. Open the chapters and
            work straight through.
          </p>
        </div>
      </Collapsible>

      {/* Antivirals */}
      <Collapsible
        title="BootCamp — Antivirals"
        subtitle="Microbiology 39 · 11 videos · 1h 53m"
        tone="teal"
      >
        <ul className="space-y-1 text-sm text-slate-600">
          {IB4_ANTIVIRALS.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
      </Collapsible>

      {/* Autonomics */}
      <Collapsible
        title="BootCamp — Autonomic System"
        subtitle="Pharmacology 3 · 20 videos · 2h 55m"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          IB1 deliberately skipped this chapter and deferred it here. It is long — do it in one continuous stretch
          rather than spread across weeks, because the drug classes only make sense against each other.
        </p>
        <ul className="space-y-1 text-sm text-slate-600">
          {IB4_AUTONOMICS.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
      </Collapsible>
      {/* Neoplasia */}
      <Collapsible
        title="Neoplasia — BootCamp Pathology + Pathoma Ch.3"
        subtitle="Picks up exactly where IB1 stopped"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-3">
          IB1 took Pathology Ch.2 through Calcification and deferred the rest here. These are the remaining videos,
          plus Dysplasia and Neoplasia, which IB1 skipped on purpose.
        </p>
        <h4 className="font-semibold text-navy-800 mb-1 text-sm">BootCamp — Pathology (Principles) 2</h4>
        <ul className="space-y-1 text-sm text-slate-600 mb-2">
          {IB4_NEOPLASIA.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
              {v.note ? <span className="ml-2 text-xs text-slate-500 italic">{v.note}</span> : null}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 italic mb-5">
          BootCamp cross-lists this exact chapter under Hematology &amp; Oncology 8, "Principles of Oncology and
          Therapeutics" — same videos, same runtimes. If you find it there, you have not missed a section.
        </p>

        <h4 className="font-semibold text-navy-800 mb-1 text-sm">Pathoma Chapter 3 — Principles of Neoplasia</h4>
        <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-600 mb-2">
          {IB4_PATHOMA.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
        <p className="text-sm text-slate-600">
          Videos and PDFs are in the shared{" "}
          <a
            href="https://drive.google.com/drive/folders/17IltmLSAor6ys0iaQKP3QIW12ZSbBbjy?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="text-teal-600 underline hover:text-teal-700"
          >
            Pathoma Complete Drive folder
          </a>{" "}
          — chapter-numbered subfolders, <span className="font-semibold text-navy-900">03. Principles of Neoplasia</span>{" "}
          for this block.
        </p>
        <p className="text-sm text-slate-600 mt-3">
          <span className="font-semibold text-navy-900">Both Anki decks are required here</span> — the BootCamp
          Pathology cards and the Pathoma Neoplasia cards.
        </p>
      </Collapsible>

      {/* Chemo */}
      <Collapsible
        title="Cancer Chemotherapy"
        subtitle="Filed under Pharm — because that is how it gets tested"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          These two live inside BootCamp's Pathology chapter, but the class asks them as pharmacology, so treat them
          that way. Look for them under{" "}
          <span className="font-semibold text-navy-900">Pathology (Principles) → 2. Cellular Injury &amp; Neoplasia</span>,
          videos 10 and 11.
        </p>
        <ul className="space-y-1 text-sm text-slate-600">
          {IB4_CHEMO.map((v) => (
            <li key={v.title} className="flex flex-wrap items-baseline">
              <span className="text-navy-900 font-medium">{v.title}</span>
              <span className="ml-2 text-xs text-slate-400">{v.time}</span>
            </li>
          ))}
        </ul>
      </Collapsible>

      {/* Tumors */}
      <Collapsible
        title="Tumor Videos by System"
        subtitle="Scattered across five BootCamp subjects"
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-4">
          Organ-specific cancers, pulled from wherever BootCamp files them. Do neoplasia principles first — these
          videos assume you already know the mechanisms.
        </p>
        <div className="space-y-4">
          {IB4_TUMORS.map((g) => (
            <div key={g.section}>
              <h4 className="font-semibold text-navy-800 text-sm flex flex-wrap items-baseline">
                <span>{g.section}</span>
                <IB4Badge status={g.tier} />
              </h4>
              <ul className="list-disc pl-5 space-y-0.5 text-sm text-slate-600 mt-1">
                {g.videos.map((v) => (
                  <li key={v} className={g.tier === "optional" ? "text-slate-400" : ""}>{v}</li>
                ))}
              </ul>
              {g.note ? <p className="text-xs text-slate-500 mt-1 italic">{g.note}</p> : null}
            </div>
          ))}
        </div>
      </Collapsible>
      {/* AnKing */}
      <Collapsible
        title="AnKing Tags"
        subtitle="One rule, no tag list"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          You know the drill by now, so there is no tag list on this page. The rule:{" "}
          <span className="font-semibold text-navy-900">unsuspend the matching AnKing deck for every video listed
          above</span>, the day you watch it, never in one batch at the end.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">Viruses — both decks.</span> Sketchy and BootCamp, even
            though you only watched one for content.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Neoplasia — both decks.</span> BootCamp Pathology and
            Pathoma Neoplasia.
          </li>
          <li>
            Everything else — the matching deck for each video.
          </li>
        </ul>
        <p className="text-sm text-slate-600 mt-3">
          This is the block where letting cards pile up ends the method. Fifteen hours of video is a lot of
          unsuspending, and it compounds fast.
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
        subtitle="Includes the BootCamp virus algorithm mnemonics"
        badge="TBD"
        tone="default"
      >
        <p className="text-sm text-slate-600">
          The IB4 deck includes a custom set built around the virus classification algorithm and mnemonics from
          BootCamp's Approach to Virology. Upload the deck and this section gets the full breakdown — subdecks, card
          counts, and a download link.
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
          and covers every block — import it once. Which HY PDFs apply to IB4 still needs confirming.
        </p>
      </Collapsible>

      {/* Checklist */}
      <Checklist storageKey="ib4" title="IB4 Execution Checklist" items={IB4_CHECKLIST_ITEMS} />
    </div>
  );
}

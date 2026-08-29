// test// IB2 — Pathology Escalation + Pharm Escalation
// Block 2 of 10 in the sequence.
// Organized by BootCamp chapter → video. Anything already watched in IB1 is marked optional.

const IB2_BOOTCAMP = [
  {
    chapter: "MSK → Pharmacology",
    lecture: "Non-Opioid Analgesia",
    videos: [
      { title: "Arachidonic Acid Pathways", time: "6:00" },
      { title: "Acetaminophen", time: "7:27" },
      { title: "NSAIDs", time: "8:18" },
      { title: "Aspirin & Celecoxib", time: "10:00" },
      { title: "TNF-alpha Inhibitors + Monoclonal Antibodies" },
    ],
  },
  {
    chapter: "MSK → Rheumatologic Diseases",
    lecture: "Markers of Autoimmunity",
    videos: [
      { title: "Systemic Lupus Erythematosus", time: "15:46" },
      { title: "Sjögren Syndrome", time: "9:56" },
      { title: "Antiphospholipid Syndrome", time: "9:30" },
      { title: "Scleroderma & Mixed Connective Tissue Disease", time: "10:55" },
      { title: "Rheumatoid Arthritis", time: "12:34", status: "skip", note: "belongs to Derm/MSK" },
    ],
  },
  {
    chapter: "Psych → Substance Abuse",
    lecture: "Opioid Analgesia",
    videos: [
      { title: "Opioids", time: "10:30" },
      { title: "Opioid Classification", time: "8:16" },
    ],
  },
  {
    chapter: "Immunology → Transplant Rejection",
    lecture: "Pathology of Transplantation + Immunosuppressors",
    videos: [
      { title: "Transplantation Principles", time: "8:21", status: "optional", note: "IB1" },
      { title: "Hyperacute Rejection", time: "7:59", status: "optional", note: "IB1" },
      { title: "Acute Rejection", time: "10:55", status: "optional", note: "IB1" },
      { title: "Chronic Rejection", time: "3:07", status: "optional", note: "IB1" },
      { title: "Graft vs Host Disease", time: "11:23", status: "optional", note: "IB1" },
      { title: "Transplant Rejection Summary", time: "3:31", status: "optional", note: "IB1" },
      { title: "Immunosuppressants", time: "20:57", status: "hy", note: "the new video in this section" },
      { title: "Biologic Immunotherapy", status: "optional", note: "low yield for this block" },
    ],
  },
  {
    chapter: "Immunology → Hypersensitivities",
    lecture: "Diseases of the Immune System",
    videos: [
      { title: "Type I Hypersensitivity", status: "optional", note: "IB1" },
      { title: "Type II Hypersensitivity", status: "optional", note: "IB1" },
      { title: "Type III Hypersensitivity", status: "optional", note: "IB1" },
      { title: "Type IV Hypersensitivity", status: "optional", note: "IB1" },
      { title: "Hypersensitivity Summary", status: "optional", note: "IB1" },
    ],
  },
  {
    chapter: "Pulmonology → Lung Pathology Special Topics",
    lecture: "Hemodynamic Disorders + Systemic Inflammation",
    videos: [
      { title: "DVT and Pulmonary Embolism", time: "14:36" },
      { title: "Pulmonary Edema", time: "16:48" },
      { title: "Pleural Effusion", time: "21:00", status: "hy", note: "really high yield" },
      { title: "ARDS and NRDS", time: "20:30" },
      { title: "Pulmonary Hypertension", time: "16:03", status: "skip" },
      { title: "Pneumothorax", time: "16:11", status: "skip" },
    ],
    footnote: "That's the whole chapter — ARDS and NRDS is the last video. Everything except Pulmonary Hypertension and Pneumothorax.",
  },
  {
    chapter: "Nephrology → Kidney Injury",
    lecture: "Systemic Inflammation",
    videos: [
      { title: "Kidney Injury — Overview", time: "11:32" },
      { title: "Prerenal AKI", time: "19:57" },
      { title: "Intrarenal AKI", time: "12:44" },
      { title: "Postrenal AKI", time: "11:48" },
      { title: "AKI Summary", time: "8:08" },
      { title: "Acute Tubular Necrosis", time: "12:42" },
      { title: "Acute Interstitial Nephritis", time: "12:48", status: "skip" },
    ],
    footnote: "Only the AKI portion of the chapter.",
  },
  {
    chapter: "Cardiology → Shock",
    lecture: "Systemic Inflammation",
    videos: [
      { title: "Shock — Overview", time: "7:39" },
      { title: "Hypovolemic Shock", time: "6:51" },
      { title: "Cardiogenic Shock", time: "6:06" },
      { title: "Obstructive Shock", time: "3:53" },
      { title: "Septic Shock", time: "6:34" },
      { title: "Anaphylactic Shock", time: "0:59" },
      { title: "Neurogenic Shock", time: "3:18" },
    ],
    footnote: "The entire section — 41 minutes total. Know the CO / SVR / PCWP profile for each type cold.",
  },
  {
    chapter: "Heme/Onc → Coagulation and Fibrinolysis",
    lecture: "Systemic Inflammation",
    videos: [{ title: "DIC" }],
    footnote: "This video only — nothing else from the chapter.",
  },
  {
    chapter: "Heme/Onc → Microcytic Anemia",
    lecture: "Heavy Metal Intoxication + Chelators",
    videos: [{ title: "Lead Toxicity" }],
    footnote: "This video only — nothing else from the chapter.",
  },
  {
    chapter: "Micro → Bacterial Toxins",
    lecture: "Systemic Inflammation",
    videos: [
      { title: "Endotoxin Mechanisms and Associations", time: "10:09" },
      { title: "Gram Negative Sepsis", time: "13:11" },
      { title: "Endotoxin Properties", time: "6:35", status: "skip" },
      { title: "Exotoxin", time: "14:00", status: "skip", note: "IB3" },
    ],
  },
  {
    chapter: "Pharmacology (Principles) → Side Effects and Toxins",
    lecture: "Environmental + Forensic Pathology",
    videos: [
      { title: "Age Considerations for Pharmacokinetics", time: "8:04", status: "optional", note: "IB1" },
      { title: "Pharmacological Toxicity and Treatment", time: "8:07", status: "optional", note: "IB1" },
      { title: "Environmental Toxins and their Treatments", time: "10:14", status: "optional", note: "IB1" },
      { title: "Seafood Toxins and their Treatments", time: "3:28", status: "optional", note: "IB1" },
      { title: "Board-style Question Breakdown", time: "12:18", status: "optional", note: "IB1" },
    ],
    footnote: "This is Chapter 4 from your IB1 Pharm Foundations — the same five videos. Cards are already unsuspended; just keep them in rotation.",
  },
];

const IB2_OTHER_RESOURCES = [
  {
    platform: "Sketchy",
    scope: "Three videos only",
    items: [
      "Opioids, Naloxone, Naltrexone (20m)",
      "IV Anesthetics (15m)",
      "Inhaled Anesthetics & Dantrolene (15m)",
      "Local Anesthetics",
    ],
    note: "Nothing else from Sketchy is prescribed for IB2. It exists for most of this block if you use it — but it isn't required.",
  },
  {
    platform: "Boards and Beyond",
    scope: "The anesthesia section",
    items: [
      "General + Localized Anesthesia — the complete section",
    ],
    note: "BootCamp has no anesthesia coverage. This fills a real gap rather than duplicating.",
  },
  {
    platform: "Pathoma",
    scope: "Two chapters",
    items: [
      "Inflammation, Inflammatory Disorders, and Healing → Primary Immunodeficiency, Autoimmune Disorders",
      "Hemostasis and Related Disorders → Thrombosis, Embolism",
    ],
  },
  {
    platform: "Pixo",
    scope: "Toxicities only",
    items: [
      "Toxicology — cyanide, methanol, ethylene glycol, carbon monoxide",
      "Organophosphates, fire-related toxicity, toxic alcohols",
    ],
    note: "BootCamp doesn't cover these. Pixo is optional here — the custom card deck below is the better fill for this gap, with 205 cards across heavy metals, alcohols, and environmental toxicity.",
  },
];

const IB2_CUSTOM_DECKS = [
  { name: "PATH", count: 271 },
  { name: "Pharm → Extra", count: 63 },
];

const IB2_ULTRA_HY = [
  { name: "Heavy Metals", count: 130 },
  { name: "Anesthetics", count: 74 },
  { name: "Opioids", count: 51 },
  { name: "Alcohols", count: 47 },
  { name: "Non-Opioids", count: 44 },
  { name: "Environmental Toxicity", count: 28 },
  { name: "Integrative Deck", count: 23 },
];

const IB2_CHECKLIST_ITEMS = [
  { id: "bc-msk-pharm", text: "BootCamp MSK → Pharmacology: Arachidonic Acid, Acetaminophen, NSAIDs, Aspirin & Celecoxib, TNF-alpha Inhibitors + Monoclonal Antibodies" },
  { id: "bc-rheum", text: "BootCamp MSK → Rheumatologic Diseases: SLE, Sjögren, Antiphospholipid, Scleroderma & MCTD (skip RA)" },
  { id: "bc-opioids", text: "BootCamp Psych → Substance Abuse: Opioids, Opioid Classification" },
  { id: "bc-immunosupp", text: "BootCamp Immunology → Transplant Rejection: Immunosuppressants (the rest of the section is IB1 review)" },
  { id: "bc-pulm", text: "BootCamp Lung Pathology Special Topics: DVT/PE, Pulmonary Edema, Pleural Effusion, ARDS and NRDS (skip Pulm HTN + Pneumothorax)" },
  { id: "bc-renal", text: "BootCamp Kidney Injury: Overview, Prerenal, Intrarenal, Postrenal, AKI Summary, ATN" },
  { id: "bc-shock", text: "BootCamp Cardiology → Shock: the entire section" },
  { id: "bc-dic", text: "BootCamp Heme/Onc → Coagulation and Fibrinolysis: DIC" },
  { id: "bc-lead", text: "BootCamp Heme/Onc → Microcytic Anemia: Lead Toxicity" },
  { id: "bc-toxins", text: "BootCamp Micro → Bacterial Toxins: Endotoxin Mechanisms and Associations, Gram Negative Sepsis" },
  { id: "sketchy", text: "Sketchy: Opioids/Naloxone/Naltrexone + IV Anesthetics, Inhaled Anesthetics & Dantrolene, Local Anesthetics" },
  { id: "bnb", text: "Boards and Beyond: the complete anesthesia section" },
  { id: "pathoma", text: "Pathoma: Primary Immunodeficiency, Autoimmune Disorders, Thrombosis, Embolism" },
  { id: "custom-cards", text: "Import the IB2 Custom Cards deck (731 cards) and unsuspend alongside AnKing" },
  { id: "anki-unsuspend", text: "Unsuspend the matching AnKing cards for every video as you finish it — not in one batch at the end" },
  { id: "daily-anki", text: "Daily Anki reviews — no exceptions, no pile-up" },
  { id: "qbank-week", text: "Final week: suspend new cards, stop new content, grind UWorld + Rx in tutor mode" },
];

function VideoBadge({ status, note }) {
  if (!status) return null;
  const styles = {
    optional: "bg-slate-100 text-slate-500",
    skip: "bg-rose-50 text-rose-600",
    hy: "bg-teal-50 text-teal-700",
  };
  const labels = { optional: "optional", skip: "skip", hy: "high yield" };
  return (
    <span className={`ml-2 text-[11px] font-semibold px-1.5 py-0.5 rounded ${styles[status]}`}>
      {labels[status]}
      {note ? ` · ${note}` : ""}
    </span>
  );
}

function IB2() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Block 2 of 10</p>
        <h1 className="text-3xl font-bold text-navy-900 mt-1">
          IB2 — Pathology Escalation + Pharm Escalation
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          This is the block where the same topic starts existing in BootCamp{" "}
          <span className="italic">and</span> Sketchy <span className="italic">and</span> Pixo{" "}
          <span className="italic">and</span> Pathoma. You do not watch all four. BootCamp is the spine; everything
          below it is listed because it fills a specific gap. Run it through the{" "}
          <a href="#/global-method" className="text-teal-600 underline hover:text-teal-700">
            5-step method
          </a>{" "}
          exactly as described on The Method page.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <span className="font-semibold text-navy-900">Step 1 connection:</span> Shock hemodynamics, AKI
          classification, DIC, and the transplant rejection timeline are recurring Step 1 question stems — not
          trivia. NSAID and acetaminophen mechanisms show up constantly. This block also front-loads a lot of Pulm,
          Renal, and Cardio, which makes those later blocks noticeably lighter.
        </p>
      </div>

      {/* Resource philosophy */}
      <Collapsible
        title="Read This First — Four Resources, One Topic"
        subtitle="How to choose from here on out"
        defaultOpen
        tone="navy"
      >
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">BootCamp always.</span> That's the spine. Everything else
            is a complement.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Add one visual resource</span> — Sketchy or Pixo, whichever
            you actually like. Don't do both.
          </li>
          <li>
            <span className="font-semibold text-navy-900">If you're not a visual learner,</span> BootCamp + Anki is a
            complete plan. You are not missing anything.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Sketchy for IB2 is deliberately narrow.</span> Only opioids
            and anesthetics. The rest exists — search it if you use Sketchy — but it isn't required here.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Pixo is here for one reason:</span> the toxicology content
            BootCamp doesn't cover.
          </li>
        </ul>
        <p className="text-sm text-slate-600 mt-3">
          Watching Sketchy during the block saves real time in Dedicated. Don't plan on watching new videos in
          Dedicated — only re-watch what you've already seen.
        </p>
      </Collapsible>

      {/* IB1 carryover */}
      <Collapsible
        title="Already Covered in IB1"
        subtitle="Marked optional throughout — re-review, don't re-watch"
        defaultOpen
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          Three chunks of IB2 are content you already watched. They're tagged{" "}
          <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">optional</span>{" "}
          in the video list below. Your Anki cards for them are already unsuspended — let the reviews do the work
          instead of spending hours re-watching.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-navy-900">Hypersensitivities</span> — the full Type I–IV section plus
            Summary.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Transplant Rejection</span> — Princ	ples through Summary.
            Only <span className="font-semibold">Immunosuppressants</span> is new.
          </li>
          <li>
            <span className="font-semibold text-navy-900">Side Effects and Toxins</span> — all five videos, same as
            IB1 Pharm Foundations Chapter 4.
          </li>
        </ul>
        <p className="text-sm text-slate-600 mt-3">
          If you fell behind in IB1 and never actually watched these, watch them now — they're on the IB2 exam either
          way.
        </p>
      </Collapsible>

      {/* BootCamp by chapter */}
      <Collapsible
        title="BootCamp — Chapter by Chapter"
        subtitle="The spine of this block, in video order"
        defaultOpen
        tone="navy"
      >
        <p className="text-sm text-slate-600 mb-4">
          IB2 pulls from eleven different BootCamp chapters. Watch the videos listed under each; anything marked{" "}
          <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-rose-50 text-rose-600">skip</span> is
          not required for this block.
        </p>
        <div className="space-y-5">
          {IB2_BOOTCAMP.map((group) => (
            <div key={group.chapter}>
              <h4 className="font-semibold text-navy-800">{group.chapter}</h4>
              <p className="text-xs text-slate-500 mb-1.5">{group.lecture}</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {group.videos.map((v) => (
                  <li key={v.title} className="flex flex-wrap items-baseline">
                    <span
                      className={
                        v.status === "skip" || v.status === "optional"
                          ? "text-slate-400"
                          : "text-navy-900 font-medium"
                      }
                    >
                      {v.title}
                    </span>
                    {v.time ? <span className="ml-2 text-xs text-slate-400">{v.time}</span> : null}
                    <VideoBadge status={v.status} note={v.note} />
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

      {/* Everything else */}
      <Collapsible
        title="Sketchy, Boards and Beyond, Pathoma, Pixo"
        subtitle="Specific and narrow — only what fills a gap"
        defaultOpen
        tone="teal"
      >
        <div className="space-y-5">
          {IB2_OTHER_RESOURCES.map((r) => (
            <div key={r.platform}>
              <h4 className="font-semibold text-navy-800">
                {r.platform}{" "}
                <span className="font-normal text-xs text-slate-500">— {r.scope}</span>
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mt-1">
                {r.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {r.note ? <p className="text-xs text-slate-500 mt-1.5 italic">{r.note}</p> : null}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <h4 className="font-semibold text-navy-800 mb-1 text-sm">Boards and Beyond — anesthesia links</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
            <li>
              <a
                href="https://exchange.scholarrx.com/brick/general-anesthetics"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 underline hover:text-teal-700"
              >
                ScholarRx brick — General Anesthetics
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/URtm1e6R2yQ"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 underline hover:text-teal-700"
              >
                General + Localized Anesthesia (video 1)
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/LMo77VkfSP8"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 underline hover:text-teal-700"
              >
                General + Localized Anesthesia (video 2)
              </a>
            </li>
          </ul>
        </div>
      </Collapsible>

      {/* AnKing tags */}
      <Collapsible
        title="AnKing Tags"
        subtitle="Unsuspend per video as you go"
        badge="TBD"
        tone="default"
      >
        <p className="text-sm text-slate-600 mb-3">
          Same rule as IB1: unsuspend the matching AnKing cards for each video the day you watch it, never in one
          batch at the end. IB2 pulls from eleven BootCamp chapters, so the tag list is longer and more scattered.
        </p>
        <p className="text-sm text-slate-600">
          Exact tag strings and card counts still need pulling from the Anki browser — send screenshots the same way
          you did for IB1 and this section gets built out.
        </p>
      </Collapsible>

      {/* Qbank filters */}
      <Collapsible
        title="Qbank Filters"
        subtitle="Final week — UWorld + Rx, in tutor mode"
        badge="TBD"
        tone="default"
      >
        <p className="text-sm text-slate-600">
          Same structure as IB1: this is the final-week grind (Step 6), not something you run throughout the block.
          Filter screenshots needed to fill this in.
        </p>
      </Collapsible>

      {/* Custom cards */}
      <Collapsible
        title="Custom High-Yield Cards"
        subtitle="Enrique's additional cards for this block — 731 cards across Path and Pharm"
        tone="teal"
      >
        <p className="text-sm text-slate-600 mb-3">
          The extra layer on top of AnKing — cards built from lecture, BootCamp, and Qbank misses. Import the deck
          below; it lands as{" "}
          <code className="text-xs bg-slate-100 px-1 py-0.5 rounded break-all">MS2::HY Enrique's Custom Cards::IB2</code>{" "}
          with subdecks already organized. Unsuspend and study these alongside your AnKing reviews — don't treat them
          as a separate pile.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-3">
          {IB2_CUSTOM_DECKS.map((d) => (
            <li key={d.name}>
              <span className="font-semibold text-navy-900">{d.name}</span> — {d.count} cards
            </li>
          ))}
          <li>
            <span className="font-semibold text-navy-900">Pharm → Ultra HY Pharm IB2</span> — 397 cards across seven
            subdecks:
            <ul className="list-disc pl-5 mt-1 space-y-0.5">
              {IB2_ULTRA_HY.map((d) => (
                <li key={d.name}>
                  {d.name} ({d.count})
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <p className="text-sm text-slate-600 mb-3">
          <span className="font-semibold text-navy-900">Worth noticing:</span> Heavy Metals, Alcohols, and
          Environmental Toxicity add up to 205 cards. That's exactly the toxicology material BootCamp doesn't cover.
          If you were planning to skip that gap, don't — this deck is where it lives.
        </p>
        <a
          href="https://github.com/enriqueortizmontellano-crypto/MS2Blueprint/releases/download/decks/IB2-HY-Custom-Cards.apkg"
          target="_blank"
          rel="noreferrer"
          className="text-teal-600 underline hover:text-teal-700 text-sm font-semibold"
        >
          Download IB2 Custom Cards (.apkg, 731 cards)
        </a>
      </Collapsible>

      {/* Final week resources */}
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
          and covers every block — you only need to import it once. Which HY PDFs apply to IB2 still needs
          confirming.
        </p>
      </Collapsible>

      {/* Checklist */}
      <Checklist storageKey="ib2" title="IB2 Execution Checklist" items={IB2_CHECKLIST_ITEMS} />
    </div>
  );
}

const PHILOSOPHY = [
  {
    title: "There are no class divisions",
    body: "MS1 and MS2 content are one integrated curriculum. Stop thinking in terms of \"MS1 material\" vs \"MS2 material\" — it's all just medicine. When you filter cardiology questions in AMBOSS, you automatically pull in the anatomy, physiology, histology, and biochem that go with it. It's already integrated. Study it that way.",
  },
  {
    title: "The video platform is a personal choice",
    body: "BootCamp, BnB, Pixo — whatever you use to first absorb content is just delivery. What's non-negotiable is the Anki and the practice questions. Don't waste energy debating which video resource is \"best.\" Pick one, move on, and put your energy into the parts of the method that actually move the needle.",
  },
  {
    title: "Daily Anki reviews are the backbone",
    body: "Miss your daily reviews and the whole method breaks down. This is the one piece with zero flexibility. Everything else — videos, Qbanks, custom cards — supports the Anki engine. If you only have 20 minutes today, those 20 minutes go to Anki.",
  },
  {
    title: "The Qbanks are where the exam lives",
    body: "Less than 4% of what shows up on a block exam will be something you've truly never seen. Everything else has already crossed your path at least twice — once in Anki, once in BootCamp, once in a Qbank. That's not a coincidence, that's the design. If you've done the method, the exam should feel familiar, not novel.",
  },
  {
    title: "Pharmacology is integrated by system, not siloed",
    body: "During the cardiology block, you do cardiovascular pharm — not a separate \"pharm unit\" bolted on afterward. Do the system-specific pharm for the block as part of this same process, as you go — don't leave it for the professor's pharm study guide at the end. The study guide alone can get you an A on the block exam. It will not build the pharm foundation Step 1 needs, and that foundation is the actual point of this whole method. Do pharm through the method as you go, and the study guide stops being your safety net and becomes a bonus pass on top of material you already know — that's the combination that gets you the A on the block and the Step 1 payoff later.",
  },
  {
    title: "Cover everything, even what's not on the block exam",
    body: "Anatomy, histology, embryology, physiology — all of it, every block, regardless of whether your professors test it directly. This is the single biggest differentiator of this method. Block exams are short-term. Step 1 is the long game, and this is how you build it without a separate \"Step 1 prep\" phase later.",
  },
  {
    title: "This guide tells you what to do, not what to like",
    body: "You don't have to enjoy Anki. You don't have to love BootCamp over BnB. The method doesn't care about your preferences — it cares about execution. Do the steps, in order, every day, and the outcome takes care of itself.",
  },
];

const METHOD_STEPS = [
  {
    n: 1,
    title: "Watch content",
    summary: "BootCamp (or your equivalent) for the block. Pathoma for path-heavy blocks. Sketchy for IB3/IB4 micro.",
    body: (
      <div className="space-y-3">
        <p>
          Watch BootCamp videos for whatever block you're in. This is your first pass — the goal is exposure and a framework,
          not mastery. You will not remember most of this on first watch, and that's fine. That's what Anki and Qbanks are for.
        </p>
        <p>
          <strong>Pathoma:</strong> use it for pathology-heavy blocks (specified per block). It's dense and efficient — don't
          skip it where it's called for.
        </p>
        <p>
          <strong>Sketchy:</strong> for the micro-heavy blocks (IB3 — bacteria/antifungals, IB4 — viruses), watch all of
          Sketchy Micro. This is the one place Sketchy is mandatory in this method. Outside of micro, Sketchy is optional and
          lower priority — don't let it eat time that should go to Qbanks and Anki.
        </p>
        <p>
          <strong>Pharm:</strong> BootCamp only. Sketchy Pharm is optional and not part of the core method — if you have extra
          time and like the format, fine, but it's not where your time should default to.
        </p>
      </div>
    ),
  },
  {
    n: 2,
    title: "Unsuspend AnKing cards",
    summary: "Unsuspend the relevant AnKing tags as you go — don't dump the whole deck at once.",
    body: (
      <div className="space-y-3">
        <p>
          As you move through content for a block, unsuspend the matching AnKing tags. Minimum: the tags that correspond to
          the BootCamp and Sketchy content you just watched. If you're also doing Pathoma for that block, add the Pathoma
          tags too.
        </p>
        <p>
          <strong>Do this incrementally.</strong> Unsuspending the entire AnKing deck on day one buries you in reviews you're
          not ready for and kills your consistency before it starts. Match your unsuspended cards to what you've actually
          covered.
        </p>
        <p className="text-sm text-slate-500">Block-specific tag lists will be listed on each block's page.</p>
      </div>
    ),
  },
  {
    n: 3,
    title: "Add custom cards",
    summary: "Layer in Enrique's high-yield custom cards for the block.",
    body: (
      <div className="space-y-3">
        <p>
          On top of AnKing, add the custom high-yield cards built for each block — these cover gaps AnKing doesn't, and
          things that show up repeatedly on UPR exams specifically.
        </p>
        <p className="text-sm text-slate-500">Access instructions for custom decks will be provided on each block's page.</p>
      </div>
    ),
  },
  {
    n: 4,
    title: "Daily Anki reviews — no exceptions",
    summary: "Every review, every day. Do not let the pile build up.",
    body: (
      <div className="space-y-3">
        <p>
          This is the step that makes or breaks everything else. Do every review that comes up, every single day. Not "most
          days." Not "I'll catch up this weekend." Every day.
        </p>
        <p>
          A backlog of 400 overdue cards is demoralizing and makes you want to quit the whole system — which is exactly how
          people abandon Anki. Protect this daily habit above almost everything else in your schedule. If your day is a
          disaster, you can still do reviews on your phone between things.
        </p>
      </div>
    ),
  },
  {
    n: 5,
    title: "Final week — Qbank-driven review",
    summary: "Suspend everything, grind AMBOSS + UWorld + Rx in tutor mode, and let your weak spots set the Anki agenda.",
    body: (
      <div className="space-y-3">
        <p>
          Be honest about time: during the block, content (Step 1) and daily Anki (Step 4) already eat almost all of your
          study time. Qbank practice doesn't realistically happen "throughout the block" — it's concentrated in the final
          week before the exam, and that's by design, not a failure to keep up.
        </p>
        <p>
          About 7 days out, the mode flips from content-acquisition to Qbank-driven review. Step by step:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Day 7 — suspend everything and stop new content.</strong> Suspend all new Anki cards (no more new cards
            from this block) and stop watching new BootCamp/Sketchy/Pathoma. Content acquisition for this block is done.
          </li>
          <li>
            <strong>Grind Qbanks — Rx, UWorld, AMBOSS, always in tutor mode.</strong> This is now where most of your study
            time goes, for the rest of the week. Tutor mode the whole time — you want the explanation immediately, while
            it's still fresh enough to connect back to content and Anki.
          </li>
          <li>
            <strong>Let the Qbanks drive your Anki.</strong> The only cards you unsuspend or add from here on are the ones
            tied to questions you got wrong or flagged. Your total Anki workload should actually go <em>down</em> this week —
            but what's left is now hyper-targeted at your real weak spots, identified by the Qbanks themselves, not a generic
            review of everything.
          </li>
          <li>
            <strong>Last 1–2 days — Mehlman's PDFs + Anki.</strong> Read through Mehlman's high-yield PDFs for the block and
            do the matching Mehlman Anki cards. This is the final review layer: fast, dense, high-yield, and a good
            last-minute gut-check for anything still shaky.
          </li>
        </ol>
        <p>
          If the block has a professor-provided pharmacology study guide, this final week is also when a quick sweep of it
          makes sense — but only as a bonus pass on top of pharm you already covered through the method (see Philosophy
          point 5), not as your primary pharm prep.
        </p>
        <p>
          This week is about consolidation and exam-specific pattern recognition, not learning new material. If you're
          learning something brand new four days before the exam, that's a signal the earlier steps slipped — not a reason
          to cram harder.
        </p>
      </div>
    ),
  },
];

const RESOURCE_TABLE = [
  {
    block: "IB1 + IB2",
    desc: "Immunology foundations, intro pathology, pharm foundations & escalation",
    rows: {
      BootCamp: "Yes — all relevant videos",
      Pathoma: "Yes",
      Sketchy: "No",
      "Sketchy Pharm": "No",
      "BnB / Pixo": "No",
    },
  },
  {
    block: "IB3 + IB4",
    desc: "All bacteria, antibiotics, antifungals, mycology, viruses, antivirals, autonomic pharm, neoplasia",
    rows: {
      BootCamp: "Yes",
      Pathoma: "Yes, where relevant",
      Sketchy: "YES — all micro content (bacteria, fungi, viruses). The one exception.",
      "Sketchy Pharm": "No — BootCamp only for pharm",
      "BnB / Pixo": "No (some classmates used BnB for micro basics — not Enrique's path)",
    },
  },
  {
    block: "Systems blocks (Pulm/Renal onward)",
    desc: "Pulm+Renal, Cardio, GI, Endo+Repro, Derm+MSK, Neuro+Heme/Onc",
    rows: {
      BootCamp: "To be filled in block by block",
      Pathoma: "To be filled in block by block",
      Sketchy: "To be filled in block by block",
      "Sketchy Pharm": "To be filled in block by block",
      "BnB / Pixo": "To be filled in block by block",
    },
    pending: true,
  },
];

const BLOCK_SEQUENCE = [
  { n: 1, label: "Intro Block 1 (IB1)", desc: "Immunology foundations + Intro Pathology + Pharm foundations (PK/PD)" },
  { n: 2, label: "Intro Block 2 (IB2)", desc: "Pathology escalation + Pharm escalation (NSAIDs, opioids, anesthetics, immunosuppressants)" },
  { n: 3, label: "Intro Block 3 (IB3)", desc: "All bacteria + antibiotics + antifungals + mycology" },
  { n: 4, label: "Intro Block 4 (IB4)", desc: "All viruses + antivirals + autonomic pharm + neoplasia + cancer chemo" },
  { n: 5, label: "Pulmonary + Renal", desc: "Systems block" },
  { n: 6, label: "Cardiology", desc: "Systems block" },
  { n: 7, label: "Gastroenterology (GI)", desc: "Systems block" },
  { n: 8, label: "Endocrinology + Reproductive", desc: "Systems block" },
  { n: 9, label: "Dermatology + MSK", desc: "Systems block" },
  { n: 10, label: "Neurology + Hematology/Oncology", desc: "Systems block" },
  { n: "★", label: "Step 1 Integration", desc: "Pulling the whole curriculum together for dedicated" },
];

const SETUP_CHECKLIST_ITEMS = [
  { id: "anking", text: "AnKing deck installed and ready (cards suspended by default)" },
  { id: "qbanks", text: "Active access to AMBOSS, UWorld, and Rx (ScholarRx)" },
  { id: "video", text: "Picked your video platform (BootCamp / BnB / Pixo) and committed — stop comparing" },
  { id: "pathoma", text: "Pathoma available for path-heavy blocks" },
  { id: "sketchy", text: "Sketchy Micro ready for IB3/IB4 (not needed before that)" },
  { id: "schedule", text: "Daily Anki review time blocked into your schedule, non-negotiable" },
];

function GlobalMethod() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2">The Global Method</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          How to actually run MS2 — the system, not the vibes
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          This page is the foundation for every block in this guide. It's the exact method used to hit a 4.0 in MS2, strong
          shelf and comprehensive exam performance, and a Step 1 foundation that's solid going into dedicated.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Read this page once, fully, before your first block. Then come back to it whenever you feel like you're drifting —
          almost every "I'm behind and don't know why" moment traces back to one of the seven points below.
        </p>
      </div>

      {/* Core Philosophy */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Read this first: Core Philosophy</h2>
        <p className="text-slate-500 mb-4">Seven non-negotiables. Everything else in this guide builds on these.</p>
        <div className="space-y-3">
          {PHILOSOPHY.map((p, i) => (
            <Collapsible key={p.title} title={`${i + 1}. ${p.title}`} defaultOpen={i === 0} tone="teal">
              <p>{p.body}</p>
            </Collapsible>
          ))}
        </div>
      </section>

      {/* Core Method */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-1">The Core Method — 5 Steps, Every Block</h2>
        <p className="text-slate-500 mb-4">
          This exact sequence repeats for every block. Block pages add specifics (which tags, which filters, which decks) —
          the structure underneath never changes.
        </p>
        <div className="space-y-3">
          {METHOD_STEPS.map((step) => (
            <Collapsible
              key={step.n}
              title={`Step ${step.n} — ${step.title}`}
              subtitle={step.summary}
            >
              {step.body}
            </Collapsible>
          ))}
        </div>
      </section>

      {/* Resource Map */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Resource Map by Block Type</h2>
        <p className="text-slate-500 mb-4">
          What gets used where. Sketchy is the one resource that toggles on and off depending on the block — everything else
          is consistent.
        </p>
        <div className="space-y-4">
          {RESOURCE_TABLE.map((block) => (
            <div key={block.block} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <div className="px-4 sm:px-5 py-3 bg-navy-900">
                <h3 className="font-semibold text-white">{block.block}</h3>
                <p className="text-xs text-slate-300 mt-0.5">{block.desc}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {Object.entries(block.rows).map(([resource, value]) => (
                  <div key={resource} className="flex items-start gap-4 px-4 sm:px-5 py-2.5 text-sm">
                    <span className="w-32 sm:w-36 shrink-0 font-medium text-slate-700">{resource}</span>
                    <span className={`flex-1 ${block.pending ? "text-slate-400 italic" : "text-slate-600"}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Block Sequence */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-1">The Block Sequence</h2>
        <p className="text-slate-500 mb-4">
          The order MS2 runs in at UPR. Each block gets its own page in this guide as it's built — content overview, what to
          watch, AnKing tags, Qbank filters, custom card access, block-specific tips, and a Step 1 connection note.
        </p>
        <ol className="space-y-2">
          {BLOCK_SEQUENCE.map((b) => (
            <li key={b.n} className="flex items-center gap-3 sm:gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3">
              <span className="w-8 h-8 rounded-full bg-navy-900 text-white text-sm font-bold flex items-center justify-center shrink-0">
                {b.n}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-slate-900 text-sm sm:text-base leading-tight">{b.label}</p>
                <p className="text-xs sm:text-sm text-slate-500">{b.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Setup checklist */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Before You Start</h2>
        <p className="text-slate-500 mb-4">
          One-time setup. Get these in place before IB1 starts so the method runs without friction from day one.
        </p>
        <Checklist storageKey="global-setup" title="Setup checklist" items={SETUP_CHECKLIST_ITEMS} />
      </section>
    </div>
  );
}

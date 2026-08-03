// Placeholder shown for any block page not yet built.
function BlockPage({ blockId }) {
  const page = ALL_PAGES.find((p) => p.id === blockId);
  const label = page ? page.label : blockId;

  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-400 mb-4">
        <LockIcon className="w-5 h-5" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">{label}</h1>
      <p className="text-slate-500">
        This section hasn't been built yet. We're going block by block — check back once it's live.
      </p>
      <a href="#/global-method" className="inline-block mt-6 text-teal-600 font-semibold hover:text-teal-700">
        ← Back to the Global Method
      </a>
    </div>
  );
}

// Persisted checklist. `storageKey` must be unique per checklist on the site
// (e.g. "global-method-setup"). Progress is saved in localStorage so it
// survives reloads.
function Checklist({ storageKey, items, title }) {
  const fullKey = `ms2-guide:${storageKey}`;
  const [checked, setChecked] = React.useState(() => {
    try {
      const saved = localStorage.getItem(fullKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(fullKey, JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const total = items.length;
  const done = items.filter((it) => checked[it.id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3">
        {title && <h4 className="font-semibold text-slate-900">{title}</h4>}
        <span className="text-sm font-medium text-slate-500">
          {done}/{total} done
        </span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-start gap-3 text-left group"
            >
              <span
                className={`mt-0.5 shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                  checked[item.id]
                    ? "bg-teal-600 border-teal-600 text-white"
                    : "border-slate-300 text-transparent group-hover:border-teal-400"
                }`}
              >
                <CheckIcon className="w-3 h-3" />
              </span>
              <span className={`text-sm sm:text-[15px] ${checked[item.id] ? "text-slate-400 line-through" : "text-slate-700"}`}>
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

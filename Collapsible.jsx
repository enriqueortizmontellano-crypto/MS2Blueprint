// A simple collapsible/expandable section.
// `defaultOpen` controls initial state. `tone` lightly tints the header.
function Collapsible({ title, subtitle, defaultOpen = false, tone = "default", children, badge }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const contentRef = React.useRef(null);
  const [maxHeight, setMaxHeight] = React.useState(defaultOpen ? "none" : "0px");

  React.useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      setMaxHeight(contentRef.current.scrollHeight + "px");
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  const toneClasses = {
    default: "border-slate-200 bg-white",
    teal: "border-teal-100 bg-teal-50/40",
    navy: "border-navy-700/10 bg-navy-900/[0.02]",
  }[tone];

  return (
    <div className={`rounded-xl border ${toneClasses} overflow-hidden`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4 text-left hover:bg-slate-50/80 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-900 text-base sm:text-lg">{title}</h3>
            {badge && (
              <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-teal-600 text-white">
                {badge}
              </span>
            )}
          </div>
          {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div ref={contentRef} className="collapse-content" style={{ maxHeight }}>
        <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

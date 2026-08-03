function NavLink({ item, currentPath, onClick }) {
  const active = currentPath === item.path;
  const locked = item.status === "locked";

  return (
    <a
      href={locked ? undefined : item.path}
      onClick={(e) => {
        if (locked) {
          e.preventDefault();
          return;
        }
        onClick && onClick();
      }}
      className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-teal-500/15 text-teal-300 font-semibold"
          : locked
          ? "text-slate-500 cursor-not-allowed"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className="leading-snug">{item.label}</span>
      {locked && <LockIcon className="w-3.5 h-3.5 shrink-0 text-slate-500" />}
    </a>
  );
}

function SidebarContent({ currentPath, onNavigate }) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-6 pb-4">
        <p className="text-[11px] uppercase tracking-widest text-teal-400 font-bold">UPR SOM · Class of 2028</p>
        <h1 className="text-lg font-bold text-white mt-1 leading-tight">MS2 Blueprint</h1>
        <p className="text-xs text-slate-400 mt-1">Built by Enrique Ortiz de Montellano Rubio</p>
      </div>
      <nav className="flex-1 overflow-y-auto sidebar-scroll px-3 pb-6 space-y-5">
        {NAV_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="px-3 text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1.5">{section.title}</p>
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavLink key={item.id} item={item} currentPath={currentPath} onClick={onNavigate} />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

function Layout({ currentPath, onNavigate, children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const results = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return ALL_PAGES.filter((p) => p.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-72 shrink-0 bg-navy-900 sticky top-0 h-screen">
        <SidebarContent currentPath={currentPath} onNavigate={onNavigate} />
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-navy-900">
            <button className="absolute top-4 right-4 text-slate-300" onClick={() => setMobileOpen(false)}>
              <XIcon />
            </button>
            <SidebarContent currentPath={currentPath} onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
          <div className="flex items-center gap-3 px-4 sm:px-6 py-3">
            <button className="lg:hidden text-slate-600" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </button>
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400"
              />
              {results.length > 0 && (
                <div className="absolute mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50">
                  {results.map((r) => (
                    <a
                      key={r.id}
                      href={r.status === "locked" ? undefined : r.path}
                      onClick={(e) => {
                        if (r.status === "locked") {
                          e.preventDefault();
                          return;
                        }
                        setQuery("");
                        onNavigate();
                      }}
                      className={`flex items-center justify-between gap-2 px-3 py-2 text-sm border-b border-slate-100 last:border-b-0 ${
                        r.status === "locked" ? "text-slate-400 cursor-not-allowed" : "text-slate-700 hover:bg-teal-50"
                      }`}
                    >
                      <span>{r.label}</span>
                      {r.status === "locked" && <LockIcon className="w-3.5 h-3.5 shrink-0" />}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 sm:py-10 max-w-4xl w-full mx-auto">{children}</main>

        <footer className="px-4 sm:px-6 lg:px-10 py-6 text-center text-xs text-slate-400 border-t border-slate-100">
          UPR SOM MS2 Blueprint — built section by section. Content and method by Enrique Ortiz de Montellano Rubio.
        </footer>
      </div>
    </div>
  );
}

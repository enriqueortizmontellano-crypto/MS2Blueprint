function getPath() {
  return window.location.hash || "#/global-method";
}

function App() {
  const [path, setPath] = React.useState(getPath());

  React.useEffect(() => {
    const onHashChange = () => {
      setPath(getPath());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) {
      window.location.hash = "#/global-method";
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  let content;
  if (path === "#/global-method") {
    content = <GlobalMethod />;
  } else if (path === "#/block/ib1") {
    content = <IB1 />;
  } else if (path.startsWith("#/block/")) {
    content = <BlockPage blockId={path.replace("#/block/", "")} />;
  } else {
    content = <GlobalMethod />;
  }

  return (
    <Layout currentPath={path} onNavigate={() => setPath(getPath())}>
      {content}
    </Layout>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

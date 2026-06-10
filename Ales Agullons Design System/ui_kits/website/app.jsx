/* Ales Agullons website — app router */
function App() {
  const [view, setView] = React.useState({ screen: "home", beerId: null });
  const top = () => window.scrollTo({ top: 0, left: 0 });
  const nav = (screen) => { setView({ screen, beerId: null }); top(); };
  const select = (beerId) => { setView({ screen: "detail", beerId }); top(); };

  let body;
  if (view.screen === "home") body = <HomeScreen onNav={nav} onSelect={select} />;
  else if (view.screen === "beers") body = <BeersScreen onSelect={select} />;
  else if (view.screen === "historia") body = <HistoriaScreen onNav={nav} />;
  else if (view.screen === "detail") body = <BeerDetailScreen beerId={view.beerId} onBack={() => nav("beers")} onSelect={select} />;

  const current = view.screen === "detail" ? "beers" : view.screen;
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header current={current} onNav={nav} />
      <main style={{ flex: 1 }}>{body}</main>
      <Footer onNav={nav} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

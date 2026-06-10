import { useEffect, useState } from "react";
import { Header } from "./components/site/Header.tsx";
import { Footer } from "./components/site/Footer.tsx";
import { HomeScreen } from "./screens/Home.tsx";
import { BeersScreen } from "./screens/Beers.tsx";
import { BeerDetailScreen } from "./screens/BeerDetail.tsx";
import { HistoriaScreen } from "./screens/Historia.tsx";

export type Screen = "home" | "beers" | "historia";

interface View {
  screen: Screen | "detail";
  beerId: string | null;
}

const SCREEN_HASHES: Record<Screen, string> = {
  home: "#/",
  beers: "#/cerveses",
  historia: "#/historia",
};

function parseHash(hash: string): View {
  const detail = hash.match(/^#\/cervesa\/([\w-]+)$/);
  if (detail?.[1]) return { screen: "detail", beerId: detail[1] };
  if (hash === SCREEN_HASHES.beers) return { screen: "beers", beerId: null };
  if (hash === SCREEN_HASHES.historia) return { screen: "historia", beerId: null };
  return { screen: "home", beerId: null };
}

export function App() {
  const [view, setView] = useState<View>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setView(parseHash(window.location.hash));
      window.scrollTo({ top: 0, left: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const nav = (screen: Screen) => {
    window.location.hash = SCREEN_HASHES[screen];
  };
  const select = (beerId: string) => {
    window.location.hash = `#/cervesa/${beerId}`;
  };

  let body;
  if (view.screen === "home") body = <HomeScreen onNav={nav} onSelect={select} />;
  else if (view.screen === "beers") body = <BeersScreen onSelect={select} />;
  else if (view.screen === "historia") body = <HistoriaScreen onNav={nav} />;
  else body = <BeerDetailScreen beerId={view.beerId ?? ""} onBack={() => nav("beers")} onSelect={select} />;

  const current: Screen = view.screen === "detail" ? "beers" : view.screen;
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header current={current} onNav={nav} />
      <main style={{ flex: 1 }}>{body}</main>
      <Footer onNav={nav} />
    </div>
  );
}

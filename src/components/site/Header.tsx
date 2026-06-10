import { Button } from "../ds/Button.tsx";
import type { Screen } from "../../App.tsx";

export interface HeaderProps {
  current: Screen;
  onNav: (screen: Screen) => void;
}

export function Header({ current, onNav }: HeaderProps) {
  const items: Array<{ id: Screen; label: string }> = [
    { id: "home", label: "Inici" },
    { id: "beers", label: "Cerveses" },
    { id: "historia", label: "Història" },
  ];
  return (
    <header
      style={{
        background: "var(--paper-200)",
        borderBottom: "1.5px solid var(--line-soft)",
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}
    >
      <div
        className="wrap"
        style={{
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <button
          onClick={() => onNav("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img src="/LogoAgullons.svg" alt="Ales Agullons" style={{ height: 44, width: 44 }} />
          <span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-label)",
                fontSize: "10px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--ink-700)",
              }}
            >
              Ales
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: "26px",
                lineHeight: 0.9,
                color: "var(--ink-900)",
              }}
            >
              AGULLONS
            </span>
          </span>
        </button>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => onNav(it.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-label)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: current === it.id ? "var(--brand-accent)" : "var(--ink-700)",
                padding: "8px 12px",
                borderBottom: current === it.id ? "2px solid var(--brand-accent)" : "2px solid transparent",
              }}
            >
              {it.label}
            </button>
          ))}
          <span style={{ width: 1, height: 22, background: "var(--line-soft)", margin: "0 6px" }} />
          <Button size="sm" variant="outline" onClick={() => onNav("beers")}>
            Botiga
          </Button>
        </nav>
      </div>
    </header>
  );
}

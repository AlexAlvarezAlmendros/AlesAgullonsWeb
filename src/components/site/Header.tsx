import { useState } from "react";
import { Button } from "../ds/Button.tsx";
import type { Screen } from "../../App.tsx";

export interface HeaderProps {
  current: Screen;
  onNav: (screen: Screen) => void;
}

const NAV_ITEMS: Array<{ id: Screen; label: string }> = [
  { id: "home", label: "Inici" },
  { id: "beers", label: "Cerveses" },
  { id: "historia", label: "Història" },
];

function MenuIcon({ open }: { open: boolean }) {
  // Thin 1.5px line icon, in keeping with the letterpress register.
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      {open ? (
        <>
          <line x1="4" y1="4" x2="18" y2="18" />
          <line x1="18" y1="4" x2="4" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="19" y2="6" />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="16" x2="19" y2="16" />
        </>
      )}
    </svg>
  );
}

export function Header({ current, onNav }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (screen: Screen) => {
    setMenuOpen(false);
    onNav(screen);
  };

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <button
          onClick={() => go("home")}
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
          <img src="/LogoAgullons.svg" alt="Ales Agullons" style={{ height: 40, width: 40 }} />
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
                fontSize: "24px",
                lineHeight: 0.9,
                color: "var(--ink-900)",
              }}
            >
              AGULLONS
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Navegació principal">
          {NAV_ITEMS.map((it) => (
            <button key={it.id} onClick={() => go(it.id)} className={`nav-link${current === it.id ? " active" : ""}`}>
              {it.label}
            </button>
          ))}
          <span className="nav-divider" />
          <Button size="sm" variant="outline" onClick={() => go("beers")}>
            Botiga
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Tancar el menú" : "Obrir el menú"}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav id="mobile-menu" className="wrap nav-mobile" aria-label="Navegació principal">
          {NAV_ITEMS.map((it) => (
            <button key={it.id} onClick={() => go(it.id)} className={`nav-link${current === it.id ? " active" : ""}`}>
              {it.label}
            </button>
          ))}
          <div className="nav-mobile-cta">
            <Button size="md" variant="outline" fullWidth onClick={() => go("beers")}>
              Botiga
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

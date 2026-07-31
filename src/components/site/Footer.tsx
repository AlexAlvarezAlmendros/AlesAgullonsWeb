import type { Screen } from "../../App.tsx";

export interface FooterProps {
  onNav: (screen: Screen) => void;
}

export function Footer({ onNav }: FooterProps) {
  const links: Array<[Screen, string]> = [
    ["home", "Inici"],
    ["beers", "Cerveses"],
    ["historia", "Història"],
  ];
  return (
    <footer className="paper-grain" style={{ background: "var(--stout-900)", color: "var(--paper-300)", marginTop: "var(--space-9)" }}>
      <div className="wrap footer-grid" style={{ paddingTop: "clamp(40px, 7vw, 56px)", paddingBottom: 40 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--paper-100)" }}>Ales Agullons</div>
          <p
            style={{
              fontFamily: "var(--font-text)",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--paper-400)",
              maxWidth: 340,
              marginTop: 10,
            }}
          >
            Cervesa artesana i autèntica, elaborada a la masia de Sant Joan de Mediona, a l'Alt Penedès, des de 2008.
          </p>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--barley-400)",
              marginBottom: 14,
            }}
          >
            Navegació
          </div>
          {links.map(([id, label]) => (
            <div key={id}>
              <button
                onClick={() => onNav(id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--paper-300)",
                  fontFamily: "var(--font-text)",
                  fontSize: "15px",
                  padding: "5px 0",
                }}
              >
                {label}
              </button>
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--barley-400)",
              marginBottom: 14,
            }}
          >
            Contacte
          </div>
          <div style={{ fontFamily: "var(--font-spec)", fontSize: "13px", color: "var(--paper-300)", lineHeight: 1.9 }}>
            Masia Agullons S.L.
            <br />
            Sant Joan de Mediona
            <br />
            Alt Penedès
            <br />
            Tel. 649 50 50 33
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          padding: "16px 20px",
          textAlign: "center",
          fontFamily: "var(--font-spec)",
          fontSize: "11px",
          color: "var(--paper-500)",
        }}
      >
        © Masia Agullons · Beu amb moderació · CA · ES
        <br />
        Dissenyat i Desenvolupat per{" "}
        <a
          href="https://www.alexalvarez.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          alexalvarez.dev
        </a>
      </div>
    </footer>
  );
}

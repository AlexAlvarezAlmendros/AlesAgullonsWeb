/* Ales Agullons website — site chrome (header, footer, photo placeholder) */
const { Button: AgButton, Eyebrow: AgEyebrow } = window.AlesAgullonsDesignSystem_76dff6;

/* Warm toned placeholder where real photography goes. */
function PhotoSlot({ label, tone = "barley", height = 280, style }) {
  const grounds = {
    barley: "var(--barley-400)",
    brown: "var(--brown-700)",
    vine: "var(--vine-600)",
    stout: "var(--stout-900)",
    kraft: "var(--paper-400)",
  };
  const dark = tone === "brown" || tone === "stout" || tone === "vine";
  return (
    <div className="paper-grain" style={{
      background: grounds[tone] || grounds.barley,
      height, borderRadius: "var(--radius-md)",
      border: "1.5px solid rgba(42,27,16,0.25)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: dark ? "var(--paper-300)" : "var(--ink-700)",
      ...style,
    }}>
      <span style={{
        fontFamily: "var(--font-text)", fontStyle: "italic", fontSize: "14px",
        opacity: 0.8, textAlign: "center", padding: "0 16px",
      }}>{label || "Imatge"}</span>
    </div>
  );
}

function Header({ current, onNav }) {
  const items = [
    { id: "home", label: "Inici" },
    { id: "beers", label: "Cerveses" },
    { id: "historia", label: "Història" },
  ];
  return (
    <header style={{
      background: "var(--paper-200)", borderBottom: "1.5px solid var(--line-soft)",
      position: "sticky", top: 0, zIndex: 20,
    }}>
      <div style={{
        maxWidth: "var(--container-xl)", margin: "0 auto", padding: "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px",
      }}>
        <button onClick={() => onNav("home")} style={{
          background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0,
        }}>
          <div style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--ink-700)", marginLeft: "0.4em" }}>Ales</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: 0.9, color: "var(--ink-900)" }}>AGULLONS</div>
        </button>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {items.map((it) => (
            <button key={it.id} onClick={() => onNav(it.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: current === it.id ? "var(--brand-accent)" : "var(--ink-700)",
              padding: "8px 12px",
              borderBottom: current === it.id ? "2px solid var(--brand-accent)" : "2px solid transparent",
            }}>{it.label}</button>
          ))}
          <span style={{ width: 1, height: 22, background: "var(--line-soft)", margin: "0 6px" }} />
          <AgButton size="sm" variant="outline" onClick={() => onNav("beers")}>Botiga</AgButton>
        </nav>
      </div>
    </header>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="paper-grain" style={{ background: "var(--stout-900)", color: "var(--paper-300)", marginTop: "var(--space-9)" }}>
      <div style={{
        maxWidth: "var(--container-xl)", margin: "0 auto", padding: "56px 32px 40px",
        display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "40px",
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--paper-100)" }}>Ales Agullons</div>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "14px", lineHeight: 1.7, color: "var(--paper-400)", maxWidth: 340, marginTop: 10 }}>
            Cervesa artesana i autèntica, elaborada a la masia de Sant Joan de Mediona, a l'Alt Penedès, des de 2008.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--barley-400)", marginBottom: 14 }}>Navegació</div>
          {[["home","Inici"],["beers","Cerveses"],["historia","Història"]].map(([id,l]) => (
            <div key={id}><button onClick={() => onNav(id)} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--paper-300)", fontFamily:"var(--font-text)", fontSize:"15px", padding:"5px 0" }}>{l}</button></div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--barley-400)", marginBottom: 14 }}>Contacte</div>
          <div style={{ fontFamily: "var(--font-spec)", fontSize: "13px", color: "var(--paper-300)", lineHeight: 1.9 }}>
            Masia Agullons S.L.<br/>Sant Joan de Mediona<br/>Alt Penedès<br/>Tel. 649 50 50 33
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", padding: "16px 32px", textAlign: "center", fontFamily: "var(--font-spec)", fontSize: "11px", color: "var(--paper-500)" }}>
        © Masia Agullons · Beu amb moderació · CA · ES
      </div>
    </footer>
  );
}

Object.assign(window, { PhotoSlot, Header, Footer });

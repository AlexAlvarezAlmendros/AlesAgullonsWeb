/* Ales Agullons website — Història screen */
const { Eyebrow: HxEyebrow, Button: HxButton, Tag: HxTag } = window.AlesAgullonsDesignSystem_76dff6;
const _hxWrap = { maxWidth: "var(--container-md)", margin: "0 auto", padding: "0 32px" };

function HistoriaScreen({ onNav }) {
  const milestones = [
    ["2007", "Una idea a la masia", "Decidim recuperar el celler familiar, que abans feia vi, per elaborar-hi cervesa artesana."],
    ["2008", "Primera fornada", "Comencem a coure de manera experimental, aprenent pel carrer i a poc a poc."],
    ["2009", "Al mercat", "Les primeres ampolles d'Ales Agullons arriben a bars i botigues del Penedès."],
    ["Avui", "Temps i terra", "Seguim fent ales d'alta fermentació per infusió, amb edicions especials criades en bóta."],
  ];
  return (
    <div>
      <section className="paper-grain" style={{ background: "var(--paper-300)", borderBottom: "1.5px solid var(--line-soft)" }}>
        <div style={{ ..._hxWrap, padding: "72px 32px", textAlign: "center" }}>
          <HxEyebrow rules align="center">Història</HxEyebrow>
          <h1 style={{ fontSize: "56px", margin: "18px 0 14px" }}>Cervesa al cor del Penedès</h1>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "19px", lineHeight: 1.65, color: "var(--ink-700)", margin: "0 auto", maxWidth: 600 }}>
            Ales Agullons neix en una masia de Sant Joan de Mediona, envoltada de camps d'ordi
            i de vinya. Una manera de fer pausada, artesana i autèntica.
          </p>
        </div>
      </section>

      <section style={{ ..._hxWrap, padding: "64px 32px" }}>
        <PhotoSlot label="Foto: panoràmica de la masia i els camps" tone="vine" height={320} style={{ marginBottom: "48px" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {milestones.map(([year, title, body], i) => (
            <div key={year} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "28px", padding: "26px 0", borderTop: i === 0 ? "none" : "1px solid var(--line-faint)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--brand-deep)", lineHeight: 1 }}>{year}</div>
              <div>
                <h3 style={{ fontSize: "22px", margin: "0 0 6px" }}>{title}</h3>
                <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "16px", lineHeight: 1.6, color: "var(--ink-700)" }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <HxTag tone="plain">Sant Joan de Mediona · Alt Penedès</HxTag>
          <div style={{ marginTop: "20px" }}>
            <HxButton variant="primary" size="lg" onClick={() => onNav("beers")}>Tastar les cerveses</HxButton>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HistoriaScreen });

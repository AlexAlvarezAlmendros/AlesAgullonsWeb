import { Button } from "../components/ds/Button.tsx";
import { Eyebrow } from "../components/ds/Eyebrow.tsx";
import { Tag } from "../components/ds/Tag.tsx";
import { Photo } from "../components/site/Photo.tsx";
import type { Screen } from "../App.tsx";

export interface HistoriaScreenProps {
  onNav: (screen: Screen) => void;
}

const MILESTONES: Array<[string, string, string]> = [
  ["2007", "Una idea a la masia", "Decidim recuperar el celler familiar, que abans feia vi, per elaborar-hi cervesa artesana."],
  ["2008", "Primera fornada", "Comencem a coure de manera experimental, aprenent pel carrer i a poc a poc."],
  ["2009", "Al mercat", "Les primeres ampolles d'Ales Agullons arriben a bars i botigues del Penedès."],
  ["Avui", "Temps i terra", "Seguim fent ales d'alta fermentació per infusió, amb edicions especials criades en bóta."],
];

export function HistoriaScreen({ onNav }: HistoriaScreenProps) {
  return (
    <div>
      <section className="paper-grain" style={{ background: "var(--paper-300)", borderBottom: "1.5px solid var(--line-soft)" }}>
        <div className="wrap-md" style={{ paddingTop: 72, paddingBottom: 72, textAlign: "center" }}>
          <Eyebrow rules align="center">
            Història
          </Eyebrow>
          <h1 style={{ fontSize: "clamp(38px, 5vw, 56px)", margin: "18px 0 14px" }}>Cervesa al cor del Penedès</h1>
          <p
            style={{
              fontFamily: "var(--font-text)",
              fontSize: "19px",
              lineHeight: 1.65,
              color: "var(--ink-700)",
              margin: "0 auto",
              maxWidth: 600,
            }}
          >
            Ales Agullons neix en una masia de Sant Joan de Mediona, envoltada de camps d'ordi i de vinya. Una manera de fer
            pausada, artesana i autèntica.
          </p>
        </div>
      </section>

      <section className="wrap-md" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Photo
          src="/masiaagullons.jpg"
          alt="Panoràmica de la masia Agullons"
          height={320}
          caption="La masia, entre els camps de Sant Joan de Mediona."
          style={{ marginBottom: "48px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {MILESTONES.map(([year, title, body], i) => (
            <div
              key={year}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "28px",
                padding: "26px 0",
                borderTop: i === 0 ? "none" : "1px solid var(--line-faint)",
              }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--brand-deep)", lineHeight: 1 }}>
                {year}
              </div>
              <div>
                <h3 style={{ fontSize: "22px", margin: "0 0 6px" }}>{title}</h3>
                <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "16px", lineHeight: 1.6, color: "var(--ink-700)" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ marginTop: "48px" }}>
          <Photo src="/cerveseria-agullons.jpg" alt="La sala de cocció amb els tancs de fusta" height={260} caption="La sala de cocció." />
          <Photo src="/032.jpg" alt="Els tiradors de fusta al bar" height={260} caption="Els tiradors, al bar de la masia." />
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Tag tone="plain">Sant Joan de Mediona · Alt Penedès</Tag>
          <div style={{ marginTop: "20px" }}>
            <Button variant="primary" size="lg" onClick={() => onNav("beers")}>
              Tastar les cerveses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

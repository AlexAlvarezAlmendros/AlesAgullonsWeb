import { BeerCard } from "../components/ds/BeerCard.tsx";
import { Button } from "../components/ds/Button.tsx";
import { Eyebrow } from "../components/ds/Eyebrow.tsx";
import { Tag } from "../components/ds/Tag.tsx";
import { Photo } from "../components/site/Photo.tsx";
import { BEERS } from "../data/beers.ts";
import type { Screen } from "../App.tsx";

export interface HomeScreenProps {
  onNav: (screen: Screen) => void;
  onSelect: (beerId: string) => void;
}

export function HomeScreen({ onNav, onSelect }: HomeScreenProps) {
  return (
    <div>
      {/* Hero */}
      <section className="paper-grain" style={{ background: "var(--paper-300)", borderBottom: "1.5px solid var(--line-soft)" }}>
        <div className="wrap split split-hero section">
          <div>
            <Eyebrow>Cervesa artesana · des de 2008</Eyebrow>
            <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 0.98, margin: "16px 0 18px", color: "var(--ink-900)" }}>
              Feta a la masia,
              <br />
              amb temps i terra.
            </h1>
            <p style={{ fontFamily: "var(--font-text)", fontSize: "19px", lineHeight: 1.6, color: "var(--ink-700)", maxWidth: 480 }}>
              Ales d'alta fermentació elaborades per infusió a Sant Joan de Mediona, envoltats dels nostres camps d'ordi i les
              vinyes del Penedès. Sense filtrar, sense pasteuritzar.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" onClick={() => onNav("beers")}>
                Veure les cerveses
              </Button>
              <Button variant="ghost" size="lg" onClick={() => onNav("historia")}>
                La nostra història
              </Button>
            </div>
          </div>
          <Photo src="/_o5c9117.jpg" alt="La barra de fusta del bar amb la bóta i els tiradors" height="clamp(220px, 48vw, 360px)" />
        </div>
      </section>

      {/* Featured beers */}
      <section className="wrap section">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          <div>
            <Eyebrow>Les cerveses</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 4.5vw, 40px)", margin: "10px 0 0" }}>De la pàlida a la torrada</h2>
          </div>
          <Button variant="outline" onClick={() => onNav("beers")}>
            Totes les cerveses
          </Button>
        </div>
        <div className="grid-3">
          {BEERS.slice(0, 3).map((b) => (
            <BeerCard
              key={b.id}
              name={b.name}
              styleLabel={b.style}
              tone={b.tone}
              special={b.special ?? false}
              description={b.desc}
              specs={b.specs}
              {...(b.bottle ? { image: b.bottle, imageAlt: `Ampolla de ${b.name}` } : {})}
              footer={
                <Button variant={b.tone === "brown" ? "deep" : "primary"} size="sm" fullWidth onClick={() => onSelect(b.id)}>
                  Veure
                </Button>
              }
            />
          ))}
        </div>
      </section>

      {/* Specials band */}
      <section className="paper-grain" style={{ background: "var(--brown-700)", color: "var(--paper-200)" }}>
        <div className="wrap split split-specials section">
          <Photo src="/P1050368.jpg" alt="Bótes de roure i caixes al celler de la masia" height="clamp(220px, 45vw, 300px)" />
          <div>
            <Eyebrow tone="paper">Edicions especials</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 42px)", margin: "12px 0 16px", color: "var(--paper-100)" }}>Setembre &amp; Barrica</h2>
            <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", lineHeight: 1.65, color: "var(--paper-300)", maxWidth: 460 }}>
              Cerveses de fermentació mixta i criança en bóta de roure, algunes macerades amb raïm del Penedès. Les elaborem
              només una vegada l'any —d'aquí el nom de la Setembre.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "22px", flexWrap: "wrap" }}>
              <Tag tone="merlot">Roure 9 mesos</Tag>
              <Tag tone="merlot">Moscatell</Tag>
              <Tag tone="merlot">Merlot</Tag>
            </div>
            <div style={{ marginTop: "26px" }}>
              <Button variant="primary" onClick={() => onNav("beers")}>
                Descobrir-les
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* History teaser */}
      <section className="wrap split split-half section">
        <div>
          <Eyebrow>La masia</Eyebrow>
          <h2 style={{ fontSize: "clamp(30px, 4.5vw, 40px)", margin: "10px 0 16px" }}>Un celler que abans feia vi</h2>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", lineHeight: 1.65, color: "var(--ink-700)", maxWidth: 480 }}>
            Vam començar el 2008 en una masia tradicional catalana que històricament havia elaborat vi. Hem après pel carrer, a
            poc a poc, fent cervesa com ens agrada beure-la.
          </p>
          <div style={{ marginTop: "22px" }}>
            <Button variant="outline" onClick={() => onNav("historia")}>
              Llegir la història
            </Button>
          </div>
        </div>
        <Photo src="/p1010559.jpg" alt="La masia entre els camps d'ordi" height="clamp(220px, 45vw, 300px)" />
      </section>
    </div>
  );
}

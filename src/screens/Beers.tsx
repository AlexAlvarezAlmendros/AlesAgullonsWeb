import { BeerCard } from "../components/ds/BeerCard.tsx";
import { Button } from "../components/ds/Button.tsx";
import { Eyebrow } from "../components/ds/Eyebrow.tsx";
import { Tag } from "../components/ds/Tag.tsx";
import { BEERS } from "../data/beers.ts";
import type { Beer } from "../data/beers.ts";

export interface BeersScreenProps {
  onSelect: (beerId: string) => void;
}

function BeerGrid({ list, onSelect }: { list: Beer[]; onSelect: (beerId: string) => void }) {
  return (
    <div className="grid-3">
      {list.map((b) => {
        const image = b.bottle ?? b.label;
        return (
          <BeerCard
            key={b.id}
            name={b.name}
            styleLabel={b.style}
            tone={b.tone}
            special={b.special ?? false}
            description={b.desc}
            specs={b.specs}
            {...(image
              ? {
                  image,
                  imageAlt: b.bottle ? `Ampolla de ${b.name}` : `Etiqueta de ${b.name}`,
                  imageFit: b.bottle ? ("contain" as const) : ("cover" as const),
                }
              : {})}
            footer={
              <Button
                variant={b.tone === "brown" ? "deep" : b.special ? "merlot" : "primary"}
                size="sm"
                fullWidth
                onClick={() => onSelect(b.id)}
              >
                Veure
              </Button>
            }
          />
        );
      })}
    </div>
  );
}

export function BeersScreen({ onSelect }: BeersScreenProps) {
  const regulars = BEERS.filter((b) => !b.special);
  const specials = BEERS.filter((b) => b.special);
  return (
    <div className="wrap" style={{ paddingTop: 56 }}>
      <Eyebrow>Cerveses</Eyebrow>
      <h1 style={{ fontSize: "clamp(38px, 5vw, 52px)", margin: "12px 0 8px" }}>El nostre catàleg</h1>
      <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", color: "var(--ink-700)", maxWidth: 560, marginBottom: "40px" }}>
        Ales d'alta fermentació, sense filtrar ni pasteuritzar. Disponibles en ampolles de 50 i 75 cl i barrils de 20, 30 i 41 L
        (cask).
      </p>
      <BeerGrid list={regulars} onSelect={onSelect} />
      <div style={{ display: "flex", alignItems: "center", gap: "18px", margin: "56px 0 32px" }}>
        <h2 style={{ fontSize: "32px", margin: 0, whiteSpace: "nowrap" }}>Edicions especials</h2>
        <span style={{ flex: 1, height: "1.5px", background: "var(--line-soft)" }} />
        <Tag tone="merlot" outline>
          Una vegada l'any
        </Tag>
      </div>
      <BeerGrid list={specials} onSelect={onSelect} />
    </div>
  );
}

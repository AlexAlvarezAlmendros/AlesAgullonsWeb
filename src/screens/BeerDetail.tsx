import { BeerCard } from "../components/ds/BeerCard.tsx";
import { Button } from "../components/ds/Button.tsx";
import { Eyebrow } from "../components/ds/Eyebrow.tsx";
import { SpecList } from "../components/ds/SpecList.tsx";
import { BEERS, findBeer } from "../data/beers.ts";

export interface BeerDetailScreenProps {
  beerId: string;
  onBack: () => void;
  onSelect: (beerId: string) => void;
}

export function BeerDetailScreen({ beerId, onBack, onSelect }: BeerDetailScreenProps) {
  const b = findBeer(beerId);
  const capColors = {
    pale: "var(--barley-300)",
    amber: "var(--amber-500)",
    brown: "var(--brown-700)",
    wheat: "var(--barley-200)",
    special: "var(--merlot-700)",
  } as const;
  const cap = capColors[b.special ? "special" : b.tone];
  const onCap = b.tone === "pale" || b.tone === "wheat" ? "var(--ink-900)" : "var(--paper-100)";
  const lightCap = onCap === "var(--ink-900)";
  const others = BEERS.filter((x) => x.id !== b.id).slice(0, 3);

  return (
    <div className="wrap" style={{ paddingTop: "clamp(20px, 4vw, 32px)" }}>
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-label)",
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--ink-600)",
          padding: "8px 0",
          marginBottom: "16px",
        }}
      >
        ← Totes les cerveses
      </button>
      <div className="split split-detail">
        {/* Label panel */}
        <div>
          <div
            className="paper-grain"
            style={{
              background: cap,
              color: onCap,
              borderRadius: "var(--radius-md)",
              border: "3px double var(--ink-800)",
              padding: "clamp(28px, 5vw, 44px) clamp(18px, 4vw, 32px)",
              textAlign: "center",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {b.special && (
              <div
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                  marginBottom: 10,
                }}
              >
                Edició especial
              </div>
            )}
            {b.bottle && (
              <img
                src={b.bottle}
                alt={`Ampolla de ${b.name}`}
                style={{
                  height: "clamp(190px, 36vw, 260px)",
                  objectFit: "contain",
                  marginBottom: 20,
                  filter: "drop-shadow(0 10px 18px rgba(42,27,16,0.35))",
                }}
              />
            )}
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 0.92 }}>{b.name}</div>
            <div style={{ fontFamily: "var(--font-text)", fontStyle: "italic", fontSize: "18px", marginTop: 6, opacity: 0.92 }}>
              {b.tagline}
            </div>
            <div style={{ marginTop: 28, paddingTop: 18, borderTop: `1px solid ${onCap}`, opacity: 0.95 }}>
              <SpecList items={b.specs} onDark={!lightCap} style={{ justifyContent: "center" }} />
            </div>
          </div>
          {b.label && (
            <figure style={{ margin: "22px 0 0" }}>
              <img
                src={b.label}
                alt={`Etiqueta de ${b.name}`}
                style={{
                  display: "block",
                  width: "100%",
                  border: "3px double var(--ink-800)",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-sm)",
                }}
              />
              <figcaption
                style={{
                  fontFamily: "var(--font-text)",
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "var(--ink-600)",
                  marginTop: "8px",
                  textAlign: "center",
                }}
              >
                L'etiqueta de la {b.name}
              </figcaption>
            </figure>
          )}
        </div>
        {/* Info */}
        <div>
          <Eyebrow>{b.style}</Eyebrow>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 48px)", margin: "10px 0 18px" }}>{b.name}</h1>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", lineHeight: 1.7, color: "var(--ink-700)" }}>{b.desc}</p>
          <div
            style={{
              background: "var(--paper-100)",
              border: "1px solid var(--surface-card-edge)",
              borderRadius: "var(--radius-md)",
              padding: "20px 22px",
              margin: "24px 0",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--brand-accent)",
                marginBottom: 10,
              }}
            >
              Per acompanyar
            </div>
            <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "16px", lineHeight: 1.6, color: "var(--ink-800)" }}>
              {b.pairing}
            </p>
          </div>
          <SpecList
            layout="stack"
            items={[{ label: "Maltes", value: b.malts }, { label: "Llúpols", value: b.hops }, ...b.specs]}
          />
          <div style={{ display: "flex", gap: "12px", marginTop: "26px", flexWrap: "wrap" }}>
            <Button variant={b.special ? "merlot" : "primary"} size="lg">
              Afegir a la comanda
            </Button>
            <Button variant="outline" size="lg">
              Punts de venda
            </Button>
          </div>
        </div>
      </div>
      {/* More */}
      <div style={{ marginTop: "72px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "22px" }}>Altres cerveses</h2>
        <div className="grid-3">
          {others.map((o) => {
            const image = o.bottle ?? o.label;
            return (
              <BeerCard
                key={o.id}
                name={o.name}
                styleLabel={o.style}
                tone={o.tone}
                special={o.special ?? false}
                description={o.desc}
                specs={o.specs}
                {...(image
                  ? {
                      image,
                      imageAlt: o.bottle ? `Ampolla de ${o.name}` : `Etiqueta de ${o.name}`,
                      imageFit: o.bottle ? ("contain" as const) : ("cover" as const),
                    }
                  : {})}
                footer={
                  <Button
                    variant={o.tone === "brown" ? "deep" : o.special ? "merlot" : "primary"}
                    size="sm"
                    fullWidth
                    onClick={() => onSelect(o.id)}
                  >
                    Veure
                  </Button>
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

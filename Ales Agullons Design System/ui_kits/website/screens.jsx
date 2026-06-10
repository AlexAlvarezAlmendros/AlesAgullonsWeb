/* Ales Agullons website — screens */
const _DS = window.AlesAgullonsDesignSystem_76dff6;
const { BeerCard, Button, Tag, Eyebrow, SpecList } = _DS;

const wrap = { maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 32px" };

/* ---------------- HOME ---------------- */
function HomeScreen({ onNav, onSelect }) {
  const beers = window.AGULLONS_BEERS;
  return (
    <div>
      {/* Hero */}
      <section className="paper-grain" style={{ background: "var(--paper-300)", borderBottom: "1.5px solid var(--line-soft)" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center", padding: "72px 32px" }}>
          <div>
            <Eyebrow>Cervesa artesana · des de 2008</Eyebrow>
            <h1 style={{ fontSize: "64px", lineHeight: 0.98, margin: "16px 0 18px", color: "var(--ink-900)" }}>
              Feta a la masia,<br/>amb temps i terra.
            </h1>
            <p style={{ fontFamily: "var(--font-text)", fontSize: "19px", lineHeight: 1.6, color: "var(--ink-700)", maxWidth: 480 }}>
              Ales d'alta fermentació elaborades per infusió a Sant Joan de Mediona, envoltats
              dels nostres camps d'ordi i les vinyes del Penedès. Sense filtrar, sense pasteuritzar.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
              <Button variant="primary" size="lg" onClick={() => onNav("beers")}>Veure les cerveses</Button>
              <Button variant="ghost" size="lg" onClick={() => onNav("historia")}>La nostra història</Button>
            </div>
          </div>
          <PhotoSlot label="Foto: ampolles a la barra de fusta" tone="barley" height={360} />
        </div>
      </section>

      {/* Featured beers */}
      <section style={{ ...wrap, padding: "72px 32px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px" }}>
          <div>
            <Eyebrow>Les cerveses</Eyebrow>
            <h2 style={{ fontSize: "40px", margin: "10px 0 0" }}>De la pàlida a la torrada</h2>
          </div>
          <Button variant="outline" onClick={() => onNav("beers")}>Totes les cerveses</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {beers.slice(0, 3).map((b) => (
            <BeerCard key={b.id} name={b.name} style={b.style} tone={b.tone} special={b.special}
              description={b.desc} specs={b.specs}
              footer={<Button variant={b.tone === "brown" ? "deep" : "primary"} size="sm" fullWidth onClick={() => onSelect(b.id)}>Veure</Button>} />
          ))}
        </div>
      </section>

      {/* Specials band */}
      <section className="paper-grain" style={{ background: "var(--brown-700)", color: "var(--paper-200)" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "48px", alignItems: "center", padding: "72px 32px" }}>
          <PhotoSlot label="Foto: bótes de roure al celler" tone="stout" height={300} />
          <div>
            <Eyebrow tone="paper">Edicions especials</Eyebrow>
            <h2 style={{ fontSize: "42px", margin: "12px 0 16px", color: "var(--paper-100)" }}>Setembre &amp; Barrica</h2>
            <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", lineHeight: 1.65, color: "var(--paper-300)", maxWidth: 460 }}>
              Cerveses de fermentació mixta i criança en bóta de roure, algunes macerades amb
              raïm del Penedès. Les elaborem només una vegada l'any —d'aquí el nom de la Setembre.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "22px", flexWrap: "wrap" }}>
              <Tag tone="merlot">Roure 9 mesos</Tag>
              <Tag tone="merlot">Moscatell</Tag>
              <Tag tone="merlot">Merlot</Tag>
            </div>
            <div style={{ marginTop: "26px" }}>
              <Button variant="primary" onClick={() => onNav("beers")}>Descobrir-les</Button>
            </div>
          </div>
        </div>
      </section>

      {/* History teaser */}
      <section style={{ ...wrap, padding: "72px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
        <div>
          <Eyebrow>La masia</Eyebrow>
          <h2 style={{ fontSize: "40px", margin: "10px 0 16px" }}>Un celler que abans feia vi</h2>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", lineHeight: 1.65, color: "var(--ink-700)", maxWidth: 480 }}>
            Vam començar el 2008 en una masia tradicional catalana que històricament havia
            elaborat vi. Hem après pel carrer, a poc a poc, fent cervesa com ens agrada beure-la.
          </p>
          <div style={{ marginTop: "22px" }}>
            <Button variant="outline" onClick={() => onNav("historia")}>Llegir la història</Button>
          </div>
        </div>
        <PhotoSlot label="Foto: la masia i els camps d'ordi" tone="vine" height={300} />
      </section>
    </div>
  );
}

/* ---------------- BEERS LISTING ---------------- */
function BeersScreen({ onSelect }) {
  const beers = window.AGULLONS_BEERS;
  const regulars = beers.filter((b) => !b.special);
  const specials = beers.filter((b) => b.special);
  const Grid = ({ list }) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
      {list.map((b) => (
        <BeerCard key={b.id} name={b.name} style={b.style} tone={b.tone} special={b.special}
          description={b.desc} specs={b.specs}
          footer={<Button variant={b.tone === "brown" ? "deep" : (b.special ? "merlot" : "primary")} size="sm" fullWidth onClick={() => onSelect(b.id)}>Veure</Button>} />
      ))}
    </div>
  );
  return (
    <div style={{ ...wrap, padding: "56px 32px 0" }}>
      <Eyebrow>Cerveses</Eyebrow>
      <h1 style={{ fontSize: "52px", margin: "12px 0 8px" }}>El nostre catàleg</h1>
      <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", color: "var(--ink-700)", maxWidth: 560, marginBottom: "40px" }}>
        Ales d'alta fermentació, sense filtrar ni pasteuritzar. Disponibles en ampolles de
        50 i 75 cl i barrils de 20, 30 i 41 L (cask).
      </p>
      <Grid list={regulars} />
      <div style={{ display: "flex", alignItems: "center", gap: "18px", margin: "56px 0 32px" }}>
        <h2 style={{ fontSize: "32px", margin: 0, whiteSpace: "nowrap" }}>Edicions especials</h2>
        <span style={{ flex: 1, height: "1.5px", background: "var(--line-soft)" }} />
        <Tag tone="merlot" outline>Una vegada l'any</Tag>
      </div>
      <Grid list={specials} />
    </div>
  );
}

/* ---------------- BEER DETAIL ---------------- */
function BeerDetailScreen({ beerId, onBack, onSelect }) {
  const beers = window.AGULLONS_BEERS;
  const b = beers.find((x) => x.id === beerId) || beers[0];
  const dark = b.tone === "brown" || b.special;
  const cap = { pale: "var(--barley-300)", amber: "var(--amber-500)", brown: "var(--brown-700)", wheat: "var(--barley-200)", special: "var(--merlot-700)" }[b.special ? "special" : b.tone];
  const onCap = b.tone === "pale" || b.tone === "wheat" ? "var(--ink-900)" : "var(--paper-100)";
  const others = beers.filter((x) => x.id !== b.id).slice(0, 3);
  return (
    <div style={{ ...wrap, padding: "32px 32px 0" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-label)", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-600)", padding: "8px 0", marginBottom: "16px" }}>← Totes les cerveses</button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
        {/* Label panel */}
        <div className="paper-grain" style={{ background: cap, color: onCap, borderRadius: "var(--radius-md)", border: "3px double var(--ink-800)", padding: "56px 32px", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
          {b.special && <div style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.85, marginBottom: 10 }}>Edició especial</div>}
          <div style={{ fontFamily: "var(--font-display)", fontSize: "72px", lineHeight: 0.92 }}>{b.name}</div>
          <div style={{ fontFamily: "var(--font-text)", fontStyle: "italic", fontSize: "18px", marginTop: 6, opacity: 0.92 }}>{b.tagline}</div>
          <div style={{ marginTop: 28, paddingTop: 18, borderTop: `1px solid ${onCap}`, opacity: 0.95 }}>
            <SpecList items={b.specs} onDark={onCap !== "var(--ink-900)"} style={{ justifyContent: "center" }} />
          </div>
        </div>
        {/* Info */}
        <div>
          <Eyebrow>{b.style}</Eyebrow>
          <h1 style={{ fontSize: "48px", margin: "10px 0 18px" }}>{b.name}</h1>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "18px", lineHeight: 1.7, color: "var(--ink-700)" }}>{b.desc}</p>
          <div style={{ background: "var(--paper-100)", border: "1px solid var(--surface-card-edge)", borderRadius: "var(--radius-md)", padding: "20px 22px", margin: "24px 0" }}>
            <div style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--brand-accent)", marginBottom: 10 }}>Per acompanyar</div>
            <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "16px", lineHeight: 1.6, color: "var(--ink-800)" }}>{b.pairing}</p>
          </div>
          <SpecList layout="stack" items={[{ label: "Maltes", value: b.malts }, { label: "Llúpols", value: b.hops }, ...b.specs]} />
          <div style={{ display: "flex", gap: "12px", marginTop: "26px" }}>
            <Button variant={b.special ? "merlot" : "primary"} size="lg">Afegir a la comanda</Button>
            <Button variant="outline" size="lg">Punts de venda</Button>
          </div>
        </div>
      </div>
      {/* More */}
      <div style={{ marginTop: "72px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "22px" }}>Altres cerveses</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {others.map((o) => (
            <BeerCard key={o.id} name={o.name} style={o.style} tone={o.tone} special={o.special}
              description={o.desc} specs={o.specs}
              footer={<Button variant={o.tone === "brown" ? "deep" : (o.special ? "merlot" : "primary")} size="sm" fullWidth onClick={() => onSelect(o.id)}>Veure</Button>} />
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, BeersScreen, BeerDetailScreen });

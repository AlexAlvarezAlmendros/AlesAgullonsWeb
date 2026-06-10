# Ales Agullons — Design System

> *Cervecería Artesana Auténtica* — authentic artisan ales brewed in a Catalan farmhouse.

A rustic, rural, hand-made brand system for **Ales Agullons**, a small craft brewery in
**Sant Joan de Mediona (Alt Penedès)**, Catalonia. The look is parchment-and-ink: malted
barley golds, oak-barrel browns, kraft paper, vineyard green and merlot — letterpress
typography, double-ruled label frames, and warm photography of the masia.

---

## Brand context

- **Who:** A tiny, family-scale brewery housed in a *masia* (traditional Catalan farmhouse)
  that historically made wine, now surrounded by its own barley fields and the vineyards of
  the Penedès. Founded **2008**, first beers to market **2009**.
- **What:** Top-fermented, English-style **ales** made by simple infusion with UK / US / German
  malts and hops. Unfiltered, unpasteurised, bottle-conditioned. Some special editions are
  oak-barrel-aged and mixed-fermentation (Lambic-influenced), even macerated with local grapes.
- **Ethos:** Self-taught, uncommercial, slow and seasonal. "We learned on the street." Pride in
  imperfection, terroir, and doing it by hand. The opposite of industrial lager.

### The beers (the product line)
| Beer | Style | Notes |
|---|---|---|
| **Pura Pale** | Pale Ale (single malt) | Cascade + Fuggles hops; the flagship |
| **Edgard** | Pale Ale | Pale malt, monovarietal Cascade |
| **Bruno** | Pale Ale | Pale + Crystal malt; Cascade/Challenger/Fuggles |
| **Runa** | Brown Ale | Pale/Crystal/Chocolate/Roasted; toasty, not black |
| **Dalmoru** | Wheat beer | — |
| **Setembre** *(especial)* | Mixed-ferment | Pura Pale + Lambic, oak-aged 9mo + bottle; once a year |
| **Setembre Nadal** *(especial)* | — | Setembre macerated with moscatel grapes |
| **Barrica** *(especial)* | Barrel-aged | Pura Pale, oak 9–12mo + 1yr bottle guard |
| **Barrica Merlot** *(especial)* | — | Barrica macerated with merlot grapes |

**Formats:** 50 cl & 75 cl bottles; 20 L / 30 L / cask 41 L barrels (specials in 75 cl).

### Sources
- Website (Catalan/Spanish, Joomla): <https://www.masia-agullons.com/es/>
  - Historia: <https://www.masia-agullons.com/es/historia.html>
  - Cervezas: <https://www.masia-agullons.com/es/cervezas.html>
  - Imágenes: <https://www.masia-agullons.com/es/imagenes.html>
- **No code or Figma was provided.** This system is an original, brand-faithful interpretation
  of the rustic/artisanal direction the user requested. The real logotype and photography were
  **not retrievable** and must be supplied by the client (see CAVEATS at end of session).

---

## CONTENT FUNDAMENTALS — voice & copy

The brand's own copy (on the site) is **plain, unpolished, and personal** — written like a
brewer talking across the bar, not marketing prose. Mirror that.

- **Person & tone.** First-person plural, warm and modest: *"a veces la hemos disfrutado con…"*,
  *"esta nos gusta tomarla con carnes rojas"*. Speak as *we* (the brewery), address the reader
  loosely. Never corporate, never hype. Confidence comes from craft, not adjectives.
- **Languages.** Catalan first, Spanish second (the site offers CA / ES). Beer **names stay in
  Catalan/original** (Setembre, Barrica, Dalmoru) regardless of UI language. Default copy here is
  Spanish/Catalan; English is acceptable for export contexts but keep beer names untranslated.
- **Casing.** Beer names are often set in **ALL CAPS** on labels and listings (PURA PALE, RUNA).
  Body copy is sentence case. Eyebrows/overlines are uppercase with wide tracking.
- **What we talk about.** Ingredients (which malts, which hops), how it's made (infusion,
  barrel, fermentation), and **how to enjoy it** — food pairings are central and specific
  ("with red meat and game", "before meals with strong cheese, olives and seafood", "served
  from a *porró* for good oxygenation"). Seasonality matters ("only once a year, hence the name").
- **Vocabulary.** Concrete and agrarian: malta, lúpulo, barrica, roble, maceración, añada,
  fermentación, cask, porró. Avoid buzzwords (no "premium", "experience", "journey").
- **No emoji.** None. The register is analog. Use real words and the spec mono for numbers.
- **Examples to imitate:**
  - *"Cerveza pálida de una sola malta con lúpulos Cascade y Fuggles. Marida muy bien con carnes y pescado."*
  - *"Es una cerveza de fermentación mixta… solo la hacemos una vez al año, de ahí su nombre."*
  - Tagline register: *"Cervesa artesana, autèntica."* / *"Feta a la masia, des de 2008."*

---

## VISUAL FOUNDATIONS

The mental model is a **letterpress beer label pasted onto kraft paper**, photographed on a
worn wooden bar in afternoon light.

- **Color.** Earthy and analog — no neon, no cool blues. Grounds are **parchment/kraft**
  (`--paper-200/300/400`); type is **warm near-black ink** (`--ink-900/800`). The accent system
  is literally the beer spectrum: pale **barley gold** (`--barley-500`, the signature), copper
  **amber**, roasted **brown** (`--brown-700`), near-black **stout**. Terroir accents:
  **vineyard olive-green** (`--vine-600`) and **merlot wine red** (`--merlot-700`) for
  barrel/special editions. Dark sections use **stout/brown grounds** with parchment type.
- **Type.** Display = **Sorts Mill Goudy** (old-world humanist serif) for beer names & headlines;
  text/UI = **Bitter** (warm slab serif); specs (ABV/IBU/format) = **Courier Prime** typewriter
  mono. Big, generous display sizes; uppercase wide-tracked eyebrows. *(Fonts are Google-Fonts
  substitutes — see fonts.css flag.)*
- **Backgrounds.** Flat parchment with an optional **fine paper grain** (`.paper-grain`, a
  faint dotted noise — never a gradient). Photography is used **full-bleed** for heroes (the
  masia, barley fields, barrels, bottles on wood). Imagery vibe: **warm, golden-hour, slightly
  desaturated, natural grain** — never cold, glossy, or blue. Hand-drawn **botanical line
  engravings** (barley ears, hop cones, vine leaves) are a welcome motif as quiet decoration.
- **Borders & frames.** Thin **ink hairlines** (`--line-soft`) and **double-ruled label frames**
  (`.frame-label`, `border: 3px double`) — the vintage label look. Avoid heavy rounded cards.
- **Corner radii.** Minimal — `2–6px`. This is paper, not an app. Pills (`--radius-pill`) only
  for tasting chips/tags.
- **Cards.** Cream stock (`--surface-card`) on the parchment page, a hairline edge
  (`--surface-card-edge`), low warm shadow (`--shadow-sm/md`). Optionally a double-rule frame for
  "label" cards. No bright white, no glassmorphism.
- **Shadows.** Warm-toned, low, short — paper resting on wood (`--shadow-sm/md/lg`). Active/pressed
  controls use a **letterpress inset** (`--shadow-press`) — they press *into* the paper.
- **Motion.** Subtle and grounded: short fades and small translateY, `--ease-standard`,
  140–400 ms. **No bounce, no spring, no parallax.** Reduced-motion shows final state.
- **Hover.** Darken toward the deeper malt (gold → brown), or underline for links; ~`--dur-fast`.
- **Press.** Inset letterpress shadow + ~1px downward nudge; never a scale-up bounce.
- **Transparency / blur.** Used sparingly — a translucent parchment scrim over hero photos for
  legibility (warm overlay, not a frosted-glass panel). Avoid heavy backdrop blur.
- **Layout.** Generous margins, asymmetry welcome (a label pasted slightly off-square). Containers
  `--container-md/lg/xl`. Ink rules separate sections. Footer is a dark stout band.

---

## ICONOGRAPHY

The brand is **type- and photography-led**, not icon-heavy — keep UI iconography sparse and
quiet so it reads like printed matter, not a dashboard.

- **No emoji, ever.** The register is analog.
- **UI icons — Lucide (CDN, SUBSTITUTION FLAG).** No brand icon set exists, so we standardise on
  **[Lucide](https://lucide.dev)** — thin (≈1.5px), open, hand-drawn-feeling line icons that sit
  well with the letterpress aesthetic. Loaded from CDN; recolour with `currentColor` to ink/gold.
  Use for navigation, contact, format/volume markers. Example:
  `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
  Keep stroke uniform; never mix icon families. Replace if the client adopts a bespoke set.
- **Botanical engravings (preferred decorative motif).** Where decoration is wanted, favour
  **hand-drawn line engravings** of **barley ears, hop cones, and vine leaves** over UI icons —
  as quiet section marks, dividers, or label ornaments. *These should be supplied as real
  engraving SVGs/PNGs by the client (see CAVEATS); we have not invented them.*
- **Unicode marks.** A small set of typographic marks is on-brand for body copy: `·` (mid-dot
  separator in eyebrows/specs), `★` (a single star to flag the flagship), `—` em-dash. Avoid
  decorative dingbats.
- **Spec markers.** Numeric data (ABV, IBU, format, volume) is set in the **spec mono**, not as
  icons — a typed spec line is the brand's "icon" for product data.

---

## INDEX / MANIFEST

Root entry: **`styles.css`** — link this one file (imports all tokens + fonts).

> **Runtime note.** Component previews (`@dsCard` HTML + the UI kit) load
> **`ds-runtime.js`** — a hand-authored, precompiled (`React.createElement`)
> mirror of `components/**` that defines `window.AlesAgullonsDesignSystem_76dff6`.
> It exists because the compiler's generated `_ds_bundle.js` is not always served
> at the project root in preview/consumer contexts. It only fills in components
> missing from the namespace, so a real compiled bundle (if present) still wins.
> **Keep `ds-runtime.js` in sync with the `.jsx` sources** when you edit a component.

| Path | What |
|---|---|
| `readme.md` | This guide (brand, voice, visuals, iconography, manifest) |
| `SKILL.md` | Agent-Skills front-matter for downloadable use |
| `styles.css` | Import manifest (consumers link this) |
| `tokens/colors.css` | Palette — paper, ink, beer spectrum, terroir + semantic aliases |
| `tokens/typography.css` | Families, scale, weights, tracking |
| `tokens/spacing.css` | Spacing, radii, borders, shadows, motion |
| `tokens/base.css` | Element defaults + helpers (`.eyebrow`, `.rule`, `.frame-label`, `.spec`, `.paper-grain`) |
| `tokens/fonts.css` | `@import` of Google-Fonts substitutes (⚑ flag) |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing) |
| `assets/*.card.html` | Brand cards (wordmark lockup, beer-label treatment) |

### Components (`window.AlesAgullonsDesignSystem_76dff6`)
| Component | Dir | Role |
|---|---|---|
| `Button` | `components/core/` | Letterpress CTA (primary/deep/merlot/outline/ghost) |
| `Tag` | `components/core/` | Style / hop / pairing chip |
| `Eyebrow` | `components/core/` | Tracked uppercase overline |
| `Input` | `components/core/` | Kraft-paper form field |
| `SpecList` | `components/product/` | Typewriter spec line/table |
| `BeerCard` | `components/product/` | Bottle-label product card |

### UI kits
| Kit | Path | Screens |
|---|---|---|
| Website | `ui_kits/website/` | Home · Cerveses · Beer detail · Història |

---

## CAVEATS — please provide

This system was built from the public website's **text only**; binaries could not be retrieved.
To make it production-perfect, please supply:

1. **Official logotype / wordmark** (the real `logo agullons` art). Current lockup is a
   typographic placeholder (`assets/brand-wordmark.card.html`).
2. **Brand fonts.** Display/label/body are **Google-Fonts substitutes** (Sorts Mill Goudy /
   Bitter / Courier Prime). Send licensed font files to swap in `tokens/fonts.css`.
3. **Photography** — the masia, barley fields, oak barrels, bottles on wood (warm, golden-hour).
   The UI kit uses captioned `PhotoSlot` placeholders.
4. **Botanical engravings** (barley/hops/vine) if you want them as decorative marks.
5. **Real beer data** — accurate ABV/IBU/OG per beer (current values are illustrative).
6. **Icon set decision** — confirm Lucide (current substitute) or provide a bespoke set.


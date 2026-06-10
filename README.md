# Ales Agullons — Web

Web de la cerveseria **Ales Agullons** (Sant Joan de Mediona, Alt Penedès), construïda
amb **React 19 + Vite + TypeScript** a partir del design system del directori
`Ales Agullons Design System/` i la fotografia real de `public/`.

## Comandes

```bash
pnpm install   # instal·lar dependències
pnpm dev       # servidor de desenvolupament
pnpm build     # typecheck + build de producció (dist/)
pnpm preview   # servir el build
```

## Estructura

```
public/                  imatges (ampolles, etiquetes, fotos de la masia, logo)
src/
  styles/                tokens CSS copiats del design system + layout responsive
  components/ds/         components del design system portats a TSX
                         (Button, Tag, Eyebrow, SpecList, BeerCard)
  components/site/       chrome del web (Header, Footer, Photo)
  screens/               Home · Cerveses · Detall de cervesa · Història
  data/beers.ts          catàleg de cerveses amb ampolla/etiqueta assignades
  App.tsx                router per hash (#/, #/cerveses, #/cervesa/:id, #/historia)
```

## Notes

- Els valors d'IBU són il·lustratius, pendents de dades reals de la cerveseria
  (l'ABV s'ha pres de les etiquetes quan hi consta).
- Les fonts són substituts de Google Fonts (Sorts Mill Goudy / Bitter / Courier Prime),
  tal com indica el design system.
- `Setembre Nadal` comparteix l'etiqueta amb la `Setembre` normal.

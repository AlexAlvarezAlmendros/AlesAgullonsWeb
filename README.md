<div align="center">

# Ales Agullons

**El web d'una cerveseria artesana del Penedès: nou cerveses, la masia on es fan i res més.**

[![En producció](https://img.shields.io/badge/en%20producci%C3%B3-ales--agullons--web--6luv.vercel.app-4dd4ac)](https://ales-agullons-web-6luv.vercel.app)
[![React 19](https://img.shields.io/badge/React-19-61dafb)](package.json)
[![Vite + TS](https://img.shields.io/badge/Vite-TypeScript-646cff)](vite.config.ts)
[![Zero deps](https://img.shields.io/badge/depend%C3%A8ncies-nom%C3%A9s%20React-lightgrey)](package.json)

[Què és](#què-és) · [El catàleg](#el-catàleg) · [Com està fet](#com-està-fet) · [Comandes](#comandes)

</div>

---

## Què és

El web de la cerveseria **Ales Agullons** (Sant Joan de Mediona, Alt Penedès). Quatre pantalles —
inici, cerveses, fitxa de cervesa i història — construïdes a partir del design system del directori
[`Ales Agullons Design System/`](Ales%20Agullons%20Design%20System/) i de la fotografia real de la
masia i de les ampolles que hi ha a `public/`.

No hi ha botiga, ni carret, ni comptes d'usuari. Una cerveseria d'aquesta mida no ven per internet:
ven a bars, a botigues i a la porta. El web ha de fer una sola cosa bé — **explicar què és cada
cervesa i qui la fa** — i carregar de pressa en el mòbil de qui l'està buscant des d'un bar.

## El catàleg

Nou cerveses a [`src/data/beers.ts`](src/data/beers.ts), cadascuna amb estil, maridatge, maltes,
llúpols i fitxa tècnica:

| | |
|---|---|
| **Pura Pale** | Pale Ale d'una sola malta, Cascade i Fuggles |
| **Edgard** | Pale Ale monovarietal de Cascade |
| **Bruno** | Brown Ale de dues maltes |
| **Runa** | Cervesa de blat |
| **Dalmoru** | Amb moscatell |
| **Setembre** i **Setembre Nadal** | L'estacional, i la seva versió de Nadal |
| **Barrica** i **Barrica Merlot** | Envellides en bóta de roure 9–12 mesos |

Afegir o corregir una cervesa és editar aquest fitxer: el tipus `Beer` obliga a omplir el que la
fitxa necessita, i el `tone` decideix la paleta de la targeta.

## Com està fet

```
public/                  imatges reals: ampolles, etiquetes, fotos de la masia, logo
src/
  styles/                tokens CSS copiats del design system + layout responsive
  components/ds/         el design system portat a TSX: Button · Tag · Eyebrow
                         SpecList · BeerCard
  components/site/       el marc del web: Header · Footer · Photo · Botanicals
  screens/               Home · Beers · BeerDetail · Historia
  data/beers.ts          el catàleg
  App.tsx                router per hash (#/, #/cerveses, #/cervesa/:id, #/historia)
```

Dues decisions que expliquen la resta:

- **Router per hash, escrit a mà.** Quatre rutes no justifiquen una dependència de routing ni una
  configuració de servidor: així el `dist/` és HTML estàtic que funciona en qualsevol allotjament,
  fins i tot obrint el fitxer.
- **El design system és la font, no una inspiració.** Els tokens de `Ales Agullons Design System/`
  es copien tal qual a `src/styles/`; els components de `components/ds/` són la traducció directa
  dels del kit. Si la marca canvia, es canvia en un lloc.

L'única dependència de producció és **React**. Res més.

## Comandes

```bash
pnpm install
pnpm dev        # servidor de desenvolupament
pnpm build      # typecheck + build de producció a dist/
pnpm preview    # serveix el build
pnpm typecheck  # tsc -b
```

## Notes de contingut

- Els **valors d'IBU són il·lustratius**, pendents de les dades reals de la cerveseria. L'ABV està
  pres de les etiquetes quan hi consta.
- Les **tipografies són substituts de Google Fonts** (Sorts Mill Goudy / Bitter / Courier Prime),
  tal com indica el design system.
- **Setembre Nadal** comparteix etiqueta amb la Setembre normal.

> Aquest README està en català perquè el projecte, la marca i el contingut ho són.

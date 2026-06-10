import type { BeerTone } from "../components/ds/BeerCard.tsx";
import type { SpecItem } from "../components/ds/SpecList.tsx";

export interface Beer {
  id: string;
  name: string;
  style: string;
  tone: BeerTone;
  tagline: string;
  desc: string;
  pairing: string;
  malts: string;
  hops: string;
  specs: SpecItem[];
  special?: boolean;
  /** Bottle PNG from /public (transparent background). */
  bottle?: string;
  /** Label art JPG from /public. */
  label?: string;
}

// Catàleg Ales Agullons. Els valors d'IBU són il·lustratius pendents
// de dades reals de la cerveseria; ABV pres de les etiquetes quan hi consta.
export const BEERS: Beer[] = [
  {
    id: "pura-pale",
    name: "Pura Pale",
    style: "Pale Ale",
    tone: "pale",
    tagline: "Una sola malta",
    desc: "Cervesa pàlida d'una sola malta amb llúpols de les varietats Cascade i Fuggles. Elaboració per infusió simple.",
    pairing: "Marida molt bé tant amb carns com amb peix; de vegades amb plàtan, poma golden i xocolata negra ratllada.",
    malts: "Pale",
    hops: "Cascade · Fuggles",
    specs: [
      { label: "ABV", value: "5.0%" },
      { label: "IBU", value: "38" },
      { label: "Format", value: "75 cl" },
    ],
    bottle: "/ampollaPura75.png",
    label: "/puraetiqueta.jpg",
  },
  {
    id: "edgard",
    name: "Edgard",
    style: "Pale Ale",
    tone: "pale",
    tagline: "Monovarietal Cascade",
    desc: "Cervesa elaborada amb malta pàlida i monovarietal de Cascade.",
    pairing: "Aperitius, amanides i formatges tendres.",
    malts: "Pale",
    hops: "Cascade",
    specs: [
      { label: "ABV", value: "5.0%" },
      { label: "IBU", value: "35" },
      { label: "Format", value: "75 cl" },
    ],
    bottle: "/ampollaEdgard75.png",
    label: "/edgardetiqueta.jpg",
  },
  {
    id: "bruno",
    name: "Bruno",
    style: "Pale Ale",
    tone: "amber",
    tagline: "Dues maltes",
    desc: "Cervesa de dues maltes, Pale i Crystal, que li donen el seu color i sabor característics. Amb llúpol Cascade, Challenger i Fuggles.",
    pairing: "Ens agrada prendre-la amb carns vermelles i caça.",
    malts: "Pale · Crystal",
    hops: "Cascade · Challenger · Fuggles",
    specs: [
      { label: "ABV", value: "5.4%" },
      { label: "IBU", value: "40" },
      { label: "Format", value: "75 cl" },
    ],
    bottle: "/ampollaBruno.png",
    label: "/brunoetiqueta.jpg",
  },
  {
    id: "runa",
    name: "Runa",
    style: "Brown Ale",
    tone: "brown",
    tagline: "Torrada, no negra",
    desc: "Cervesa fosca de tres tipus de malta —Pale, Crystal, Chocolate i Roasted Barley sense maltejar— molt torrada però sense arribar a ser negra. Llúpols Northern Brewer i Fuggles.",
    pairing: "Marida amb carns i postres elaborats amb xocolata.",
    malts: "Pale · Crystal · Chocolate · Roasted",
    hops: "Northern Brewer · Fuggles",
    specs: [
      { label: "ABV", value: "5.6%" },
      { label: "IBU", value: "30" },
      { label: "Format", value: "75 cl" },
    ],
    bottle: "/ampollaRuna75.png",
    label: "/runaetiqueta.jpg",
  },
  {
    id: "dalmoru",
    name: "Dalmoru",
    style: "Cervesa de blat",
    tone: "wheat",
    tagline: "De blat",
    desc: "Cervesa de blat, fresca i lleugera.",
    pairing: "Aperitiu i menjars d'estiu.",
    malts: "Blat · Pale",
    hops: "Suau",
    specs: [
      { label: "ABV", value: "4.8%" },
      { label: "IBU", value: "18" },
      { label: "Format", value: "75 cl" },
    ],
    bottle: "/ampollaDalmoru.png",
    label: "/dalmoruetiqueta.jpg",
  },
  {
    id: "setembre",
    name: "Setembre",
    style: "Fermentació mixta",
    tone: "special",
    special: true,
    tagline: "Només una vegada l'any",
    desc: "Fermentació mixta: Pura Pale amb Lambic, envellida en bóta de roure 9 mesos i fins a l'any en ampolla. Cervesa de temporada.",
    pairing: "Abans dels àpats, amb formatges forts, olives i marisc. Recomanable en porró.",
    malts: "Pale",
    hops: "—",
    specs: [
      { label: "ABV", value: "5.5%" },
      { label: "Bóta", value: "Roure" },
      { label: "Guarda", value: "9 mesos" },
      { label: "Format", value: "75 cl" },
    ],
    label: "/setembreetiqueta.jpg",
  },
  {
    id: "setembre-nadal",
    name: "Setembre Nadal",
    style: "Especial Nadal",
    tone: "special",
    special: true,
    tagline: "Amb moscatell",
    desc: "Maceració de Setembre de l'anyada anterior amb raïm moscatell.",
    pairing: "Postres i sobretaula de festa.",
    malts: "Pale",
    hops: "—",
    specs: [
      { label: "Raïm", value: "Moscatell" },
      { label: "Format", value: "75 cl" },
    ],
    // Comparteix etiqueta amb la Setembre normal
    label: "/setembreetiqueta.jpg",
  },
  {
    id: "barrica",
    name: "Barrica",
    style: "Barrel-aged",
    tone: "special",
    special: true,
    tagline: "Bóta de roure 9–12 mesos",
    desc: "Pura Pale amb una segona fermentació i maduració en bóta de roure de 9 a 12 mesos, i una guarda després de l'embotellat d'un any.",
    pairing: "De meditació; formatges curats i embotits.",
    malts: "Pale",
    hops: "—",
    specs: [
      { label: "Bóta", value: "Roure" },
      { label: "Guarda", value: "≤ 24 mesos" },
      { label: "Format", value: "75 cl" },
    ],
    label: "/barrica%20negraetiqueta.jpg",
  },
  {
    id: "barrica-merlot",
    name: "Barrica Merlot",
    style: "Barrel-aged",
    tone: "special",
    special: true,
    tagline: "Amb merlot",
    desc: "Maceració de la cervesa Barrica amb raïm merlot.",
    pairing: "Carns a la brasa i guisats.",
    malts: "Pale",
    hops: "—",
    specs: [
      { label: "Raïm", value: "Merlot" },
      { label: "Format", value: "75 cl" },
    ],
    label: "/barrica%20burdeosetiqueta.jpg",
  },
];

export function findBeer(id: string): Beer {
  const fallback = BEERS[0] as Beer;
  return BEERS.find((b) => b.id === id) ?? fallback;
}

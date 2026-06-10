import * as React from "react";
import { SpecItem } from "./SpecList";

/**
 * Product card built like a bottle label — colored cap band + spec line.
 * @startingPoint section="Product" subtitle="Bottle-label product card" viewport="360x440"
 */
export interface BeerCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Beer name, set in display type on the label cap. */
  name: string;
  /** Style descriptor, e.g. "Pale Ale". */
  style?: string;
  description?: string;
  /** Spec rows for the typewriter line (ABV/IBU/format). */
  specs?: SpecItem[];
  /** Beer family — sets the cap color. @default "pale" */
  tone?: "pale" | "amber" | "brown" | "wheat" | "special";
  /** Mark as a once-a-year special (merlot cap + tag). @default false */
  special?: boolean;
  /** Optional footer node (e.g. a Button). */
  footer?: React.ReactNode;
}

export function BeerCard(props: BeerCardProps): JSX.Element;

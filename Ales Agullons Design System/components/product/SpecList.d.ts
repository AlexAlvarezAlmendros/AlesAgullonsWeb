import * as React from "react";

export interface SpecItem {
  label: string;
  value: string;
}

export interface SpecListProps extends React.HTMLAttributes<HTMLElement> {
  /** Spec rows, e.g. [{ label: "ABV", value: "5.2%" }]. */
  items: SpecItem[];
  /** Inline run or stacked definition list. @default "row" */
  layout?: "row" | "stack";
  /** Invert colors for dark grounds. @default false */
  onDark?: boolean;
}

/** Typewriter spec line for beer data (ABV, IBU, format, malts). */
export function SpecList(props: SpecListProps): JSX.Element;

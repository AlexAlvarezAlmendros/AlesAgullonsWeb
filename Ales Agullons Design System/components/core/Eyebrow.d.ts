import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Show flanking hairlines (centered label look). @default false */
  rules?: boolean;
  /** @default "accent" */
  tone?: "accent" | "gold" | "ink" | "paper";
  /** @default "left" */
  align?: "left" | "center";
}

/** Uppercase, wide-tracked overline that sits above headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;

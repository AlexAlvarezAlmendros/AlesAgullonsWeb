import * as React from "react";

/**
 * Letterpress-style call-to-action button in the Ales Agullons palette.
 * @startingPoint section="Core" subtitle="Letterpress CTA — barley/brown/merlot" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "deep" | "merlot" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;

import type { HTMLAttributes } from "react";

export type EyebrowTone = "accent" | "gold" | "ink" | "paper";

export interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
  rules?: boolean;
  tone?: EyebrowTone;
  align?: "left" | "center";
}

/**
 * Ales Agullons — Eyebrow / overline
 * Uppercase, wide-tracked label that sits above headings.
 * Optional flanking rules for the centered "label" treatment.
 */
export function Eyebrow({ children, rules = false, tone = "accent", align = "left", style, ...rest }: EyebrowProps) {
  const colors: Record<EyebrowTone, string> = {
    accent: "var(--merlot-700)",
    gold: "var(--barley-500)",
    ink: "var(--ink-700)",
    paper: "var(--paper-300)",
  };
  const color = colors[tone];
  const label = (
    <span
      style={{
        fontFamily: "var(--font-label)",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
  if (!rules) {
    return <div style={{ textAlign: align, ...style }} {...rest}>{label}</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        justifyContent: align === "center" ? "center" : "flex-start",
        ...style,
      }}
      {...rest}
    >
      <span style={{ height: "1.5px", width: "44px", background: color, opacity: 0.6 }} />
      {label}
      <span style={{ height: "1.5px", width: "44px", background: color, opacity: 0.6 }} />
    </div>
  );
}

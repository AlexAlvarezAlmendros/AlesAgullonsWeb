import type { HTMLAttributes } from "react";

export type TagTone = "default" | "brown" | "vine" | "merlot" | "plain";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone;
  outline?: boolean;
}

/**
 * Ales Agullons — Tag / tasting chip
 * Small pill for beer styles, hop varieties, pairings. Tone maps to
 * the palette: gold (default), brown (dark ales), vine, merlot (specials).
 */
export function Tag({ children, tone = "default", outline = false, style, ...rest }: TagProps) {
  const tones: Record<TagTone, { bg: string; fg: string; bd: string }> = {
    default: { bg: "var(--barley-300)", fg: "var(--ink-900)", bd: "var(--barley-500)" },
    brown:   { bg: "var(--brown-700)", fg: "var(--paper-200)", bd: "var(--brown-700)" },
    vine:    { bg: "var(--vine-600)", fg: "var(--paper-100)", bd: "var(--vine-600)" },
    merlot:  { bg: "var(--merlot-700)", fg: "var(--paper-100)", bd: "var(--merlot-700)" },
    plain:   { bg: "var(--paper-300)", fg: "var(--ink-800)", bd: "var(--line-soft)" },
  };
  const t = tones[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-label)",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        lineHeight: 1,
        whiteSpace: "nowrap",
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        color: outline ? t.bd : t.fg,
        background: outline ? "transparent" : t.bg,
        border: `1.5px solid ${t.bd}`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

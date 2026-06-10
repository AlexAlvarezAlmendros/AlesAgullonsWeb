import { useState } from "react";
import type { ButtonHTMLAttributes, CSSProperties } from "react";

export type ButtonVariant = "primary" | "deep" | "merlot" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

/**
 * Ales Agullons — Button
 * Letterpress-feeling button. Primary = barley gold, deep = roasted
 * brown, outline = ink hairline on paper, ghost = text-only.
 * Press state insets like type pressed into paper.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
  style,
  ...rest
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);

  const sizes: Record<ButtonSize, CSSProperties> = {
    sm: { padding: "8px 16px", fontSize: "13px" },
    md: { padding: "12px 24px", fontSize: "15px" },
    lg: { padding: "16px 34px", fontSize: "17px" },
  };

  const palette: Record<ButtonVariant, { bg: string; bgHover: string; fg: string; border: string }> = {
    primary: { bg: "var(--barley-500)", bgHover: "var(--amber-500)", fg: "var(--ink-900)", border: "var(--ink-800)" },
    deep:    { bg: "var(--brown-700)", bgHover: "var(--stout-900)", fg: "var(--paper-200)", border: "var(--stout-900)" },
    merlot:  { bg: "var(--merlot-700)", bgHover: "var(--merlot-600)", fg: "var(--paper-200)", border: "var(--stout-900)" },
    outline: { bg: "transparent", bgHover: "var(--paper-300)", fg: "var(--ink-900)", border: "var(--ink-700)" },
    ghost:   { bg: "transparent", bgHover: "var(--paper-300)", fg: "var(--brown-700)", border: "transparent" },
  };
  const p = palette[variant];

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-label)",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    lineHeight: 1,
    whiteSpace: "nowrap",
    color: p.fg,
    background: hover && !disabled ? p.bgHover : p.bg,
    border: `1.5px solid ${p.border}`,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    boxShadow: pressed && !disabled ? "var(--shadow-press)" : "var(--shadow-xs)",
    transform: pressed && !disabled ? "translateY(1px)" : "none",
    transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    ...sizes[size],
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={base}
      {...rest}
    >
      {children}
    </button>
  );
}

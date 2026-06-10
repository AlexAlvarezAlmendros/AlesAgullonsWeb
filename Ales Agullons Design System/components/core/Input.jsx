import React from "react";

/**
 * Ales Agullons — Input
 * Text field styled like a form on kraft paper: cream field, ink
 * hairline that deepens to gold on focus, letterpress inset.
 */
export function Input({ label, hint, type = "text", id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-700)",
        }}>{label}</label>
      )}
      <input
        id={inputId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "15px",
          color: "var(--ink-900)",
          background: "var(--paper-100)",
          border: `1.5px solid ${focus ? "var(--barley-500)" : "var(--line-soft)"}`,
          borderRadius: "var(--radius-sm)",
          padding: "11px 13px",
          outline: "none",
          boxShadow: focus ? "var(--shadow-press)" : "none",
          transition: "border-color var(--dur-fast) var(--ease-standard)",
          ...style,
        }}
        {...rest}
      />
      {hint && (
        <span style={{ fontFamily: "var(--font-text)", fontSize: "12px", color: "var(--ink-600)" }}>{hint}</span>
      )}
    </div>
  );
}

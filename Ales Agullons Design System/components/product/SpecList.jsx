import React from "react";

/**
 * Ales Agullons — SpecList
 * Typewriter spec line for product data (ABV, IBU, format, malts…).
 * Pass an array of { label, value } items. Inline row or stacked.
 */
export function SpecList({ items = [], layout = "row", onDark = false, style, ...rest }) {
  const labelColor = onDark ? "var(--paper-400)" : "var(--ink-500)";
  const valueColor = onDark ? "var(--paper-100)" : "var(--ink-900)";
  const divider = onDark ? "var(--paper-400)" : "var(--line-soft)";

  if (layout === "row") {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontFamily: "var(--font-spec)", ...style }} {...rest}>
        {items.map((it, i) => (
          <span key={i} style={{ fontSize: "13px", color: labelColor, letterSpacing: "0.04em" }}>
            {it.label}{" "}
            <b style={{ color: valueColor, fontWeight: 700 }}>{it.value}</b>
          </span>
        ))}
      </div>
    );
  }
  return (
    <dl style={{ margin: 0, fontFamily: "var(--font-spec)", ...style }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: "flex", justifyContent: "space-between", gap: "16px",
          padding: "7px 0", borderBottom: i < items.length - 1 ? `1px solid ${divider}` : "none",
        }}>
          <dt style={{ fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: labelColor }}>{it.label}</dt>
          <dd style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: valueColor, textAlign: "right" }}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

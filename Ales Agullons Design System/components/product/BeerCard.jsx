import React from "react";
import { Tag } from "../core/Tag.jsx";
import { SpecList } from "./SpecList.jsx";

/**
 * Ales Agullons — BeerCard
 * Product card built like a bottle label: a colored "cap" band with
 * the beer name set in display type, then style, description and a
 * typewriter spec line on cream stock. `tone` follows the beer family.
 */
export function BeerCard({
  name,
  style: styleLabel,
  description,
  specs = [],
  tone = "pale",
  special = false,
  footer,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const caps = {
    pale:   { bg: "var(--barley-300)", fg: "var(--ink-900)", tag: "default" },
    amber:  { bg: "var(--amber-500)", fg: "var(--paper-100)", tag: "default" },
    brown:  { bg: "var(--brown-700)", fg: "var(--paper-100)", tag: "brown" },
    wheat:  { bg: "var(--barley-200)", fg: "var(--ink-900)", tag: "plain" },
    special:{ bg: "var(--merlot-700)", fg: "var(--paper-100)", tag: "merlot" },
  };
  const c = caps[special ? "special" : tone] || caps.pale;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        border: "1.5px solid var(--surface-card-edge)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      }}
      {...rest}
    >
      {/* Cap / label band */}
      <div style={{
        background: c.bg, color: c.fg, padding: "22px 22px 18px", textAlign: "center",
        borderBottom: "3px double var(--ink-800)",
      }}>
        {special && (
          <div style={{
            fontFamily: "var(--font-label)", fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85, marginBottom: "6px",
          }}>Edició especial</div>
        )}
        <div style={{ fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 0.95 }}>{name}</div>
        {styleLabel && (
          <div style={{ fontFamily: "var(--font-text)", fontStyle: "italic", fontSize: "14px", marginTop: "4px", opacity: 0.92 }}>{styleLabel}</div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "18px 22px 22px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
        {styleLabel && <div><Tag tone={c.tag}>{styleLabel}</Tag></div>}
        {description && (
          <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "15px", lineHeight: 1.6, color: "var(--ink-700)" }}>{description}</p>
        )}
        {specs.length > 0 && (
          <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid var(--line-faint)" }}>
            <SpecList items={specs} />
          </div>
        )}
        {footer}
      </div>
    </article>
  );
}

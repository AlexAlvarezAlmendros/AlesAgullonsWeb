import { useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Tag } from "./Tag.tsx";
import type { TagTone } from "./Tag.tsx";
import { SpecList } from "./SpecList.tsx";
import type { SpecItem } from "./SpecList.tsx";

export type BeerTone = "pale" | "amber" | "brown" | "wheat" | "special";

export interface BeerCardProps extends Omit<HTMLAttributes<HTMLElement>, "style"> {
  name: string;
  styleLabel?: string;
  description?: string;
  specs?: SpecItem[];
  tone?: BeerTone;
  special?: boolean;
  /** Bottle PNG (shown floating on parchment) or label art (shown full-bleed). */
  image?: string;
  imageAlt?: string;
  imageFit?: "contain" | "cover";
  footer?: ReactNode;
}

/**
 * Ales Agullons — BeerCard
 * Product card built like a bottle label: a colored "cap" band with
 * the beer name set in display type, an optional photo band (bottle
 * or label art), then style, description and a typewriter spec line
 * on cream stock. `tone` follows the beer family.
 */
export function BeerCard({
  name,
  styleLabel,
  description,
  specs = [],
  tone = "pale",
  special = false,
  image,
  imageAlt,
  imageFit = "contain",
  footer,
  ...rest
}: BeerCardProps) {
  const [hover, setHover] = useState(false);

  const caps: Record<BeerTone, { bg: string; fg: string; tag: TagTone }> = {
    pale:    { bg: "var(--barley-300)", fg: "var(--ink-900)", tag: "default" },
    amber:   { bg: "var(--amber-500)", fg: "var(--paper-100)", tag: "default" },
    brown:   { bg: "var(--brown-700)", fg: "var(--paper-100)", tag: "brown" },
    wheat:   { bg: "var(--barley-200)", fg: "var(--ink-900)", tag: "plain" },
    special: { bg: "var(--merlot-700)", fg: "var(--paper-100)", tag: "merlot" },
  };
  const c = caps[special ? "special" : tone];

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
      <div
        style={{
          background: c.bg,
          color: c.fg,
          padding: "22px 22px 18px",
          textAlign: "center",
          borderBottom: "3px double var(--ink-800)",
        }}
      >
        {special && (
          <div
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.85,
              marginBottom: "6px",
            }}
          >
            Edició especial
          </div>
        )}
        <div style={{ fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 0.95 }}>{name}</div>
        {styleLabel && (
          <div style={{ fontFamily: "var(--font-text)", fontStyle: "italic", fontSize: "14px", marginTop: "4px", opacity: 0.92 }}>
            {styleLabel}
          </div>
        )}
      </div>

      {/* Photo band — bottle on parchment, or label art full-bleed */}
      {image && (
        <div
          className="paper-grain"
          style={{
            background: "var(--paper-300)",
            borderBottom: "1px solid var(--line-faint)",
            display: "flex",
            justifyContent: "center",
            padding: imageFit === "contain" ? "18px 0 12px" : 0,
          }}
        >
          <img
            src={image}
            alt={imageAlt ?? name}
            style={
              imageFit === "contain"
                ? { height: 180, objectFit: "contain", filter: "drop-shadow(0 6px 10px rgba(42,27,16,0.28))" }
                : { width: "100%", height: 160, objectFit: "cover", display: "block" }
            }
          />
        </div>
      )}

      {/* Body */}
      <div style={{ padding: "18px 22px 22px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
        {styleLabel && (
          <div>
            <Tag tone={c.tag}>{styleLabel}</Tag>
          </div>
        )}
        {description && (
          <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "15px", lineHeight: 1.6, color: "var(--ink-700)" }}>
            {description}
          </p>
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

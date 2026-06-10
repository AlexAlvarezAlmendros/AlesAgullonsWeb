import type { CSSProperties } from "react";

export interface PhotoProps {
  src: string;
  alt: string;
  height?: number;
  caption?: string;
  style?: CSSProperties;
}

/**
 * Warm photography block — replaces the design-system PhotoSlot
 * placeholder with the real imagery of the masia.
 */
export function Photo({ src, alt, height = 280, caption, style }: PhotoProps) {
  return (
    <figure style={{ margin: 0, ...style }}>
      <img
        src={src}
        alt={alt}
        style={{
          display: "block",
          width: "100%",
          height,
          objectFit: "cover",
          borderRadius: "var(--radius-md)",
          border: "1.5px solid rgba(42,27,16,0.25)",
          boxShadow: "var(--shadow-md)",
        }}
      />
      {caption && (
        <figcaption
          style={{
            fontFamily: "var(--font-text)",
            fontStyle: "italic",
            fontSize: "13px",
            color: "var(--ink-600)",
            marginTop: "8px",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

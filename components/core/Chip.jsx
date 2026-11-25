import React from "react";

/** Chip — a selectable filter token. Capsule, ultrathin glass when over media. */
export function Chip({ selected = false, glass = false, leading, children, style, ...rest }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 6,
    height: 32, padding: "0 14px", borderRadius: "var(--radius-full)",
    fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)",
    transition: "var(--t-hover), transform var(--dur-instant) var(--ease-out)",
    cursor: "pointer", whiteSpace: "nowrap",
  };
  const skin = selected
    ? { background: "var(--tint)", color: "var(--text-on-tint)" }
    : glass
      ? {
          background: "var(--material-ultrathin)",
          WebkitBackdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
          backdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
          color: "var(--text-on-media)", boxShadow: "var(--specular-rim)",
        }
      : { background: "var(--fill-4)", color: "var(--text-primary)" };

  return (
    <button
      type="button"
      aria-pressed={selected}
      onPointerDown={(e) => (e.currentTarget.style.transform = "scale(var(--press-scale))")}
      onPointerUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onPointerLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      style={{ ...base, ...skin, ...style }}
      {...rest}
    >
      {leading}{children}
    </button>
  );
}

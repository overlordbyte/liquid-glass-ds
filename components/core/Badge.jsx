import React from "react";

/** Badge — a count or short status, always a capsule. */
export function Badge({ tone = "neutral", size = "md", children, style, ...rest }) {
  const tones = {
    neutral: { background: "var(--fill-2)", color: "var(--text-secondary)" },
    tint: { background: "var(--tint)", color: "var(--text-on-tint)" },
    success: { background: "var(--status-success)", color: "#fff" },
    warning: { background: "var(--status-warning)", color: "#fff" },
    danger: { background: "var(--status-danger)", color: "#fff" },
    glass: {
      background: "var(--material-ultrathin)",
      WebkitBackdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
      backdropFilter: "blur(var(--blur-sm)) saturate(var(--saturate-glass))",
      color: "var(--text-on-media)",
      boxShadow: "var(--specular-rim)",
    },
  };
  const dims = size === "sm"
    ? { height: 16, padding: "0 6px", fontSize: "var(--size-11)" }
    : { height: 20, padding: "0 8px", fontSize: "var(--size-12)" };

  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        minWidth: dims.height, borderRadius: "var(--radius-full)",
        fontWeight: "var(--weight-semibold)", fontVariantNumeric: "tabular-nums",
        ...dims, ...tones[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

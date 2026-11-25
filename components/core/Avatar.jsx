import React from "react";

/** Avatar — circular identity token with an initials fallback. */
export function Avatar({ src, name = "", size = 36, ring = false, style, ...rest }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
  return (
    <span
      role="img"
      aria-label={name || undefined}
      style={{
        display: "grid", placeItems: "center", flex: "0 0 auto",
        width: size, height: size, borderRadius: "var(--radius-avatar)",
        background: src ? "transparent" : "var(--fill-2)",
        color: "var(--text-secondary)",
        fontSize: Math.max(10, Math.round(size * 0.38)),
        fontWeight: "var(--weight-semibold)",
        overflow: "hidden",
        boxShadow: ring ? "0 0 0 2px var(--surface-page), 0 0 0 4px var(--tint)" : "var(--specular-rim)",
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : initials}
    </span>
  );
}

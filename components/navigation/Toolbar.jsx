import React from "react";

/** Toolbar — floating capsule of actions on thin material. */
export function Toolbar({ position = "bottom", children, style, ...rest }) {
  const pos = position === "bottom"
    ? { bottom: "calc(var(--safe-bottom) + 16px)" }
    : { top: "calc(var(--safe-top) + 16px)" };
  return (
    <div
      role="toolbar"
      style={{
        position: "absolute", left: "50%", transform: "translateX(-50%)",
        zIndex: "var(--z-chrome)", display: "flex", alignItems: "center", gap: 4,
        padding: 4, borderRadius: "var(--radius-full)",
        background: "var(--material-regular)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        boxShadow: "var(--specular)",
        ...pos, ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

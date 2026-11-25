import React from "react";

/** Toast — capsule glass notice, floats at the top edge. Self-dismissing. */
export function Toast({ open = false, message, icon, tone = "neutral", style, ...rest }) {
  if (!open) return null;
  const colors = {
    neutral: "var(--text-primary)",
    success: "var(--status-success)",
    danger: "var(--status-danger)",
  };
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "absolute", top: "calc(var(--safe-top) + 12px)", left: "50%",
        transform: "translateX(-50%)", zIndex: "var(--z-toast)",
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 18px", maxWidth: "calc(100% - 32px)",
        background: "var(--material-thick)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        borderRadius: "var(--radius-full)",
        boxShadow: "var(--specular)",
        fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)",
        animation: "lg-toast-in var(--dur-base) var(--ease-spring)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ color: colors[tone], display: "grid", placeItems: "center" }}>{icon}</span>
      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{message}</span>
    </div>
  );
}

import React from "react";

/** Dialog — centred alert. Thick material so the copy stays legible. */
export function Dialog({ open = false, title, message, actions, onClose, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: "var(--z-sheet)", display: "grid", placeItems: "center" }} role="presentation">
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.32)" }} />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        style={{
          position: "relative", width: 272, textAlign: "center", overflow: "hidden",
          background: "var(--surface-panel)",
          WebkitBackdropFilter: "var(--backdrop-thick)",
          backdropFilter: "var(--backdrop-thick)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--specular)",
          animation: "lg-dialog-in var(--dur-base) var(--ease-spring)",
          ...style,
        }}
        {...rest}
      >
        <div style={{ padding: "20px 16px 16px" }}>
          {title && <h2 style={{ fontSize: "var(--size-17)", fontWeight: "var(--weight-semibold)", marginBottom: 4 }}>{title}</h2>}
          {message && <p style={{ fontSize: "var(--size-13)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)" }}>{message}</p>}
        </div>
        <div style={{ display: "flex", borderTop: "var(--border-hairline)" }}>
          {(actions || []).map((a, i) => (
            <button
              key={a.label}
              type="button"
              onClick={a.onPress}
              style={{
                flex: 1, height: 44,
                borderLeft: i > 0 ? "var(--border-hairline)" : "none",
                fontSize: "var(--size-17)",
                fontWeight: a.emphasis === "primary" ? "var(--weight-semibold)" : "var(--weight-regular)",
                color: a.emphasis === "destructive" ? "var(--status-danger)" : "var(--tint)",
              }}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

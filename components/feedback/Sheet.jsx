import React from "react";

/**
 * Sheet — modal presented from the bottom edge. Regular material, 30px backdrop
 * blur, 16px top corners, detents at 50% and 100%. The grabber is the only
 * chrome; the scrim behind is a plain dim, never a blur.
 */
export function Sheet({ open = false, onClose, detent = "half", title, children, style, ...rest }) {
  const heights = { half: "50%", full: "92%", content: "auto" };
  if (!open) return null;
  return (
    <div
      style={{
        position: "absolute", inset: 0, zIndex: "var(--z-sheet)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
      }}
      role="presentation"
    >
      <div
        onClick={onClose}
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.32)", animation: "lg-fade-in var(--dur-base) var(--ease-standard)" }}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          position: "relative", width: "100%", maxWidth: 560,
          height: heights[detent], maxHeight: "92%",
          background: "var(--surface-sheet)",
          WebkitBackdropFilter: "var(--backdrop-regular)",
          backdropFilter: "var(--backdrop-regular)",
          borderTopLeftRadius: "var(--radius-sheet)",
          borderTopRightRadius: "var(--radius-sheet)",
          boxShadow: "var(--specular-top), var(--specular-rim)",
          paddingBottom: "var(--safe-bottom)",
          animation: "lg-sheet-in var(--dur-slow) var(--ease-standard)",
          overflow: "hidden", display: "flex", flexDirection: "column",
          ...style,
        }}
        {...rest}
      >
        <div style={{ display: "grid", placeItems: "center", paddingTop: 8, flex: "0 0 auto" }}>
          <span style={{ width: 36, height: 5, borderRadius: "var(--radius-full)", background: "var(--fg-4)" }} />
        </div>
        {title && (
          <header style={{ padding: "8px 20px 12px", textAlign: "center" }}>
            <h2 style={{ fontSize: "var(--size-17)", fontWeight: "var(--weight-semibold)" }}>{title}</h2>
          </header>
        )}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 20px 20px" }}>{children}</div>
      </section>
    </div>
  );
}

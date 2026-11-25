import React from "react";

/** Card — opaque elevated container. 14px radius, no border, no heavy shadow. */
export function Card({ padding = "md", interactive = false, children, style, ...rest }) {
  const pads = { none: 0, sm: "var(--space-3)", md: "var(--space-4)", lg: "var(--space-6)" };
  return (
    <div
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-card)",
        padding: pads[padding],
        boxShadow: "var(--shadow-raised)",
        transition: "var(--t-hover), transform var(--dur-fast) var(--ease-out)",
        cursor: interactive ? "pointer" : undefined,
        ...style,
      }}
      onPointerDown={interactive ? (e) => (e.currentTarget.style.transform = "scale(var(--press-scale-large))") : undefined}
      onPointerUp={interactive ? (e) => (e.currentTarget.style.transform = "scale(1)") : undefined}
      onPointerLeave={interactive ? (e) => (e.currentTarget.style.transform = "scale(1)") : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}

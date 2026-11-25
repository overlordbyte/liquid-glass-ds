import React from "react";

/** Alert — inline status block. Tinted wash, never a coloured left border. */
export function Alert({ tone = "info", title, children, action, style, ...rest }) {
  const tones = {
    info: "var(--status-info)",
    success: "var(--status-success)",
    warning: "var(--status-warning)",
    danger: "var(--status-danger)",
  };
  const c = tones[tone];
  return (
    <div
      role={tone === "danger" ? "alert" : "status"}
      style={{
        display: "flex", gap: 12, padding: "var(--space-3) var(--space-4)",
        background: `color-mix(in srgb, ${c} 10%, transparent)`,
        borderRadius: "var(--radius-md)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: c, marginTop: 7, flex: "0 0 auto" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: "var(--size-15)", fontWeight: "var(--weight-semibold)", marginBottom: 2 }}>{title}</div>}
        {children && <div style={{ fontSize: "var(--size-13)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)" }}>{children}</div>}
      </div>
      {action}
    </div>
  );
}

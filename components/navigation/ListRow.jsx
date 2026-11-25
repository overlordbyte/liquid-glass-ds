import React from "react";

/** ListRow — one row in a grouped list. */
export function ListRow({ leading, title, subtitle, value, trailing, chevron = false, destructive = false, onClick, style, ...rest }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 12, width: "100%",
        minHeight: "var(--target-touch)", padding: "10px var(--space-4)",
        textAlign: "left", background: "transparent",
        cursor: onClick ? "pointer" : "default",
        transition: "background-color var(--dur-fast) var(--ease-standard)",
        color: destructive ? "var(--status-danger)" : "var(--text-primary)",
        ...style,
      }}
      {...rest}
    >
      {leading && <span style={{ display: "grid", placeItems: "center", flex: "0 0 auto" }}>{leading}</span>}
      <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 1 }}>
        <span style={{ fontSize: "var(--size-17)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
        {subtitle && <span style={{ fontSize: "var(--size-13)", color: "var(--text-secondary)" }}>{subtitle}</span>}
      </span>
      {value && <span style={{ fontSize: "var(--size-17)", color: "var(--text-tertiary)", flex: "0 0 auto" }}>{value}</span>}
      {trailing}
      {chevron && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--fg-4)", flex: "0 0 auto" }}>
          <polyline points="9 6 15 12 9 18" />
        </svg>
      )}
    </Tag>
  );
}

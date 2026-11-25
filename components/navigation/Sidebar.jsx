import React from "react";

/** Sidebar — 240px desktop rail on regular material; split is 240/flex. */
export function Sidebar({ header, sections = [], value, onChange, footer, style, ...rest }) {
  return (
    <aside
      style={{
        width: "var(--sidebar-width)", flex: "0 0 auto",
        display: "flex", flexDirection: "column",
        height: "100%", overflow: "hidden",
        background: "var(--surface-sheet)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        boxShadow: "inset -0.5px 0 0 var(--separator)",
        ...style,
      }}
      {...rest}
    >
      {header && <div style={{ padding: "var(--space-3) var(--space-3) var(--space-2)" }}>{header}</div>}
      <nav style={{ flex: 1, overflowY: "auto", padding: "0 var(--space-2) var(--space-3)" }}>
        {sections.map((s) => (
          <div key={s.title || "_"} style={{ marginBottom: "var(--space-4)" }}>
            {s.title && (
              <div style={{ padding: "var(--space-2) var(--space-2) var(--space-1)", fontSize: "var(--size-11)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-tertiary)" }}>
                {s.title}
              </div>
            )}
            {s.items.map((it) => {
              const active = it.value === value;
              return (
                <button
                  key={it.value}
                  type="button"
                  onClick={() => onChange && onChange(it.value)}
                  style={{
                    display: "flex", alignItems: "center", gap: 9, width: "100%",
                    height: "var(--target-dense)", padding: "0 var(--space-2)",
                    borderRadius: "var(--radius-xs)",
                    background: active ? "color-mix(in srgb, var(--tint) 16%, transparent)" : "transparent",
                    color: active ? "var(--tint)" : "var(--text-primary)",
                    fontSize: "var(--size-13)",
                    fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)",
                    transition: "var(--t-hover)",
                    textAlign: "left",
                  }}
                >
                  <span style={{ display: "grid", placeItems: "center", color: active ? "var(--tint)" : "var(--text-secondary)" }}>{it.icon}</span>
                  <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.label}</span>
                  {it.badge}
                </button>
              );
            })}
          </div>
        ))}
      </nav>
      {footer && <div style={{ padding: "var(--space-2) var(--space-3)", borderTop: "var(--border-hairline)" }}>{footer}</div>}
    </aside>
  );
}


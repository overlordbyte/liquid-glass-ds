import React from "react";

/** TabBar — bottom chrome on thin material. Icon over an 11px label, tint when active. */
export function TabBar({ items = [], value, onChange, style, ...rest }) {
  return (
    <nav
      role="tablist"
      style={{
        position: "sticky", bottom: 0, zIndex: "var(--z-chrome)",
        display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        paddingBottom: "var(--safe-bottom)",
        background: "var(--surface-chrome)",
        WebkitBackdropFilter: "var(--backdrop-thin)",
        backdropFilter: "var(--backdrop-thin)",
        boxShadow: "inset 0 0.5px 0 var(--separator)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(it.value)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              height: "var(--tabbar-height)", justifyContent: "center",
              color: active ? "var(--tint)" : "var(--text-tertiary)",
              transition: "color var(--dur-fast) var(--ease-standard)",
            }}
          >
            <span style={{ display: "grid", placeItems: "center", height: 24 }}>{it.icon}</span>
            <span style={{ fontSize: "var(--size-11)", fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)" }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

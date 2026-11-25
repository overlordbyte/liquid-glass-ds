import React from "react";

/**
 * NavBar — thin material floating over content. The large title collapses from
 * 34px to 17px on scroll; the hairline only appears once content is behind it.
 */
export function NavBar({ title, largeTitle = false, collapsed = false, leading, trailing, below, style, ...rest }) {
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: "var(--z-chrome)",
        paddingTop: "var(--safe-top)",
        background: "var(--surface-chrome)",
        WebkitBackdropFilter: "var(--backdrop-thin)",
        backdropFilter: "var(--backdrop-thin)",
        borderBottom: collapsed ? "var(--border-hairline)" : "1px solid transparent",
        transition: "border-color var(--dur-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, height: "var(--navbar-height)", padding: "0 var(--space-2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 2, minWidth: 44 }}>{leading}</div>
        <div style={{ flex: 1, textAlign: "center", minWidth: 0 }}>
          {(!largeTitle || collapsed) && (
            <h1 style={{
              fontSize: "var(--size-17)", fontWeight: "var(--weight-semibold)",
              letterSpacing: "var(--tracking-body)",
              opacity: largeTitle && !collapsed ? 0 : 1,
              transition: "opacity var(--dur-base) var(--ease-standard)",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>{title}</h1>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2, minWidth: 44, justifyContent: "flex-end" }}>{trailing}</div>
      </div>
      {largeTitle && !collapsed && (
        <div style={{ padding: "0 var(--inset-screen) var(--space-2)" }}>
          <h1 style={{
            fontSize: "var(--size-34)", fontWeight: "var(--weight-bold)",
            letterSpacing: "var(--tracking-display)", lineHeight: "var(--leading-tight)",
            fontFamily: "var(--font-display)",
          }}>{title}</h1>
        </div>
      )}
      {below && <div style={{ padding: "0 var(--inset-screen) var(--space-3)" }}>{below}</div>}
    </header>
  );
}

import React from "react";

/** WindowChrome — desktop window shell: traffic lights, thin-material toolbar, 240/flex split. */
export function WindowChrome({ title, subtitle, toolbar, sidebar, inspector, children, style, ...rest }) {
  return (
    <div
      data-density="dense"
      style={{
        display: "flex", flexDirection: "column", overflow: "hidden",
        borderRadius: "var(--radius-2xl)",
        boxShadow: "var(--shadow-dragged)",
        /* The window itself is transparent so the sidebar, toolbar and
           inspector materials blur the desktop behind it. Only the content
           pane is opaque. */
        background: "transparent",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {sidebar}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <header style={{
            display: "flex", alignItems: "center", gap: 10,
            height: "var(--toolbar-height)", padding: "0 12px", flex: "0 0 auto",
            background: "var(--surface-chrome)",
            WebkitBackdropFilter: "var(--backdrop-thin)",
            backdropFilter: "var(--backdrop-thin)",
            boxShadow: "var(--shadow-hairline)",
          }}>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: "var(--size-13)", fontWeight: "var(--weight-semibold)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div>
              {subtitle && <div style={{ fontSize: "var(--size-11)", color: "var(--text-tertiary)" }}>{subtitle}</div>}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>{toolbar}</div>
          </header>
          <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
            <div style={{ flex: 1, minWidth: 0, overflow: "auto", background: "var(--surface-page)" }}>{children}</div>
            {inspector}
          </div>
        </div>
      </div>
    </div>
  );
}

/** TrafficLights — the three window controls. Sits at the top of the sidebar. */
export function TrafficLights() {
  return (
    <div style={{ display: "flex", gap: 8, padding: "12px 12px 6px" }}>
      {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
        <span key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, boxShadow: "inset 0 0 0 .5px rgba(0,0,0,.14)" }} />
      ))}
    </div>
  );
}

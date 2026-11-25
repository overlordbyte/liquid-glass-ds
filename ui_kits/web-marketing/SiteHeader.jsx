import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { Icon } from "../../components/core/Icon.jsx";

/** SiteHeader — a floating glass capsule, not a full-width bar. */
export function SiteHeader({ active = "Product", onNavigate }) {
  const links = ["Product", "Design", "Pricing", "Docs"];
  return (
    <header style={{
      position: "sticky", top: 16, zIndex: "var(--z-chrome)",
      display: "flex", justifyContent: "center", padding: "0 var(--inset-page)",
    }}>
      <nav style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: 6, paddingLeft: 18, borderRadius: "var(--radius-full)",
        background: "var(--material-regular)",
        WebkitBackdropFilter: "var(--backdrop-regular)",
        backdropFilter: "var(--backdrop-regular)",
        boxShadow: "var(--specular)",
        maxWidth: "100%", overflowX: "auto",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7, marginRight: 14, flex: "0 0 auto" }}>
          <Icon name="hexagon" size={18} color="var(--tint)" />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-15)", fontWeight: 700, letterSpacing: "var(--tracking-title)" }}>Prism</span>
        </span>
        {links.map((l) => (
          <button key={l} type="button" onClick={() => onNavigate && onNavigate(l)}
            style={{
              height: 32, padding: "0 14px", borderRadius: "var(--radius-full)", flex: "0 0 auto",
              fontSize: "var(--size-13)", fontWeight: active === l ? 600 : 500,
              color: active === l ? "var(--text-primary)" : "var(--text-secondary)",
              background: active === l ? "var(--fill-4)" : "transparent",
              transition: "var(--t-hover)",
            }}>{l}</button>
        ))}
        <Button size="sm" shape="capsule" style={{ marginLeft: 8, flex: "0 0 auto" }}>Get started</Button>
      </nav>
    </header>
  );
}

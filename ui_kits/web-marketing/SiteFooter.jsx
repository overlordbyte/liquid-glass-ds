import React from "react";
import { Icon } from "../../components/core/Icon.jsx";

const COLUMNS = [
  ["Product", ["Overview", "Components", "UI kits", "Changelog"]],
  ["Resources", ["Documentation", "Tokens reference", "Accessibility", "Support"]],
  ["Company", ["About", "Careers", "Contact", "Privacy"]],
];

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--surface-page)", padding: "56px var(--inset-page) 36px" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: 32 }}>
          <div>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon name="hexagon" size={20} color="var(--tint)" />
              <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-17)", fontWeight: 700 }}>Prism</span>
            </span>
            <p style={{ fontSize: "var(--size-13)", color: "var(--text-secondary)", marginTop: 10, maxWidth: 260, lineHeight: "var(--leading-relaxed)" }}>
              A translucent design system for interfaces that sit on top of real content.
            </p>
          </div>
          {COLUMNS.map(([title, items]) => (
            <div key={title}>
              <div style={{ fontSize: "var(--size-11)", fontWeight: 600, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 12 }}>{title}</div>
              <ul style={{ display: "grid", gap: 8 }}>
                {items.map((i) => (
                  <li key={i}><a href="#" style={{ fontSize: "var(--size-13)", color: "var(--text-secondary)" }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "var(--border-hairline)", marginTop: 32, paddingTop: 18, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: "var(--size-12)", color: "var(--text-tertiary)" }}>© 2026 Prism. A demonstration surface for the Liquid Glass design system.</span>
          <span style={{ display: "flex", gap: 14 }}>
            {["code-xml", "rss", "mail"].map((n) => <Icon key={n} name={n} size={16} color="var(--text-tertiary)" />)}
          </span>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { GlassPanel } from "../../components/core/GlassPanel.jsx";
import { Icon } from "../../components/core/Icon.jsx";

/** Hero — full-bleed wallpaper, centred display type, a glass stat strip. */
export function Hero() {
  return (
    <section style={{ padding: "96px var(--inset-page) 80px", textAlign: "center", color: "#fff" }}>
      <GlassPanel density="ultrathin" radius="capsule"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", marginBottom: 26 }}>
        <Icon name="sparkles" size={15} color="#fff" />
        <span style={{ fontSize: "var(--size-13)", fontWeight: 500, color: "#fff" }}>Version 3 is out</span>
        <Icon name="arrow-right" size={14} color="rgba(255,255,255,.7)" />
      </GlassPanel>

      <h1 style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6.4vw, 56px)",
        fontWeight: 600, letterSpacing: "var(--tracking-display)", lineHeight: 1.06,
        maxWidth: "18ch", marginInline: "auto",
      }}>
        Interfaces that let<br />the light through.
      </h1>

      <p style={{
        fontSize: "var(--size-22)", lineHeight: 1.4, color: "rgba(255,255,255,.72)",
        maxWidth: 560, marginInline: "auto", marginTop: 20, fontFamily: "var(--font-display)",
        fontWeight: 400, letterSpacing: "var(--tracking-title)",
      }}>
        A translucent design system — materials, depth and motion, shipped as tokens and components you can build on today.
      </p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
        <Button size="lg" shape="capsule">Start building</Button>
        <Button size="lg" shape="capsule" variant="glass" leading={<Icon name="play" size={17} />}>Watch the tour</Button>
      </div>

      <GlassPanel density="thin" radius="panel" float
        style={{ marginTop: 64, padding: "22px 12px", maxWidth: 820, marginInline: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {[["30", "components"], ["120+", "design tokens"], ["3", "UI kits"]].map(([n, l], i) => (
            <div key={l} style={{ textAlign: "center", boxShadow: i ? "inset 1px 0 0 var(--separator)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)", color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" }}>{n}</div>
              <div style={{ fontSize: "var(--size-13)", color: "var(--text-secondary)" }}>{l}</div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}

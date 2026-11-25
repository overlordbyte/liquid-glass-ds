import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { GlassPanel } from "../../components/core/GlassPanel.jsx";
import { SegmentedControl } from "../../components/forms/SegmentedControl.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Badge } from "../../components/core/Badge.jsx";

const PLANS = [
  { name: "Solo", monthly: 0, yearly: 0, blurb: "For one designer and a prototype.", features: ["All tokens", "30 components", "Community support"] },
  { name: "Studio", monthly: 24, yearly: 19, blurb: "For a team shipping product.", features: ["Everything in Solo", "3 UI kits", "Figma library", "Priority support"], featured: true },
  { name: "Enterprise", monthly: 0, yearly: 0, custom: true, blurb: "For brand systems at scale.", features: ["Everything in Studio", "Custom tint sets", "Design review", "SLA"] },
];

export function PricingSection() {
  const [cycle, setCycle] = React.useState("Yearly");
  return (
    <section style={{ padding: "var(--gap-chapter) var(--inset-page)", textAlign: "center", color: "#fff" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)" }}>
        Pricing
      </h2>
      <p style={{ fontSize: "var(--size-17)", color: "rgba(255,255,255,.7)", marginTop: 10 }}>
        Two months free on yearly. Cancel whenever.
      </p>

      <div style={{ width: 220, margin: "26px auto 36px" }}>
        <GlassPanel density="thin" radius="sm" style={{ padding: 3 }}>
          <SegmentedControl options={["Monthly", "Yearly"]} value={cycle} onChange={setCycle} />
        </GlassPanel>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(258px, 1fr))", gap: 18, maxWidth: 940, margin: "0 auto", textAlign: "left" }}>
        {PLANS.map((p) => {
          const price = cycle === "Yearly" ? p.yearly : p.monthly;
          return (
            <GlassPanel key={p.name} density={p.featured ? "thick" : "regular"} radius="panel" float={p.featured}
              style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "var(--size-17)", fontWeight: 600 }}>{p.name}</span>
                {p.featured && <Badge tone="tint">Most popular</Badge>}
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-44)", fontWeight: 700, letterSpacing: "var(--tracking-display)", fontVariantNumeric: "tabular-nums" }}>
                  {p.custom ? "Talk to us" : price === 0 ? "Free" : `$${price}`}
                </span>
                {!p.custom && price > 0 && <span style={{ fontSize: "var(--size-15)", color: "var(--text-tertiary)" }}> / seat / mo</span>}
              </div>
              <p style={{ fontSize: "var(--size-15)", color: "var(--text-secondary)" }}>{p.blurb}</p>
              <ul style={{ display: "grid", gap: 8, marginTop: 2 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: "var(--size-15)" }}>
                    <Icon name="check" size={17} color="var(--tint)" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button fullWidth size="lg" shape="capsule" variant={p.featured ? "primary" : "bordered"} style={{ marginTop: "auto" }}>
                {p.custom ? "Contact sales" : "Choose " + p.name}
              </Button>
            </GlassPanel>
          );
        })}
      </div>
    </section>
  );
}

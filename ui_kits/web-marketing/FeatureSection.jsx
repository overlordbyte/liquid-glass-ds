import React from "react";
import { Card } from "../../components/core/Card.jsx";
import { Icon } from "../../components/core/Icon.jsx";
import { Badge } from "../../components/core/Badge.jsx";

const FEATURES = [
  { icon: "layers", title: "Four material densities", body: "Ultrathin through thick, each with its own blur and saturation pass, so chrome stays legible over anything." , tint: "blue" },
  { icon: "palette", title: "Tokens, not hex codes", body: "Base values and semantic aliases. Rebind one custom property and the whole surface follows.", tint: "purple" },
  { icon: "moon", title: "Dark mode that holds up", body: "Dark glass flips to a dark body with a brighter rim — the highlight is what keeps it reading as glass.", tint: "indigo" },
  { icon: "gauge", title: "Motion with a budget", body: "Five durations, four easings. Everything travels on one axis or scales from its own origin.", tint: "green" },
  { icon: "accessibility", title: "Legible by default", body: "Focus halos instead of outlines, 44pt touch targets, and an opaque fallback when blur is unavailable.", tint: "orange" },
  { icon: "code", title: "Drop-in React", body: "Thirty components with prop contracts, no runtime dependencies beyond React itself.", tint: "teal" },
];

export function FeatureSection() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--gap-chapter) var(--inset-page)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <div style={{ maxWidth: 620, marginBottom: 44 }}>
          <Badge tone="tint">Foundations</Badge>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-34)", fontWeight: 700, letterSpacing: "var(--tracking-display)", lineHeight: 1.1, marginTop: 14 }}>
            Everything a translucent interface needs, already decided.
          </h2>
          <p style={{ fontSize: "var(--size-17)", color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)", marginTop: 12 }}>
            The hard calls — how thick the glass is, where the highlight sits, when a shadow is allowed — are made once and encoded as tokens.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
          {FEATURES.map((f) => (
            <Card key={f.title} padding="lg" className={`lg-tint-${f.tint}`} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{
                width: 38, height: 38, borderRadius: "var(--radius-md)", display: "grid", placeItems: "center",
                background: "color-mix(in srgb, var(--tint) 14%, transparent)",
              }}>
                <Icon name={f.icon} size={20} color="var(--tint)" />
              </span>
              <h3 style={{ fontSize: "var(--size-17)", fontWeight: 600, letterSpacing: "var(--tracking-body)" }}>{f.title}</h3>
              <p style={{ fontSize: "var(--size-15)", color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)" }}>{f.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

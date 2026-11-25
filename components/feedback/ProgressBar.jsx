import React from "react";

/** ProgressBar — determinate 4px capsule track. */
export function ProgressBar({ value = 0, max = 100, label, style, ...rest }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div style={{ width: "100%", ...style }} {...rest}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: "var(--size-12)", color: "var(--text-secondary)" }}>
          <span>{label}</span>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>{Math.round(pct)}%</span>
        </div>
      )}
      <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}
        style={{ height: 4, borderRadius: "var(--radius-full)", background: "var(--control-track-off)", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: "inherit", background: "var(--tint)", transition: "width var(--dur-base) var(--ease-standard)" }} />
      </div>
    </div>
  );
}

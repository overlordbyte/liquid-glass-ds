import React from "react";

/** Slider — thin capsule track, tint-filled to the knob. */
export function Slider({ value = 50, min = 0, max = 100, step = 1, onChange, leading, trailing, style, ...rest }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", ...style }}>
      {leading}
      <span style={{ position: "relative", flex: 1, height: 28, display: "flex", alignItems: "center" }}>
        <span style={{ position: "absolute", inset: "auto 0", height: 4, borderRadius: "var(--radius-full)", background: "var(--control-track-off)" }} />
        <span style={{ position: "absolute", left: 0, width: `${pct}%`, height: 4, borderRadius: "var(--radius-full)", background: "var(--tint)" }} />
        <span
          aria-hidden="true"
          style={{
            position: "absolute", left: `calc(${pct}% - 13px)`, width: 26, height: 26,
            borderRadius: "50%", background: "var(--control-knob)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.20), var(--specular-rim)",
            pointerEvents: "none",
          }}
        />
        <input
          type="range"
          min={min} max={max} step={step} value={value}
          onChange={(e) => onChange && onChange(Number(e.target.value))}
          style={{ position: "absolute", inset: 0, width: "100%", opacity: 0, cursor: "pointer", margin: 0 }}
          {...rest}
        />
      </span>
      {trailing}
    </div>
  );
}

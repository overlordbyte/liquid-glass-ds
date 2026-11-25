import React from "react";

/** Select — native picker in the inset-field skin, with a chevron affordance. */
export function Select({ label, options = [], value, onChange, hint, style, id, ...rest }) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", minWidth: 0 }}>
      {label && <label htmlFor={fieldId} style={{ fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" }}>{label}</label>}
      <span style={{ position: "relative", display: "block" }}>
        <select
          id={fieldId}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          style={{
            appearance: "none", WebkitAppearance: "none", width: "100%",
            height: "var(--control-lg)", padding: "0 38px 0 14px", border: 0,
            background: "var(--control-fill-input)", borderRadius: "var(--radius-input)",
            fontSize: "var(--size-17)", color: "var(--text-primary)", outline: "none",
            ...style,
          }}
          {...rest}
        >
          {options.map((o) => {
            const val = o.value ?? o;
            return <option key={val} value={val}>{o.label ?? o}</option>;
          })}
        </select>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-tertiary)", pointerEvents: "none" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
      {hint && <span style={{ fontSize: "var(--size-12)", color: "var(--text-tertiary)" }}>{hint}</span>}
    </div>
  );
}

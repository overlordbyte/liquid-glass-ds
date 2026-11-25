import React from "react";

/** Checkbox — 22px rounded square, tint fill with a check glyph when on. */
export function Checkbox({ checked = false, onChange, disabled = false, label, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "default" : "pointer", opacity: disabled ? "var(--disabled-opacity)" : 1, ...style }}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 22, height: 22, flex: "0 0 auto", display: "grid", placeItems: "center",
          borderRadius: 7,
          background: checked ? "var(--tint)" : "transparent",
          boxShadow: checked ? "none" : "inset 0 0 0 1.5px var(--fg-4)",
          transition: "var(--t-hover)",
        }}
        {...rest}
      >
        {checked && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
      {label && <span style={{ fontSize: "var(--size-17)" }}>{label}</span>}
    </label>
  );
}

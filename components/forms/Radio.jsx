import React from "react";

/** Radio — 22px circle; tint ring with a filled centre when selected. */
export function Radio({ checked = false, onChange, disabled = false, label, name, value, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "default" : "pointer", opacity: disabled ? "var(--disabled-opacity)" : 1, ...style }}>
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        name={name}
        value={value}
        disabled={disabled}
        onClick={() => onChange && onChange(value)}
        style={{
          width: 22, height: 22, flex: "0 0 auto", display: "grid", placeItems: "center",
          borderRadius: "50%",
          boxShadow: checked ? "inset 0 0 0 7px var(--tint)" : "inset 0 0 0 1.5px var(--fg-4)",
          background: "transparent",
          transition: "box-shadow var(--dur-fast) var(--ease-standard)",
        }}
        {...rest}
      />
      {label && <span style={{ fontSize: "var(--size-17)" }}>{label}</span>}
    </label>
  );
}

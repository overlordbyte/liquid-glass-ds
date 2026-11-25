import React from "react";

/** Switch — the platform toggle: 51×31 capsule track, white knob, tint when on. */
export function Switch({ checked = false, onChange, disabled = false, label, style, ...rest }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      style={{
        position: "relative", width: 51, height: 31, flex: "0 0 auto",
        borderRadius: "var(--radius-full)",
        background: checked ? "var(--tint)" : "var(--control-track-off)",
        transition: "background-color var(--dur-base) var(--ease-standard)",
        opacity: disabled ? "var(--disabled-opacity)" : 1,
        cursor: disabled ? "default" : "pointer",
        boxShadow: "var(--specular-rim)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute", top: 2, left: 2, width: 27, height: 27,
          borderRadius: "50%", background: "var(--control-knob)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.18)",
          transform: checked ? "translateX(20px)" : "translateX(0)",
          transition: "transform var(--dur-base) var(--ease-spring)",
        }}
      />
    </button>
  );
}

import React from "react";

/** Textarea — the Input recipe at multiple lines. */
export function Textarea({ label, hint, rows = 4, style, id, ...rest }) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", minWidth: 0 }}>
      {label && <label htmlFor={fieldId} style={{ fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" }}>{label}</label>}
      <textarea
        id={fieldId}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%", padding: "11px 14px", border: 0, resize: "vertical",
          background: "var(--control-fill-input)", borderRadius: "var(--radius-input)",
          fontSize: "var(--size-17)", lineHeight: "var(--leading-relaxed)",
          color: "var(--text-primary)", outline: "none",
          boxShadow: focused ? "var(--focus-halo)" : "none",
          transition: "box-shadow var(--dur-fast) var(--ease-standard)",
          ...style,
        }}
        {...rest}
      />
      {hint && <span style={{ fontSize: "var(--size-12)", color: "var(--text-tertiary)" }}>{hint}</span>}
    </div>
  );
}

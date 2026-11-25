import React from "react";

/** Input — inset field: grouped-surface fill, no border, 10px radius, tint halo on focus. */
export function Input({ label, hint, error, leading, trailing, size = "md", style, id, ...rest }) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [focused, setFocused] = React.useState(false);
  const heights = { sm: "var(--control-sm)", md: "var(--control-lg)" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", minWidth: 0 }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: "var(--size-13)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" }}>
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 8, minWidth: 0,
          height: heights[size], padding: "0 14px",
          background: "var(--control-fill-input)",
          borderRadius: "var(--radius-input)",
          boxShadow: error
            ? "0 0 0 4px color-mix(in srgb, var(--status-danger) 18%, transparent)"
            : focused ? "var(--focus-halo)" : "none",
          transition: "box-shadow var(--dur-fast) var(--ease-standard)",
          color: "var(--text-tertiary)",
          ...style,
        }}
      >
        {leading}
        <input
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={hint || error ? `${fieldId}-d` : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, minWidth: 0, border: 0, background: "transparent", outline: "none",
            fontSize: size === "sm" ? "var(--size-13)" : "var(--size-17)",
            color: "var(--text-primary)",
          }}
          {...rest}
        />
        {trailing}
      </div>
      {(hint || error) && (
        <span id={`${fieldId}-d`} style={{ fontSize: "var(--size-12)", color: error ? "var(--status-danger)" : "var(--text-tertiary)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}

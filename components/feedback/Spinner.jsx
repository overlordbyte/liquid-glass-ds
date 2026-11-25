import React from "react";

/** Spinner — indeterminate activity. A ring, not a set of dots. */
export function Spinner({ size = 20, stroke = 2, label = "Loading", style, ...rest }) {
  return (
    <span
      role="status"
      aria-label={label}
      style={{
        display: "inline-block", width: size, height: size, borderRadius: "50%",
        border: `${stroke}px solid var(--fill-1)`,
        borderTopColor: "var(--tint)",
        animation: "lg-spin 700ms linear infinite",
        ...style,
      }}
      {...rest}
    />
  );
}

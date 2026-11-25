import React from "react";

/** IconButton — a square or circular control carrying only a glyph. */
export function IconButton({
  variant = "plain",
  size = "md",
  label,
  children,
  style,
  disabled = false,
  ...rest
}) {
  const dims = { sm: 28, md: 36, lg: 44 };
  const d = dims[size];

  const variants = {
    plain: { background: "transparent", color: "var(--tint)" },
    filled: { background: "var(--tint)", color: "var(--text-on-tint)" },
    glass: {
      background: "var(--material-regular)",
      WebkitBackdropFilter: "var(--backdrop-regular)",
      backdropFilter: "var(--backdrop-regular)",
      color: "var(--text-primary)",
      boxShadow: "var(--specular)",
    },
    subtle: { background: "var(--fill-4)", color: "var(--text-secondary)" },
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onPointerDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(var(--press-scale))")}
      onPointerUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onPointerLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      style={{
        display: "grid",
        placeItems: "center",
        width: d,
        height: d,
        borderRadius: "var(--radius-full)",
        transition: "var(--t-hover), transform var(--dur-instant) var(--ease-out)",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? "var(--disabled-opacity)" : 1,
        flex: "0 0 auto",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

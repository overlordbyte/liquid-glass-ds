import React from "react";

/**
 * Button — the system's primary action control.
 * Three variants mirroring the platform: filled (primary), bordered, plain.
 */
export function Button({
  variant = "primary",
  size = "md",
  shape = "rounded",
  tint,
  fullWidth = false,
  disabled = false,
  loading = false,
  leading,
  trailing,
  children,
  style,
  ...rest
}) {
  const heights = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" };
  const pads = { sm: "0 12px", md: "0 20px", lg: "0 24px" };
  const sizes = { sm: "var(--size-13)", md: "var(--size-15)", lg: "var(--size-17)" };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--gap-inline)",
    height: heights[size],
    padding: pads[size],
    minWidth: size === "lg" ? "var(--target-touch)" : undefined,
    width: fullWidth ? "100%" : undefined,
    fontFamily: "var(--font-text)",
    fontSize: sizes[size],
    fontWeight: "var(--weight-semibold)",
    letterSpacing: "var(--tracking-body)",
    borderRadius: shape === "capsule" ? "var(--radius-full)" : "var(--radius-button)",
    transition: "var(--t-hover), transform var(--dur-instant) var(--ease-out)",
    cursor: disabled || loading ? "default" : "pointer",
    opacity: disabled ? "var(--disabled-opacity)" : 1,
    whiteSpace: "nowrap",
    ...(tint ? { "--tint": `var(--tint-${tint})` } : null),
  };

  const variants = {
    primary: {
      background: "var(--control-fill-primary)",
      color: "var(--text-on-tint)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
    },
    bordered: {
      background: "transparent",
      color: "var(--tint)",
      boxShadow: "inset 0 0 0 1px var(--tint)",
    },
    plain: { background: "transparent", color: "var(--tint)" },
    glass: {
      background: "var(--material-regular)",
      WebkitBackdropFilter: "var(--backdrop-regular)",
      backdropFilter: "var(--backdrop-regular)",
      color: "var(--text-primary)",
      boxShadow: "var(--specular)",
    },
    tinted: {
      background: "color-mix(in srgb, var(--tint) 14%, transparent)",
      color: "var(--tint)",
    },
    destructive: {
      background: "var(--status-danger)",
      color: "#fff",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
    },
  };

  const press = (e) => {
    if (disabled || loading) return;
    e.currentTarget.style.transform = `scale(var(--press-scale))`;
  };
  const release = (e) => { e.currentTarget.style.transform = "scale(1)"; };

  return (
    <button
      type="button"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onPointerDown={press}
      onPointerUp={release}
      onPointerLeave={release}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {loading ? <Spinner16 /> : leading}
      {children}
      {trailing}
    </button>
  );
}

function Spinner16() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 14, height: 14, borderRadius: "50%",
        border: "2px solid currentColor", borderTopColor: "transparent",
        animation: "lg-spin 700ms linear infinite", opacity: 0.8,
      }}
    />
  );
}

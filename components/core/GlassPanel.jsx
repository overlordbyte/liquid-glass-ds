import React from "react";

/**
 * GlassPanel — the material primitive. Every translucent surface in the system
 * is this component or a copy of its recipe: backdrop blur, low-alpha fill,
 * inset top specular highlight, perimeter rim. Never drop-shadowed.
 */
export function GlassPanel({
  density = "regular",
  radius = "panel",
  float = false,
  as: Tag = "div",
  children,
  style,
  ...rest
}) {
  const fills = {
    ultrathin: ["var(--material-ultrathin)", "blur(var(--blur-sm)) saturate(var(--saturate-glass))"],
    thin: ["var(--material-thin)", "var(--backdrop-thin)"],
    regular: ["var(--material-regular)", "var(--backdrop-regular)"],
    thick: ["var(--material-thick)", "var(--backdrop-thick)"],
  };
  const radii = {
    sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)",
    sheet: "var(--radius-sheet)", panel: "var(--radius-panel)",
    hero: "var(--radius-3xl)", capsule: "var(--radius-full)",
  };
  const [fill, backdrop] = fills[density];

  const panel = (
    <Tag
      style={{
        position: "relative",
        isolation: "isolate",
        background: fill,
        WebkitBackdropFilter: backdrop,
        backdropFilter: backdrop,
        boxShadow: "var(--specular)",
        borderRadius: radii[radius],
        color: "var(--text-primary)",
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, borderRadius: "inherit",
          background: "var(--lens-gradient)", pointerEvents: "none", zIndex: -1,
        }}
      />
      {children}
    </Tag>
  );

  if (!float) return panel;
  return (
    <div style={{ boxShadow: "var(--shadow-ambient-glass)", borderRadius: radii[radius] }}>
      {panel}
    </div>
  );
}

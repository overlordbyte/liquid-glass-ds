import React from "react";

/** SegmentedControl — inset track with a sliding opaque thumb. */
export function SegmentedControl({ options = [], value, onChange, size = "md", style, ...rest }) {
  const idx = Math.max(0, options.findIndex((o) => (o.value ?? o) === value));
  const h = size === "sm" ? 28 : 36;
  return (
    <div
      role="tablist"
      style={{
        position: "relative", display: "grid",
        gridTemplateColumns: `repeat(${options.length}, 1fr)`,
        padding: 2, height: h,
        background: "var(--fill-3)", borderRadius: "var(--radius-input)",
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute", top: 2, bottom: 2, left: 2,
          width: `calc((100% - 4px) / ${options.length})`,
          transform: `translateX(${idx * 100}%)`,
          background: "var(--surface-card)",
          borderRadius: `calc(var(--radius-input) - 2px)`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.10)",
          transition: "transform var(--dur-base) var(--ease-standard)",
        }}
      />
      {options.map((o) => {
        const val = o.value ?? o;
        const active = val === value;
        return (
          <button
            key={val}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(val)}
            style={{
              position: "relative", zIndex: 1,
              fontSize: size === "sm" ? "var(--size-12)" : "var(--size-13)",
              fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
              color: active ? "var(--text-primary)" : "var(--text-secondary)",
              transition: "color var(--dur-fast) var(--ease-standard)",
            }}
          >
            {o.label ?? o}
          </button>
        );
      })}
    </div>
  );
}

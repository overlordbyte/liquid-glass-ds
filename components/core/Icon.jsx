import React from "react";

/**
 * Icon — renders a Lucide glyph.
 *
 * SUBSTITUTION NOTICE: the native icon set for this visual language is
 * SF Symbols, which is Apple-licensed and cannot be redistributed or used
 * outside Apple platforms. Lucide is the closest open match: same 24px grid,
 * same ~1.5–2px round-cap stroke, same optical weight. Swap this one file if
 * you have a licensed set.
 *
 * Load the set once per page:
 *   <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
 */
export function Icon({ name, size = 20, stroke = 1.75, color = "currentColor", style, ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const slot = document.createElement("i");
    slot.setAttribute("data-lucide", name);
    el.appendChild(slot);
    window.lucide.createIcons({
      attrs: { width: size, height: size, "stroke-width": stroke, stroke: color },
      nameAttr: "data-lucide",
      root: el,
    });
  }, [name, size, stroke, color]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{
        display: "inline-grid", placeItems: "center",
        width: size, height: size, flex: "0 0 auto", color,
        ...style,
      }}
      {...rest}
    />
  );
}

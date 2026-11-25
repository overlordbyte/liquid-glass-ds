import React from "react";

/** Divider — a hairline. Inset by default, the way list separators are. */
export function Divider({ inset = 0, vertical = false, style, ...rest }) {
  return (
    <div
      role="separator"
      style={vertical
        ? { width: 1, alignSelf: "stretch", background: "var(--separator)", margin: `${inset}px 0`, ...style }
        : { height: 1, background: "var(--separator)", marginLeft: inset, ...style }}
      {...rest}
    />
  );
}

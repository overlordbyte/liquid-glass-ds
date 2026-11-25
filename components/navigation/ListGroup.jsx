import React from "react";

/**
 * ListGroup — the grouped-list container: grouped-surface fill, 14px radius,
 * hairline separators between rows, inset to where the row text starts.
 */
export function ListGroup({ title, footer, inset = 16, children, style, ...rest }) {
  const rows = React.Children.toArray(children);
  return (
    <section style={{ width: "100%", ...style }} {...rest}>
      {title && (
        <div style={{ padding: "0 var(--space-4) var(--space-2)", fontSize: "var(--size-13)", color: "var(--text-tertiary)" }}>
          {title}
        </div>
      )}
      <div style={{ background: "var(--surface-row)", borderRadius: "var(--radius-card)", overflow: "hidden", boxShadow: "var(--specular-rim)" }}>
        {rows.map((row, i) => (
          <React.Fragment key={i}>
            {row}
            {i < rows.length - 1 && <div role="separator" style={{ height: 1, background: "var(--separator)", marginLeft: inset }} />}
          </React.Fragment>
        ))}
      </div>
      {footer && (
        <div style={{ padding: "var(--space-2) var(--space-4) 0", fontSize: "var(--size-12)", color: "var(--text-tertiary)", lineHeight: "var(--leading-normal)" }}>
          {footer}
        </div>
      )}
    </section>
  );
}

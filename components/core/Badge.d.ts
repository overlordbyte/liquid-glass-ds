import * as React from "react";

/** A count or short status label. Always a capsule, always tabular numerals. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "tint" | "success" | "warning" | "danger" | "glass";
  size?: "sm" | "md";
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): React.JSX.Element;

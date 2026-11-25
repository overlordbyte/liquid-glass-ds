import * as React from "react";

/** A circular control carrying only a glyph. `label` is required — it becomes the accessible name. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "plain" | "filled" | "glass" | "subtle";
  /** sm 28 / md 36 / lg 44 px. Use lg on touch surfaces. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Accessible name. Required — an icon alone is not a label. */
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): React.JSX.Element;

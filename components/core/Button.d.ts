import * as React from "react";

/**
 * The primary action control. Filled for the one primary action on a surface,
 * bordered or plain for everything else, glass when it floats over media.
 *
 * @startingPoint section="Core" subtitle="Filled, bordered, plain and glass buttons" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = filled tint. Only one filled button per surface. @default "primary" */
  variant?: "primary" | "bordered" | "plain" | "glass" | "tinted" | "destructive";
  /** sm 28px (dense desktop) / md 36px / lg 44px (touch minimum). @default "md" */
  size?: "sm" | "md" | "lg";
  /** rounded = 12px radius; capsule = pill, for floating glass chrome. @default "rounded" */
  shape?: "rounded" | "capsule";
  /** Override the surface tint for this control only. Use sparingly. */
  tint?: "blue" | "green" | "red" | "orange" | "purple" | "pink" | "teal" | "indigo";
  fullWidth?: boolean;
  disabled?: boolean;
  /** Swaps the leading slot for a spinner and blocks input. */
  loading?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element;

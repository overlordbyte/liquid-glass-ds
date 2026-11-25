import * as React from "react";

/**
 * Inset text field: grouped-surface fill, no border, 10px radius. Focus shows
 * a 4px halo in the current tint at 18% alpha — never a hard outline.
 *
 * @startingPoint section="Forms" subtitle="Text fields with labels, hints and errors" viewport="700x260"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  /** Helper copy under the field. */
  hint?: string;
  /** Error copy; replaces the hint and switches the halo to red. */
  error?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  /** sm 28px for dense desktop, md 44px for touch. @default "md" */
  size?: "sm" | "md";
}

export function Input(props: InputProps): React.JSX.Element;

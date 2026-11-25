import * as React from "react";

/** Determinate progress: 4px capsule track filled in the surface tint. */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  /** Shows a label row with a tabular-numeral percentage. */
  label?: string;
}

export function ProgressBar(props: ProgressBarProps): React.JSX.Element;

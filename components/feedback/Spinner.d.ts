import * as React from "react";

/** Indeterminate activity ring in the surface tint. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  stroke?: number;
  /** Accessible name. @default "Loading" */
  label?: string;
}

export function Spinner(props: SpinnerProps): React.JSX.Element;

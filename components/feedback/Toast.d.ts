import * as React from "react";

/** Capsule glass notice floating at the top edge. Transient, never interactive. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  /** One short line. If it needs to wrap, it needs to be an `Alert`. */
  message?: string;
  icon?: React.ReactNode;
  tone?: "neutral" | "success" | "danger";
}

export function Toast(props: ToastProps): React.JSX.Element | null;

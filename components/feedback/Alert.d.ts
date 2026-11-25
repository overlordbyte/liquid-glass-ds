import * as React from "react";

/** Inline status block: a 10% tinted wash and a status dot. No coloured left border. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "success" | "warning" | "danger";
  title?: string;
  /** A `Button variant="plain"` at the trailing edge, if the user can act. */
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export function Alert(props: AlertProps): React.JSX.Element;

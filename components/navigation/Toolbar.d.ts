import * as React from "react";

/** A floating capsule of actions on regular material — the system's most glass-forward chrome. */
export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom";
  children?: React.ReactNode;
}

export function Toolbar(props: ToolbarProps): React.JSX.Element;

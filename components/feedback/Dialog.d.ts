import * as React from "react";

/** Centred alert on thick material with hairline-divided actions along the bottom. */
export interface DialogAction {
  label: string;
  onPress?: () => void;
  emphasis?: "primary" | "normal" | "destructive";
}

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  message?: string;
  /** One or two actions. Three or more belong in a `Sheet`. */
  actions?: DialogAction[];
  onClose?: () => void;
}

export function Dialog(props: DialogProps): React.JSX.Element | null;

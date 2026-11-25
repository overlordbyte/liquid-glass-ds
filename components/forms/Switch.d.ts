import * as React from "react";

/** The platform toggle: 51×31 capsule, white knob, fills with the surface tint when on. */
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** Accessible name when there is no adjacent visible label. */
  label?: string;
}

export function Switch(props: SwitchProps): React.JSX.Element;

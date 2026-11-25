import * as React from "react";

/** 22px rounded square; fills with the surface tint and shows a check when on. */
export interface CheckboxProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export function Checkbox(props: CheckboxProps): React.JSX.Element;

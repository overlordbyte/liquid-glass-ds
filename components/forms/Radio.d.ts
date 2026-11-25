import * as React from "react";

/** 22px circle; a thick tint inset ring marks the selection. */
export interface RadioProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  checked?: boolean;
  value?: string;
  onChange?: (value?: string) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
}

export function Radio(props: RadioProps): React.JSX.Element;

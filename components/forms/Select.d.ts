import * as React from "react";

/** Native picker wearing the inset-field skin. Use when options exceed four. */
export interface SelectOption { label: string; value: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  options: Array<SelectOption | string>;
  value?: string;
  onChange?: (value: string) => void;
  hint?: string;
}

export function Select(props: SelectProps): React.JSX.Element;

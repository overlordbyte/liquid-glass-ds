import * as React from "react";

/** Capsule search input. The `glass` variant is for search floating over content. */
export interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Translucent material instead of the neutral inset fill. */
  glass?: boolean;
  onClear?: () => void;
}

export function SearchField(props: SearchFieldProps): React.JSX.Element;

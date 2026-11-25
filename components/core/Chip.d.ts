import * as React from "react";

/** A selectable filter token. Selected state fills with the surface tint. */
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  /** Use ultrathin glass instead of a neutral fill — for chips over imagery. */
  glass?: boolean;
  leading?: React.ReactNode;
  children?: React.ReactNode;
}

export function Chip(props: ChipProps): React.JSX.Element;

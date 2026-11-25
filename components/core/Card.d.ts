import * as React from "react";

/** Opaque elevated container: 14px radius, elevated fill, no border. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
  /** Adds pointer cursor and a 0.985 press scale. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.JSX.Element;

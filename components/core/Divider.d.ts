import * as React from "react";

/** A hairline separator at `--separator`. */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left inset in px — match the row's content inset so the rule starts under the text. */
  inset?: number;
  vertical?: boolean;
}

export function Divider(props: DividerProps): React.JSX.Element;

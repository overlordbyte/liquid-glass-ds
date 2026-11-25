import * as React from "react";

/** Grouped-list container; inserts inset hairlines between its `ListRow` children. */
export interface ListGroupProps extends React.HTMLAttributes<HTMLElement> {
  /** Plain-text header above the group, tertiary ink, no uppercase. */
  title?: string;
  /** Explanatory copy under the group — where the platform puts the "why". */
  footer?: React.ReactNode;
  /** Left inset for the separators, in px. Match the row's content inset. @default 16 */
  inset?: number;
  children?: React.ReactNode;
}

export function ListGroup(props: ListGroupProps): React.JSX.Element;

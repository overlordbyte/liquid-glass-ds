import * as React from "react";

/** One row in a `ListGroup`. Renders as a button when `onClick` is passed. */
export interface ListRowProps extends React.HTMLAttributes<HTMLElement> {
  /** An `Icon`, `Avatar`, or a tinted glyph tile. */
  leading?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned current value in tertiary ink — the platform's "detail" slot. */
  value?: React.ReactNode;
  /** A control: `Switch`, `Badge`, `Button variant="plain"`. */
  trailing?: React.ReactNode;
  /** Disclosure chevron. Only when the row pushes a new screen. */
  chevron?: boolean;
  /** Red title, for Delete / Sign out rows. */
  destructive?: boolean;
  onClick?: () => void;
}

export function ListRow(props: ListRowProps): React.JSX.Element;

import * as React from "react";

/**
 * Thin-material top chrome. Content runs underneath it, not below it.
 *
 * @startingPoint section="Navigation" subtitle="Nav bar with large title, tab bar and sidebar" viewport="700x300"
 */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  /** Renders the 34px title under the bar; set `collapsed` once the user scrolls. */
  largeTitle?: boolean;
  /** Drive from scrollTop > ~20px: title shrinks into the bar and the hairline appears. */
  collapsed?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  /** A row under the title — typically a `SearchField` or a `SegmentedControl`. */
  below?: React.ReactNode;
}

export function NavBar(props: NavBarProps): React.JSX.Element;

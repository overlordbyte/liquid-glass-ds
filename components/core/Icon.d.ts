import * as React from "react";

/**
 * A Lucide glyph on the 24px grid, stroked at 1.75 by default.
 * Decorative by default (`aria-hidden`) — put the label on the control.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name in kebab-case, e.g. "search", "chevron-right", "circle-play". */
  name: string;
  /** Pixel box. Use 17 inline with body text, 20 in controls, 24 in tab bars. @default 20 */
  size?: number;
  /** Stroke width. 1.75 matches the platform's optical weight. @default 1.75 */
  stroke?: number;
  color?: string;
}

export function Icon(props: IconProps): React.JSX.Element;

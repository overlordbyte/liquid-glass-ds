import * as React from "react";

/**
 * Two to four mutually exclusive options on one line; an opaque thumb slides
 * between them inside an inset track.
 *
 * @startingPoint section="Forms" subtitle="Segmented control, slider and stepper" viewport="700x200"
 */
export interface SegmentedOption { label: string; value: string; }

export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Strings, or `{ label, value }` pairs. Keep to four at most. */
  options: Array<SegmentedOption | string>;
  value?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md";
}

export function SegmentedControl(props: SegmentedControlProps): React.JSX.Element;

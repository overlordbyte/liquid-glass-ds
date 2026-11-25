import * as React from "react";

/**
 * Bottom-edge modal on regular material: 30px backdrop blur, 16px top corners,
 * a grabber, and detents at 50% / 100% / content height.
 *
 * @startingPoint section="Feedback" subtitle="Bottom sheet, dialog, toast and alert" viewport="700x320"
 */
export interface SheetProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  onClose?: () => void;
  /** half = 50%, full = 92%, content = fits its children. @default "half" */
  detent?: "half" | "full" | "content";
  /** Centred title; also the dialog's accessible name. */
  title?: string;
  children?: React.ReactNode;
}

export function Sheet(props: SheetProps): React.JSX.Element | null;

import * as React from "react";

/** Circular identity token; falls back to up to two initials from `name`. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  /** Used for the accessible name and the initials fallback. */
  name?: string;
  /** Pixel diameter. @default 36 */
  size?: number;
  /** Tint ring, for "active" or "live" states. */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): React.JSX.Element;

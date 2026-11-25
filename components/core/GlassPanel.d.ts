import * as React from "react";

/**
 * The material primitive — every translucent surface in the system is this.
 *
 * @startingPoint section="Core" subtitle="Glass at all four densities over a wallpaper" viewport="700x240"
 */
export interface GlassPanelProps extends React.HTMLAttributes<HTMLElement> {
  /** White-alpha density over the blurred backdrop: .28 / .60 / .78 / .92. @default "regular" */
  density?: "ultrathin" | "thin" | "regular" | "thick";
  radius?: "sm" | "md" | "lg" | "sheet" | "panel" | "hero" | "capsule";
  /** Wraps the panel in an ambient-occlusion shadow. The shadow goes on the
   *  wrapper, never on the glass — shadowing a material kills the illusion. */
  float?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function GlassPanel(props: GlassPanelProps): React.JSX.Element;

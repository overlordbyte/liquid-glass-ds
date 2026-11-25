import * as React from "react";

/** Continuous value control: 4px capsule track filled to the knob in the surface tint. */
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  /** Small glyphs flanking the track, e.g. volume-low / volume-high. */
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

export function Slider(props: SliderProps): React.JSX.Element;

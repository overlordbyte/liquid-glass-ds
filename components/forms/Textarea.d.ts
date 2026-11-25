import * as React from "react";

/** Multi-line field; same inset fill and focus halo as `Input`. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  rows?: number;
}

export function Textarea(props: TextareaProps): React.JSX.Element;

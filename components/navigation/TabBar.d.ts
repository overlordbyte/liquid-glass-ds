import * as React from "react";

/** Bottom chrome on thin material: 24px glyph over an 11px label, tint when active. */
export interface TabItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Three to five destinations. More than five does not fit a phone width. */
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
}

export function TabBar(props: TabBarProps): React.JSX.Element;

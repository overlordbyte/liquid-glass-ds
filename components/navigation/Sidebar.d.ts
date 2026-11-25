import * as React from "react";

/** The 240px desktop rail on regular material. Window split is 240 / flex. */
export interface SidebarItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}
export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Usually the app name, a `SearchField`, or both. */
  header?: React.ReactNode;
  sections: SidebarSection[];
  value?: string;
  onChange?: (value: string) => void;
  footer?: React.ReactNode;
}

export function Sidebar(props: SidebarProps): React.JSX.Element;

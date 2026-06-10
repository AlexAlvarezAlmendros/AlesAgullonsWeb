import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Color tone. @default "default" */
  tone?: "default" | "brown" | "vine" | "merlot" | "plain";
  /** Outlined instead of filled. @default false */
  outline?: boolean;
}

/** Pill chip for beer styles, hop varieties and pairings. */
export function Tag(props: TagProps): JSX.Element;

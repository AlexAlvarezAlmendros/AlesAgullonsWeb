import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
}

/** Text field styled like a kraft-paper form, gold focus ring. */
export function Input(props: InputProps): JSX.Element;

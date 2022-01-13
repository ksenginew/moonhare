import type { PropertiesFallback, PropertiesHyphenFallback } from "csstype";

export interface CSSAttribute
  extends PropertiesFallback,
    PropertiesHyphenFallback {
  [key: string]:
    | CSSAttribute
    | string
    | number
    | (string | number | undefined)[]
    | undefined;
}

export interface Style {
  s: string;
  p: string;
  v: string;
  a: string[];
}

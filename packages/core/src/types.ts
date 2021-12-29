import type { PropertiesFallback, PropertiesHyphenFallback } from 'csstype';

export interface CSSAttribute extends PropertiesFallback, PropertiesHyphenFallback {
    [key: string]: CSSAttribute | string | number | (string | number | undefined)[] | undefined;
}

export type Style =
    | [
          // property
          string,
          // value
          string,
          // important
          boolean,
          // selector
          string,
          // at rules
          string[]
      ]
    | [
          // property
          string,
          // value
          string,
          // important
          boolean,
          // selector
          string,
          // at rules
          string[],
          // classname
          string
      ];

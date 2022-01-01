import type { PropertiesFallback, PropertiesHyphenFallback } from 'csstype';

export interface CSSAttribute extends PropertiesFallback, PropertiesHyphenFallback {
    [key: string]: CSSAttribute | string | number | (string | number | undefined)[] | undefined;
}

export type Style = {
    // property
    p: string;
    // value
    v: string;
    // important
    i: boolean;
    // selector
    s: string;
    // at rules
    a: string[];
    // classname
    c?: string;
};

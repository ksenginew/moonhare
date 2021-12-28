import type { PropertiesFallback, PropertiesHyphenFallback } from 'csstype';

export interface CSSAttribute extends PropertiesFallback, PropertiesHyphenFallback {
    [key: string]: CSSAttribute | string | number | (string | number | undefined)[] | undefined;
}

export type Style = [
    // property
    string;
    // value
    string;
    // important
    boolean;
    // selector
    string;
    // at rules
    string[];
] | [
    // property
    string;
    // value
    string;
    // important
    boolean;
    // selector
    string;
    // at rules
    string[];
    // classname
    string;
];

export interface Options {
    add: (styles: Style, index: number) => void;
    remove: (index: number) => void;
    cache: Record<string, Style>;
    sheet: string[];
    prefix: string;
    count: number;
    getCls: () => string;
    style: (style: CSSAttribute) => string;
}

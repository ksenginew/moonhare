import type { PropertiesFallback, PropertiesHyphenFallback } from 'csstype';

export interface CSSAttribute extends PropertiesFallback, PropertiesHyphenFallback {
    [key: string]: CSSAttribute | string | number | (string | number | undefined)[] | undefined;
}

export type Style = {
    prop: string;
    val: string;
    i: boolean;
    sel: string;
    cls?: string;
    at: string[];
};

export interface Options {
    toString: (style: Style) => string;
    add: (styles: Style, index: number) => void;
    remove: (index: number) => void;
    cache: Record<string, Style>;
    sheet: string[];
    prefix: string;
    count: number;
    getCls: () => string;
    style: (style: CSSAttribute) => string;
}

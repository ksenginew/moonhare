import type { PropertiesFallback, PropertiesHyphenFallback } from 'csstype';
export interface CSSAttribute extends PropertiesFallback, PropertiesHyphenFallback {
    [key: string]: CSSAttribute | string | number | (string | number | undefined)[] | undefined;
}
export interface Style {
    s: string;
    p: string;
    v: string;
    a: string[];
    m?: number;
    r?: number;
    c?: string;
}
export interface Context {
    render: (styles: CSSAttribute) => string;
    cache: Record<string, string>;
    sheet: Style[];
    listen: (fn: (style: Style) => void) => void;
}

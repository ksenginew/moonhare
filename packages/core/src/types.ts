import type { PropertiesFallback, PropertiesHyphenFallback } from 'csstype'

export interface CSSAttribute extends PropertiesFallback, PropertiesHyphenFallback {
    [key: string]: CSSAttribute | string | number | (string | number | undefined)[] | undefined
}

export interface Style {
    s: string
    b: ([string, string] | Style)[]
    a: string[]
    m?: number
    r?: number
    c?: string
}

export interface BaseContext {
    global: (styles: CSSAttribute) => void
    comp: (styles: CSSAttribute, cls?: string | undefined) => string
    css: (styles: CSSAttribute) => string
    keyframes: (styles: CSSAttribute) => string
    listen: (fn: (style: Style) => void) => (style: Style) => void
    extract: () => any
}

export interface Context extends BaseContext {
    extract: () => Style[]
}

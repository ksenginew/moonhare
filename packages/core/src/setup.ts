import { CSSAttribute, Style } from './types'
import { atRuleOrder, getAtRuleScore, getSelectorScore, selectorOrder } from '../../core/src/order'
import { parse } from './parse'

export let setup = (
    selOrder: (string | RegExp)[] = selectorOrder,
    atOrder: (string | RegExp)[] = atRuleOrder
) => {
    // count to generate unique class names.
    let count: number = 0
    let sheet: Style[] = []
    let fire: (style: Style) => void = sheet.push
    // JavaScript Map like implementation for style sheet.
    let cache: Record<string, string> = {}

    let render = (styles: CSSAttribute) => {
        return parse(styles)
            .map((style) => {
                //
                let { s: selector, p: property, v: value, a: atRules } = style
                let ref = selector + property + value + atRules

                // if the style is not in the cache
                if (!cache[ref]) {
                    // generate a unique class name. It's base 36 number
                    let className = (style.c = '_' + (count++).toString(36))

                    // give marks to atRules
                    style.r = getAtRuleScore(atRules, atOrder)
                    // give marks to selector
                    style.r = getSelectorScore(selector.replace(/^\{:\}/, ''), selOrder)

                    // insert the class name to the selector
                    style.s = selector.replace(/{:}/g, '.' + className)

                    fire(style)

                    // update the cache
                    cache[ref] = className
                }

                // return the class name
                return cache[ref]
            })
            .join(' ')
    }

    return { render, cache, sheet, listen: (fn: typeof fire) => (fire = fn) }
}

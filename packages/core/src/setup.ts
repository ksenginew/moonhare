import { CSSAttribute, Style } from './types'
import { atRuleOrder, getAtRuleScore, getSelectorScore, selectorOrder } from '../../core/src/order'
import { parse } from './parse'

export let setup = (
    selOrder: (string | RegExp)[] = selectorOrder,
    atOrder: (string | RegExp)[] = atRuleOrder
) => {
    // count to generate unique class names.
    let count: number = 0

    // JavaScript Map like implementation for style sheet.
    let sheet: Style[] = []
    let cache: string[] = []

    let render = (styles: CSSAttribute) => {
        return parse(styles)
            .map((style) => {
                //
                let { s: selector, p: property, v: value, a: atRules } = style
                let ref = selector + property + value + atRules

                // check the cache for the style
                let index = cache.indexOf(ref)

                // if the style is not in the cache
                if (!~index) {
                    // generate a unique class name. It's base 36 number
                    let className = (style.c = '_' + (count++).toString(36))

                    // give marks to atRules
                    let atRuleScore = (style.r = getAtRuleScore(atRules, atOrder))
                    // give marks to selector
                    let score = (style.r = getSelectorScore(
                        selector.replace(/^\{:\}/, ''),
                        selOrder
                    ))

                    // set the index to last
                    index = sheet.length

                    // find the index of the style
                    for (let i = 0, len = sheet.length; i < len; ++i) {
                        if (
                            (sheet[i].r as number) > atRuleScore ||
                            (sheet[i].m as number) > score
                        ) {
                            index = i
                            break
                        }
                    }

                    // insert the class name to the selector
                    style.s = selector.replace(/{:}/g, '.' + className)

                    // update the sheet
                    sheet.splice(index, 0, style)
                    cache.splice(index, 0, ref)
                }

                // return the class name
                return sheet[index].c as string
            })
            .join(' ')
    }

    return { render, sheet }
}

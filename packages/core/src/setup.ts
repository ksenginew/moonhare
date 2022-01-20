import { CSSAttribute, Style } from './types'
import { atRuleOrder, getAtRuleScore, getSelectorScore, selectorOrder } from '../../core/src/order'
import { parse } from './parse'
import { hash } from './hash'
import { Context } from '.'

let toStr = ({ s: selector, b: block, a: atRules }: Style): string => {
    return atRules.reduce(
        (css, rule, index) => rule + '  {\n' + css + '\n}',
        selector.replace(/\{:\}/g, '&') +
            ' {\n' +
            block
                .map((style) =>
                    Array.isArray(style) ? style[0] + ': ' + style[1] + ';' : toStr(style)
                )
                .join('') +
            '\n}'
    )
}

let stringify = (styles: Style[]) => {
    return styles.map(toStr).join('\n')
}

export let setup = (
    selOrder: (string | RegExp)[] = selectorOrder,
    atOrder: (string | RegExp)[] = atRuleOrder
): Context => {
    // count to generate unique class names.
    let count: number = 0
    let sheet: Style[] = []
    let fire: (style: Style) => void = sheet.push.bind(sheet)
    let extract = () => {
        let res = sheet.sort(
            (a, b) =>
                (a.r as number) - (b.r as number) ||
                (a.m as number) - (b.m as number) ||
                // @ts-ignore
                a.b[a.b.length - 1].p?.length - b.b[b.b.length - 1].p?.length
        )
        sheet = []
        return res
    }
    let listen = (fn: typeof fire) => (fire = fn)
    let cache: Record<string, string> = {}

    let render = (styles: CSSAttribute, score: number = 0) => {
        return parse(styles, score ? '' : '{:}')
            .map((style) => {
                let { s: selector, a: atRules } = style

                let ref = hash(style)

                // if the style is not in the cache
                if (!cache[ref]) {
                    // generate a unique class name. It's base 36 number
                    let className = (style.c = '_' + (count++).toString(36))

                    // give marks to atRules
                    style.r = score || getAtRuleScore(atRules, atOrder)
                    // give marks to selector
                    style.m = getSelectorScore(selector.replace(/^\{:\}/, ''), selOrder)

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

    let keyframes = (styles: CSSAttribute) => {
        let ref = hash([styles])
        if (!cache[ref]) {
            let className = (styles.c = '_' + (count++).toString(36))
            cache[ref] = className
            fire({
                s: '@keyframes ' + className,
                b: parse(styles, ''),
                a: [],
                r: 0,
                m: -2
            })
        }
        return cache[ref]
    }

    let css = (styles: CSSAttribute) => render(styles)

    let global = (styles: CSSAttribute) => {
        render(styles, -3)
    }

    let comp = (styles: CSSAttribute, cls?: string) => render(styles, -1)

    return { css, global, comp, keyframes, listen, extract }
}

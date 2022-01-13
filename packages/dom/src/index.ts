import type { Context } from '@moonhare/core'

let wrap = (wrapper: string, toWrap: string) => wrapper + '{' + toWrap + '}'

export let render = (ctx: Context) => {
    document.head.appendChild(
        Object.assign(document.createElement('style'), {
            textContent: ctx.sheet.map(({ s: selector, p: property, v: value, a: atRules }) => {
                let css = wrap(selector, property + ':' + value)
                atRules.forEach((rule) => (css += wrap(rule, css)))
                return css
            }).join('')
        })
    )
}

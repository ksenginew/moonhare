import { Style } from '@moonhare/core'
import { getIndex } from './getindex'
import { stringify } from './stringify'

export let insert = (sheet: CSSStyleSheet, style: Style) => {
    let { m: score, r: atRuleScore } = style
    let index = getIndex(score as number, atRuleScore as number, sheet.cssRules)
    sheet.insertRule(stringify(style), index)
    // @ts-ignore we are hacking built in css rule
    sheet.cssRules[index].a = atRuleScore
    // @ts-ignore we are hacking built in css rule
    sheet.cssRules[index].s = score
}

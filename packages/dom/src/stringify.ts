import { Style } from '@moonhare/core'

export let stringify = ({ s: selector, p: property, v: value, a: atRules }: Style) => {
    atRules.push(selector)
    return atRules.reduce((css, atRule) => atRule + '{' + css + '}', property + ':' + value)
}

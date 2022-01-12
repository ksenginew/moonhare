import { CSSAttribute } from '@moonhare/core'
import { atRuleOrder, getAtRuleScore, getSelectorScore, selectorOrder } from './order'
import { getSheet } from './sheet'
import { stringify } from './stringify'

export let setup = (
    container?: HTMLElement,
    selOrder: (string | RegExp)[] = selectorOrder,
    atOrder: (string | RegExp)[] = atRuleOrder
) => {
    let count: number = 0
    let scoreList: number[] = []
    let cache: Record<string, number> = {}
    let classList: string[] = []
    let insertRule: (rule: string, index: number) => void
    let extract: () => string
    if (typeof window !== 'undefined') {
        let sheet = getSheet(container)
        insertRule = sheet.insertRule.bind(sheet)
        extract = () => {
            let result = ''
            while (sheet.cssRules.length) {
                result += (sheet.cssRules[0] as unknown as CSSRule).cssText
                sheet.deleteRule(0)
            }
            return result
        }
    } else {
        let sheet: string[] = []
        insertRule = (rule: string, index: number) => sheet.splice(index, 0, rule)
        extract = () => {
            let result = sheet.join('')
            sheet = []
            return result
        }
        return sheet.map
    }

    let insert = (
        ref: string,
        property: string,
        value: string | number | undefined,
        selector: string,
        atRules: string[]
    ) => {
        if (value == undefined) return

        let className = '_' + (count++).toString(36)
        let score = getSelectorScore(selector, selOrder) + getAtRuleScore(atRules[0], atOrder)

        let index = scoreList.length
        for (let i = 0, len = scoreList.length; i < len; ++i) {
            if (scoreList[i] > score) {
                index = i
                break
            }
        }

        selector = selector.replace(/::/g, '.' + className)
        insertRule(stringify(selector, property, value + '', atRules), index)

        scoreList[index] = score
        classList[index] = className
        cache[ref] = index
    }

    let render = (styles: CSSAttribute, parent: string = '::', atRules: string[] = []) => {
        let className = ''

        // iterate through styles
        for (let key in styles) {
            let value = styles[key]

            // shallow clone
            let at = [...atRules]

            if (typeof value != 'object' || Array.isArray(value)) {
                // generate a key for cache
                let ref = key + value + parent + atRules
                // check if we have a cached class
                if (cache[ref]) {
                    // convert camelCase or snake_case to dash-case(or kabob-case)
                    key = key.replace(/_|([A-Z])/g, '-$1').toLowerCase()

                    insert(ref, key, value + '', parent, at)
                }

                // add the class to the list
                className += classList[cache[ref]] + ' '
            } else {
                // atrules
                if (key[0] === '@') {
                    at.push(key)
                    className += render(value as CSSAttribute, parent, at) + ''
                }

                // nested styles
                else {
                    className += render(value, key.replace(/&/g, parent), at) + ' '
                }
            }
        }

        // join classes and return
        return className.trim()
    }

    return [render]
}

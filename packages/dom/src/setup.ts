import { CSSAttribute } from '@moonhare/core'
import { getSheet } from './sheet'

export let setup = (
    selOrder: (string | RegExp)[] = ['^h', '^f', '^a'],
    atOrder: (string | RegExp)[] = ['^@media']
) => {
    let count: number = 0
    let cache: Record<string, string> = {}
    let sheet = getSheet()
    let ruleList: { s: number }[] = sheet.cssRules as any

    let insert = (
        ref: string,
        property: string,
        value: string | number | undefined,
        selector: string,
        atRules: string[]
    ) => {
        if (value == undefined) return
        let className = '_' + (count++).toString(36)
        let score = 0
        selOrder.forEach((o, i) => {
            if (selector.match(o)) score += i + 1
        })

        atOrder.forEach((o, i) => {
            if (atRules[0] && atRules[0].match(o)) score += (i + 1) * 100
        })

        atRules.unshift(selector.replace(/::/g, '.' + className))
        let cssString = atRules.reduce(
            (prev, curr) => curr + '{' + prev + '}',
            property + ':' + value + ';'
        )

        let index = ruleList.length
        for (let i = 0, len = ruleList.length; i < len; ++i) {
            if (ruleList[i].s > score) {
                index = i
                break
            }
        }
        sheet.insertRule(cssString, index)
        ruleList[index].s = score
        cache[ref] = className
    }

    let render = (styles: CSSAttribute, parent: string = '::', atRules: string[] = []) => {
        let classList = ''

        // iterate through styles
        for (let key in styles) {
            let value = styles[key]

            // shallow clone
            let at = [...atRules]

            if (typeof value != 'object' || Array.isArray(value)) {
                // generate a key for cache
                let ref = key + value + parent + atRules

                // check if we have a cached class
                if (!cache[ref]) {
                    // convert camelCase or snake_case to dash-case(or kabob-case)
                    key = key.replace(/_|([A-Z])/g, '-$1').toLowerCase()

                    insert(ref, key, value + '', parent, at)
                }

                // add the class to the list
                classList += cache[ref] + ' '
            } else {
                // atrules
                if (key[0] === '@') {
                    at.push(key)
                    classList += render(value as CSSAttribute, parent, at) + ''
                }

                // nested styles
                else {
                    classList += render(value, key.replace(/&/g, parent), at) + ' '
                }
            }
        }

        // join classes and return
        return classList.trim()
    }

    return [render]
}

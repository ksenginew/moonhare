let selectorOrder = ['^:h', '^:f', '^:a']
let atRuleOrder = ['^@media']

let getSelectorScore = (selector: string, selOrder: (string | RegExp)[]) => {
    let score = 0
    selOrder.forEach((o, i) => {
        if (selector.match(o)) score += i + 1
    })
    return score
}

let getAtRuleScore = (atRule: string, atOrder: (string | RegExp)[]) => {
    let score = 0
    atOrder.forEach((o, i) => {
        if (atRule && atRule.match(o)) score += (i + 1) * 100
    })
    return score
}

export { getSelectorScore, getAtRuleScore, selectorOrder, atRuleOrder }

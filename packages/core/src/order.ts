let selectorOrder = ['^:h', '^:f', '^:a']
let atRuleOrder = ['^@media']

let getSelectorScore = (selector: string, selOrder: (string | RegExp)[]) => {
    let score = 0
    selOrder.forEach((o, i) => {
        if (selector.match(o)) score += i + 1
    })
    return score
}

let getAtRuleScore = (atRules: string[], atOrder: (string | RegExp)[]) => {
    let score = 0
    atRules.forEach((atRule, ii) => {
        atOrder.forEach((o, i) => {
            if (atRule && atRule.match(o)) score += (i + 1) * (ii + 1)
        })
    })
    return score
}

export { getSelectorScore, getAtRuleScore, selectorOrder, atRuleOrder }

export let getIndex = (score: number, atRuleScore: number, cssRules: CSSRuleList) => {
    // set the index to last
    let index = cssRules.length

    // find the index of the style
    for (let i = 0, len = cssRules.length; i < len; ++i) {
        // @ts-ignore we are hacking built in css rule
        if ((cssRules[i].a as number) > atRuleScore || (cssRules[i].s as number) > score) {
            index = i
            break
        }
    }

    return index
}

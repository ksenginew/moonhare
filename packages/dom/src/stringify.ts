let stringify = (selector: string, property: string, value: string, atRules: string[]) => {
    atRules.unshift(selector)
    return atRules.reduce((prev, curr) => curr + '{' + prev + '}', property + ':' + value + ';')
}

export { stringify }
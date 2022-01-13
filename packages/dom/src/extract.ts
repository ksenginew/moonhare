export let extract = (sheet: CSSStyleSheet) => {
    let css = ''
    while (sheet.cssRules.length) {
        css += sheet.cssRules[0].cssText
        sheet.deleteRule(0)
    }
    return css
}

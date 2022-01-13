let ID = 'mh' as const

export let getSheet = (target: HTMLElement = document.head) =>
    // Querying the existing target for a previously defined <style> tag
    // We're doing a querySelector because the <head> element doesn't implemented the getElementById api
    (
        (target.querySelector('#' + ID) as HTMLStyleElement) ||
        Object.assign(target.appendChild(document.createElement('style')), {
            innerHTML: ' ',
            id: ID
        })
    ).sheet as CSSStyleSheet

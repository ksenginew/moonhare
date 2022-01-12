let id = 'mh'

/**
 * Returns the _commit_ target
 */
export let getSheet = (target: HTMLElement = document.head) => {
    let style = target.querySelector('#' + id) as HTMLStyleElement
    style.id = id
    style.innerHTML = ' '
    return style.sheet as CSSStyleSheet
}

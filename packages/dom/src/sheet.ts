let id = 'mh'

/**
 * Returns the _commit_ target
 */
export let getSheet = (target: HTMLElement = document.head) => {
    return (target.querySelector('#' + id) as HTMLStyleElement
        || target.appendChild(
            Object.assign(document.createElement('style'), {
                id,
                innerHTML: ' '
            })
        )
    ).sheet as CSSStyleSheet
};

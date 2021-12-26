import type { Options, Style } from '@moonhare/core';

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

interface DOMOptions extends Options {
    container: HTMLElement;
}

export let render = (options: Partial<DOMOptions> = {}) => {
    let add = (style: Style, index: number) => getSheet().insertRule((options as DOMOptions).toString(style), index);


    let remove = (index: number) => getSheet().deleteRule(index);

    options.add = add;
    options.remove = remove;
    options.sheet && options.sheet.forEach((ref, index) =>
        add((options.cache as Record<string, Style>)[ref], index)
    );
    return options;
};

export let ctx = render();

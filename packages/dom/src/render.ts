import { Style } from '@moonhare/core';
import { stringify } from './stringify';
import { getSheet } from './sheet';

export let render = () => {
    let add = (style: Style, index: number) => getSheet().insertRule(stringify(style), index);

    let remove = (index: number) => getSheet().deleteRule(index);

    options.add = add;
    options.remove = remove;
    options.sheet &&
        options.sheet.forEach((ref, index) =>
            add((options.cache as Record<string, Style>)[ref], index)
        );
    return options;
};

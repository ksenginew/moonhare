import type { Style } from '@moonhare/core';
export let stringify = ([prop, val, i, sel, at]: Style) => {
    at.unshift(sel);
    return at.reduce(
        (acc, atRule) => `${atRule}{${acc}}`,
        prop + ':' + val + (i ? ' !important' : '') + ';'
    );
};

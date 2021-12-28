import { Style } from './types';

let toHash = (str: string) => {
    let i = 0,
        out = 0;
    while (i < str.length) out = (out * i + str.charCodeAt(i++)) >>> 0;
    return out.toString(36)
};

export let hash = (rule: Style) => toHash(rule.join());

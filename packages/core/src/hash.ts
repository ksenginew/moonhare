import { Style } from './types';

let toHash = (str: string) => {
    let i = 0,
        out = 0;
    while (i < str.length) out = (out * i + str.charCodeAt(i++)) >>> 0;
    return out.toString(36);
};

export let hash = ({ p, v, i, s, a }: Style) => toHash(p + v + i + s + a);

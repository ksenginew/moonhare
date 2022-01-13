import { CSSAttribute } from './types';
export declare let setup: (selOrder?: (string | RegExp)[], atOrder?: (string | RegExp)[]) => {
    render: (styles: CSSAttribute) => string;
    styles: {
        s: string;
        p: string;
        v: string;
        a: string[];
    }[];
};

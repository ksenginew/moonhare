import { CSSAttribute } from './types';
export declare let setup: (container?: HTMLElement | undefined, selOrder?: (string | RegExp)[], atOrder?: (string | RegExp)[]) => (<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | {
    render: (styles: CSSAttribute, parent?: string, atRules?: string[]) => string;
};

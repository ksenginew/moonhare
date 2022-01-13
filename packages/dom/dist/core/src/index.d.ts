import { setup } from './setup';
declare let render: (styles: import("./types").CSSAttribute) => string, sheet: import("./types").Style[];
export { render, sheet, setup };
export type { Style, Context, CSSAttribute } from './types';

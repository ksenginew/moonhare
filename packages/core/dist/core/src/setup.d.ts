import { CSSAttribute, Style } from './types';
export declare let setup: (selOrder?: (string | RegExp)[], atOrder?: (string | RegExp)[]) => {
    render: (styles: CSSAttribute) => string;
    sheet: Style[];
};

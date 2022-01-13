import { CSSAttribute, Style } from './types';
export declare let setup: (selOrder?: (string | RegExp)[], atOrder?: (string | RegExp)[]) => {
    render: (styles: CSSAttribute) => string;
    cache: Record<string, string>;
    sheet: Style[];
    listen: (fn: (style: Style) => void) => (style: Style) => void;
};

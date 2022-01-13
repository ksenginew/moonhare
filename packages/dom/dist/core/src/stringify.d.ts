import { CSSAttribute, Style } from './types';
/**
 * stringifys the object into css, scoped, blocks
 * @param {Object} obj
 * @param {String} selector
 * @param {String} wrapper
 */
export declare let stringify: (obj: CSSAttribute, selector?: string) => Style[];

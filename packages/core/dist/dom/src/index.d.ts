import type { Context } from '@moonhare/core';
interface DOMContext extends Context {
    extract: () => string;
}
export declare let render: (ctx: Context, container: HTMLElement) => DOMContext;
export {};

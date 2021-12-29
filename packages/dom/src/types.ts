import { Options } from "@moonhare/core";

export interface DOMOptions extends Options {
    container: HTMLElement || string || CSStyleSheet || string[];
}

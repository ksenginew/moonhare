import { hash } from './hash';
import { parse } from './parse';
import { CSSAttribute, Style } from './types';

export let setup = (
    add?: (styles: Style, index: number) => void,
    remove?: (index: number) => void,
    prefix: string = '_'
): ((styles: CSSAttribute) => string) => {
    let count = 0;
    let cache: Record<string, Style> = {};
    let sheet: string[] = [];
    let getClassName = () => prefix + (count++).toString(36);

    return (styles: CSSAttribute): string => {
        let rules = parse(styles);
        let refs = rules.map(hash);
        return refs
            .map((ref, index) => {
                let rule = rules[index];
                let className: string;
                if (cache[ref]) className = cache[ref].c as string;
                else {
                    className = getClassName();
                    rule.c = className;
                    rule.s = rule.s.replace(/{-}/g, '.' + className);
                    cache[ref] = rule;
                }

                let prev = sheet.indexOf(refs[index - 1]);
                let current = sheet.indexOf(ref);
                if (~current) {
                    if (prev > current) {
                        sheet.splice(prev + 1, 0, ref);
                        sheet.splice(current, 1);
                        add && add(rule, prev);
                        remove && remove(current);
                    }
                } else {
                    sheet.splice(prev + 1, 0, ref);
                    add && add(rule, prev + 1);
                }

                return className;
            })
            .join(' ');
    };
};

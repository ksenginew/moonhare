import { hash } from "./hash";
import { stringify } from "./stringify";
import { CSSAttribute, Options } from "./types";

export let setup = (add, remove, prefix="_"): ((styles: CSSAttribute) => string) => {
    let count = 0
    let cache = {}
    let sheet = []
    let getClassName = () => prefix + (count++).toString(36)

    return (styles: CSSAttribute): string => {
                let rules = stringify(styles);
                let refs = rules.map(hash);
                return refs
                    .map((ref, index) => {
                        let rule = rules[index];
                        let className: string;
                        if (cache[ref]) className = (cache[ref][5]) as string;
                        else {
                            className = '.' + getClassName();
                            rule[5] = className;
                            rule[3] = rule[3].replace(/{-}/g, className);
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
            }
        }
};

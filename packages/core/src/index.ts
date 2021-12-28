import { hash } from './hash';
import { stringify } from './stringify';
import type { CSSAttribute, Options } from './types';

export let setup = (options: Partial<Options> = {}): Options => {
    let ctx = {} as Options;

    return Object.assign(
        ctx,
        {
            cache: {},
            sheet: [],
            prefix: '_',
            count: 0,
            getCls: () => ctx.prefix + (ctx.count++).toString(36),
            style: (styles: CSSAttribute): string => {
                let rules = stringify(styles);
                let refs = rules.map(hash);
                return refs
                    .map((ref, index) => {
                        let rule = rules[index];
                        let className: string;
                        if (ctx.cache[ref]) className = ctx.cache[ref].cls as string;
                        else {
                            className = '.' + ctx.getCls();
                            rule[5] = className;
                            rule[3] = rule[3].replace(/{-}/g, className);
                            ctx.cache[ref] = rule;
                        }

                        let prev = ctx.sheet.indexOf(refs[index - 1]);
                        let current = ctx.sheet.indexOf(ref);
                        if (~current) {
                            if (prev > current) {
                                ctx.sheet.splice(prev + 1, 0, ref);
                                ctx.sheet.splice(current, 1);
                                ctx.add && ctx.add(rule, prev);
                                ctx.remove && ctx.remove(current);
                            }
                        } else {
                            ctx.sheet.splice(prev + 1, 0, ref);
                            ctx.add && ctx.add(rule, prev + 1);
                        }

                        return className;
                    })
                    .join(' ');
            }
        },
        options
    );
};

export * from './types';

export let ctx = setup();

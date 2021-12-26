import { CSSAttribute, Style } from './types';

/**
 * Parses the object into css, scoped, blocks
 * @param {Object} obj
 * @param {String} selector
 * @param {String} wrapper
 */
export let stringify = (obj: CSSAttribute, selector = '{-}'): Style[] => {
    let blocks: {
        prop: string;
        val: string;
        i: boolean;
        sel: string;
        at: string[];
    }[] = [];

    let decl = (key: string, val: string | number | undefined) => {
        // Push the line for this property
        if (val != undefined) {
            blocks.push({
                prop: (key = key.replace(/[A-Z]/g, '-$&').toLowerCase()),
                val: val + '',
                i: false,
                sel: selector,
                at: []
            });
        }
    };

    for (let key in obj) {
        let val = obj[key];

        if (val != undefined) {
            // If these are the `@` rule
            if (key[0] == '@')
                stringify(val as CSSAttribute, selector).forEach((block) => {
                    block.at.push(key);
                    blocks.push(block);
                });
            else if (Array.isArray(val)) val.forEach((val) => decl(key, val));
            else if (typeof val == 'object')
                // Call the parse for this block
                blocks = blocks.concat(
                    stringify(
                        val,
                        selector
                            ? // Go over the selector and replace the matching multiple selectors if any
                              selector.replace(/([^,])+/g, (sel) => {
                                  // Return the current selector with the key matching multiple selectors if any
                                  return key.replace(/(^:.*)|([^,])+/g, (k) => {
                                      // If the current `k`(key) has a nested selector replace it
                                      if (/&/.test(k)) return k.replace(/&/g, sel);

                                      // If there's a current selector concat it
                                      return sel ? sel + ' ' + k : k;
                                  });
                              })
                            : key
                    )
                );
            else {
                decl(key, val);
            }
        }
    }

    return blocks;
};

import type { PropertiesFallback, PropertiesHyphenFallback } from "csstype";

export interface CSSAttribute
  extends PropertiesFallback,
    PropertiesHyphenFallback {
  [key: string]:
    | CSSAttribute
    | string
    | number
    | (string | number | undefined)[]
    | undefined;
}

/**
 * stringifys the object into css, scoped, blocks
 * @param {Object} obj
 * @param {String} selector
 * @param {String} wrapper
 */
export let stringify = (obj: CSSAttribute, selector = "::") => {
  let styles: Style[] = [];

  for (let key in obj) {
    let val = obj[key];

    let decl = (val?: string | number) => {
      // If this isn't an empty rule
      if (val != undefined) key = key.replace(/[A-Z]/g, "-$&").toLowerCase();
      // Push the line for this property
      styles.push({
        s: selector,
        p: key,
        v: val + "",
        a: [],
      });
    };
    if (Array.isArray(val)) {
      val.map(decl);
    } else if (key[0] == "@") {
      // Regular at rule block
      stringify(val as CSSAttribute, key[1] == "k" ? "" : selector).forEach(
        (style) => {
          style.a.push(key);
          styles.push(style);
        }
      );
    } else if (typeof val == "object") {
      val;
      // Call the stringify for this block
      let newSel = selector
        ? // Go over the selector and replace the matching multiple selectors if any
          selector.replace(/([^,])+/g, (sel) => {
            // Return the current selector with the key matching multiple selectors if any
            return key.replace(/(^:.*)|([^,])+/g, (k) => {
              // If the current `k`(key) has a nested selector replace it
              if (/&/.test(k)) return k.replace(/&/g, sel);

              // If there's a current selector concat it
              return sel ? sel + " " + k : k;
            });
          })
        : key;
      styles = styles.concat(stringify(val, newSel));
    } else {
      decl(val);
    }
  }

  // If we have properties apply standard rule composition
  return styles;
};

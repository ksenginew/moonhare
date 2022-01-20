import { CSSAttribute, Style } from './types'

/**
 * parses the object into css, scoped, blocks
 * @param obj
 * @param selector
 * @param wrapper
 */
export let parse = (obj: CSSAttribute, selector: string = '{:}', nonAtomic = !selector) => {
    let styles: Style[] = []

    for (let key in obj) {
        let val = obj[key]
        let current: [string, string][] = []

        if (typeof val == 'object' && !Array.isArray(val)) {
            if (key[0] == '@')
                // Regular at rule block
                parse(val as CSSAttribute, selector).forEach((style) => {
                    style.a.push(key)
                    styles.push(style)
                })
            else {
                // Call the parse for this block
                let newSel = selector
                    ? // Go over the selector and replace the matching multiple selectors if any
                      selector.replace(/([^,])+/g, (sel) => {
                          // Return the current selector with the key matching multiple selectors if any
                          return key.replace(/(^:.*)|([^,])+/g, (k) => {
                              // If the current `k`(key) has a nested selector replace it
                              if (/&/.test(k)) return k.replace(/&/g, sel)

                              // If there's a current selector concat it
                              return sel ? sel + ' ' + k : k
                          })
                      })
                    : key
                styles = styles.concat(parse(val, newSel))
            }
        } else {
            let values = Array.isArray(val) ? val : [val]
            let block: [string, string][] = []

            key = key.replace(/_|([A-Z])/g, '-$1').toLowerCase()

            values.forEach((v) => {
                if (val != undefined) block.push([key, v + ''])
            })

            // Push the line for this property
            if (block.length)
                if (nonAtomic) current = current.concat(block)
                else
                    styles.push({
                        s: selector,
                        b: block,
                        a: []
                    })
        }
    }

    // If we have properties apply standard rule composition
    return styles
}

import { setup, Style } from '.'

let toStr = ({ s: selector, b: block, a: atRules }: Style): string => {
    return atRules.reduce(
        (css, rule, index) => rule + '  {\n' + css + '\n}',
        selector.replace(/\{:\}/g, '&') +
            ' {\n' +
            block
                .map((style) =>
                    Array.isArray(style) ? style[0] + ': ' + style[1] + ';' : toStr(style)
                )
                .join('') +
            '\n}'
    )
}

let stringify = (styles: Style[]) => {
    return styles.map(toStr).join('\n')
}

describe('setup', () => {
    test('exports', () => {
        expect(setup()).toMatchInlineSnapshot(`
            Object {
              "comp": [Function],
              "css": [Function],
              "extract": [Function],
              "global": [Function],
              "keyframes": [Function],
              "listen": [Function],
            }
        `)
    })

    test('should parse a simple object', () => {
        let { css, extract } = setup()
        const result = css({
            color: 'red',
            background_color: 'blue',
            font_size: '12px'
        })
        expect(result).toMatchInlineSnapshot(`"_0 _1 _2"`)
        expect(stringify(extract())).toMatchInlineSnapshot(`
            "._0 {
            color: red;
            }
            ._1 {
            background-color: blue;
            }
            ._2 {
            font-size: 12px;
            }"
        `)
    })

    test('should parse a nested object', () => {
        let { css, extract } = setup()
        const result = css({
            color: 'red',
            background_color: 'blue',
            font_size: '12px',
            '&:focus': {
                color: 'blue'
            },
            '&:hover': {
                color: 'green'
            }
        })
        expect(result).toMatchInlineSnapshot(`"_0 _1 _2 _3 _4"`)
        expect(stringify(extract())).toMatchInlineSnapshot(`
            "._0 {
            color: red;
            }
            ._1 {
            background-color: blue;
            }
            ._2 {
            font-size: 12px;
            }
            ._4:hover {
            color: green;
            }
            ._3:focus {
            color: blue;
            }"
        `)
    })
})

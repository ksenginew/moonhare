import { Style } from '.'
import { parse as real } from './parse'

let stringify = ({ s: selector, b: block, a: atRules }: Style): string => {
    return atRules.reduce(
        (css, rule, index) => rule + '  {\n' + css + '\n}',
        selector.replace(/\{:\}/g, '&') +
            ' {\n' +
            block
                .map((style) =>
                    Array.isArray(style) ? style[0] + ': ' + style[1] + ';' : stringify(style)
                )
                .join('') +
            '\n}'
    )
}

let parse = (...args: Parameters<typeof real>) => {
    return real(...args)
        .map(stringify)
        .join('\n')
}

describe('parse', () => {
    test('should parse a simple object', () => {
        const result = parse({
            color: 'red',
            background_color: 'blue',
            font_size: '12px'
        })
        expect(result).toMatchInlineSnapshot(`
            "& {
            color: red;
            }
            & {
            background-color: blue;
            }
            & {
            font-size: 12px;
            }"
        `)
    })

    test('should parse a nested object', () => {
        const result = parse({
            color: 'red',
            background_color: 'blue',
            font_size: '12px',
            '&:hover': {
                color: 'green'
            }
        })
        expect(result).toMatchInlineSnapshot(`
            "& {
            color: red;
            }
            & {
            background-color: blue;
            }
            & {
            font-size: 12px;
            }
            &:hover {
            color: green;
            }"
        `)
    })

    test('should parse a nested object with a nested object', () => {
        const result = parse({
            color: 'red',
            background_color: 'blue',
            font_size: '12px',
            '&:hover': {
                color: 'green',
                '&:active': {
                    color: 'yellow'
                }
            }
        })
        expect(result).toMatchInlineSnapshot(`
            "& {
            color: red;
            }
            & {
            background-color: blue;
            }
            & {
            font-size: 12px;
            }
            &:hover {
            color: green;
            }
            &:hover:active {
            color: yellow;
            }"
        `)
    })
})

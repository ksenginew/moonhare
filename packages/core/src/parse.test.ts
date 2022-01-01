import { parse } from './parse';

describe('parse', () => {
    test('simple', () => {
        expect(parse({ color: 'red' })).toMatchInlineSnapshot(`
            Array [
              Object {
                "a": Array [],
                "i": false,
                "p": "color",
                "s": "{-}",
                "v": "red",
              },
            ]
        `);
    });
});

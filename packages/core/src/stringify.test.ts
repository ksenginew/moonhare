import { stringify } from './stringify';

describe('stringify', () => {
    test('simple', () => {
        expect(stringify({ color: 'red' })).toMatchInlineSnapshot(`
            Array [
              Object {
                "at": Array [],
                "i": false,
                "prop": "color",
                "sel": "{-}",
                "val": "red",
              },
            ]
        `);
    });
});

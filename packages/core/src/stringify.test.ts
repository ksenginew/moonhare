import { stringify } from './stringify';

describe('stringify', () => {
    test('simple', () => {
        expect(stringify({ color: 'red' })).toMatchInlineSnapshot(`
            Array [
              Array [
                "color",
                "red",
                false,
                "{-}",
                Array [],
              ],
            ]
        `);
    });
});

import { hash } from './hash';

describe('hash', () => {
    test('simple test', () => {
        expect(hash(['color', 'red', false, '{-}', []])).toMatchInlineSnapshot(`"ek4lpf"`);
        expect(hash(['color', 'blue', false, '{-}', []])).toMatchInlineSnapshot(`"1tyrf0k"`);
    });
});

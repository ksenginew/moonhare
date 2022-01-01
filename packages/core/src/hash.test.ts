import { hash } from './hash';
import { parse } from './parse';

describe('hash', () => {
    test('simple test', () => {
        expect(
            hash(
                parse({
                    color: 'red'
                })[0]
            )
        ).toMatchInlineSnapshot(`"1sb0xxs"`);
        expect(
            hash(
                parse({
                    color: 'blue'
                })[0]
            )
        ).toMatchInlineSnapshot(`"1cbbst9"`);
    });
});

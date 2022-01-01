import { setup } from './setup';

describe('setup', () => {
    test('simple', () => {
        let style = setup();
        expect(style({ color: 'red' })).toMatchInlineSnapshot(`"_0"`);
        expect(style({ color: 'blue' })).toMatchInlineSnapshot(`"_1"`);
    });
});

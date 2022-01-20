import { selectorOrder, atRuleOrder } from './order'

describe('order', () => {
    test('selectorOrder', () => {
        expect(selectorOrder).toMatchInlineSnapshot(`
            Array [
              "^:h",
              "^:f",
              "^:a",
            ]
        `)
    })
    test('atRuleOrder', () => {
        expect(atRuleOrder).toMatchInlineSnapshot(`
            Array [
              "^@media",
            ]
        `)
    })
})

import { setup } from './setup'

let { render, sheet } = setup()

export { render, sheet, setup }

export type { Style, Context, CSSAttribute } from './types'

import type { Context } from '@moonhare/core'
import { extract } from './extract'
import { insert } from './insert'
import { getSheet } from './sheet'

interface DOMContext extends Context {
    extract: () => string
}

export let render = (ctx: Context, container: HTMLElement) => {
    let sheet = getSheet(container)
    let domCtx: DOMContext = ctx as DOMContext
    domCtx.extract = extract.bind(null, sheet)
    domCtx.listen(insert.bind(null, sheet))
    return domCtx
}

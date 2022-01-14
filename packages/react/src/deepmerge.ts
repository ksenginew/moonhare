interface IObject {
    [key: string]: any
}

let isObject = (obj: any) => typeof obj === 'object' && obj !== null

export let deepmerge = <T extends IObject>(a: T, b: Partial<T>): T => {
    let result: T = {} as T
    for (let key in a) {
        let value = a[key]
        let newValue = b[key]
        if (Array.isArray(value) && Array.isArray(newValue))
            result[key] = [...value, ...newValue] as T[Extract<keyof T, string>]
        else if (isObject(value) && isObject(newValue))
            result[key] = deepmerge(value, newValue as Partial<T[Extract<keyof T, string>]>)
        else if (typeof newValue !== undefined)
            result[key] = newValue as T[Extract<keyof T, string>]
        else result[key] = value
    }
    return result
}

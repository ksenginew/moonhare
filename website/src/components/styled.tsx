import clsx, { ClassValue } from "clsx"
import React, { FC, HTMLProps } from "react"

export let styled = (cls: ClassValue): FC<HTMLProps<HTMLDivElement>> => {
    return ({ className, ...props }) => {
        className = clsx(className, cls)
        return <div className={className} {...props} />
    }
}
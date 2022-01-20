import styles from './styles.module.css'
import clsx from 'clsx'
import React, { FC, HTMLProps } from 'react'

export let Article: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    className = clsx(className, styles.article)
    return <div className={className} {...props} />
}

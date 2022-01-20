import clsx from 'clsx'
import React from 'react'
import RealCodeBlock from '@theme/CodeBlock'
import styles from './CodeBlock.module.css'

export let CodeBlock = ({ className, ...props }) => {
    className = clsx(className, styles.code)
    return <RealCodeBlock className={className} {...props} />
}

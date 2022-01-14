import styles from './Container.module.css'
import clsx from 'clsx'
import React from 'react'

export let Container = ({ className, ...props }) => {
    className = clsx(className, 'container', styles.container)
    return <div className={className} {...props} />
}

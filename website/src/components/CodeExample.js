import React, { useEffect, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import styles from './CodeExample.module.css'
import clsx from 'clsx'

const source = `<figure css={{
    background_color: gray[100],
    border_radius: XL,
    text_align: 'center',
    font_weight: MEDIUM,
    [dark]: backgrounds(gray[800])
}}>
<img css={{ ...size(rem(6)), border_radius: '100%', margin: 'auto' }} src="kavindu.png" alt="" />
<blockquote>
    “Don't copy-paste tons classes for atomic CSS. Use good old CSS or your
    favourite preprocessor with MoonHare's utilities to write modular styles. In
    production you have atomic CSS.”
</blockquote>
<figcaption>
    <div css={{ color: sky[500] }}>
        Kavindu Santhusa
    </div>
    <div css={{ color: gray[500] }}>
        Creater of MoonHare CSS
    </div>
</figcaption>
</figure>
`

let Example = () => {
    return (
        <figure className={styles.card}>
            <img className={styles.cardImage} src="https://github.com/ksenginew.png" alt="" />
            <div className={styles.cardContainer}>
                <blockquote>
                    “Don't copy-paste tons classes for atomic CSS. Use good old CSS or your
                    favourite preprocessor with MoonHare's utilities to write modular styles. In
                    production you have atomic CSS.”
                </blockquote>
                <figcaption>
                    <div className={styles.blueText}>Kavindu Santhusa</div>
                    <div className={styles.grayText}>Creater of MoonHare CSS</div>
                </figcaption>
            </div>
        </figure>
    )
}

export let CodeExample = () => {
    return (
        <div className={clsx('container')}>
            <div className="row">
                <div className={clsx('col col--6')}>
                    <Example />
                </div>
                <CodeBlock className={clsx('language-jsx', 'col col--6')} children={source} />
            </div>
        </div>
    )
}

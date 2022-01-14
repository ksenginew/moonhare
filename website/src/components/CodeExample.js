import React, { useEffect, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import styles from './CodeExample.module.css'
import clsx from 'clsx'

const source = `<figure css={{
    ...backgrounds(gray[100]),
    ...rounded(XL),
    textAlign: 'center',
    fontWeight: MEDIUM,
    [dark]: backgrounds(gray[800])
}}>
<img css={{ ...size(rem(6)), ...rounded('100%'), margin: 'auto' }} src="kavindu.png" alt="" />
<blockquote>
    “When I heard about atomic CSS I loved that concept. Here I am entering the
    competition with an on demand lightweight atomic CSS engine with unlimited
    theme.”
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
                    “When I heard about atomic CSS I loved that concept. Here I am entering the
                    competition with an on demand lightweight atomic CSS engine with unlimited
                    theme.”
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

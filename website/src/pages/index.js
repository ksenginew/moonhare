import React, { useEffect } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { CodeExample } from '../components/CodeExample'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx('hero  hero--primary', styles.heroMain)}>
            <div className={styles.main}>
                <div className={clsx('container', styles.heroBanner)}>
                    <h1 className="hero__title">
                        Build unique websites in minutes using unlimited utilities.
                    </h1>
                    <p className="hero__subtitle">
                        A utility-first CSS framework packed with classes like flex, pt-4,
                        text-center and rotate-90 that can be composed to build any design, directly
                        in your markup.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg button--block"
                            to="/docs/intro"
                        >
                            Tutorial
                        </Link>
                    </div>
                </div>
                <CodeExample />
            </div>
        </header>
    )
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
            <HomepageHeader />
            <main></main>
        </Layout>
    )
}

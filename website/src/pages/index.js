import React, { useEffect } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { CodeExample } from '../components/CodeExample'
import { UnlimitedDesign } from '../components/home/UnlimitedDesign'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx('hero  hero--primary', styles.heroMain)}>
            <div className={styles.main}>
                <div className={clsx('container', styles.heroBanner)}>
                    <h1 className="hero__title">Rapidly build unique sites with MoonHare</h1>
                    <p className="hero__subtitle">
                        Quickly design and customize radical sites with MoonHare, a highly
                        customizable front-end open source toolkit, featuring on-demand atomic
                        css-in-js engine with intigrations for your favorite tools.
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
            <main>
                <UnlimitedDesign />
            </main>
        </Layout>
    )
}

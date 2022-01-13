import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx('hero  hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.tagline}</h1>
                <p className="hero__subtitle">test</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg button--block"
                        to="/docs/intro"
                    >
                        Tutorial
                    </Link>
                </div>
            </div>
        </header>
    )
}
function HomepageContent() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <>
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container">
                    <h2>Yet another CSS framework! Why?</h2>
                    <p>
                        When I heard about atomic CSS I loved that concept. Here I am entering the
                        competition with an on demand lightweight atomic CSS engine with unlimited
                        theme.
                    </p>
                    <div className="avatar avatar--vertical">
                        <a
                            className="avatar__photo-link avatar__photo avatar__photo--lg"
                            href="https://twitter.com/ksenginew"
                        >
                            <img
                                alt="Kavindu Santhusa Twitter Profile"
                                src="https://github.com/ksenginew.png?size=128"
                            />
                        </a>
                        <div className="avatar__intro">
                            <div className="avatar__name">Kavindu Santhusa</div>
                            <small className="avatar__subtitle">Creator of MoonHare CSS</small>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
            <HomepageHeader />
            <main>
                <HomepageContent />
            </main>
        </Layout>
    )
}

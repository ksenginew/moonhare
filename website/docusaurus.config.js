// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'MoonHare',
    tagline: 'A highly customizable CSS framework for unique UI development.',
    url: 'https://moonhare.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ksenginew',
    projectName: 'moonhare',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/ksenginew/moonhare/edit/main/website'
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/ksenginew/moonhare/edit/main/website/blog'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'MoonHare',
                logo: {
                    alt: 'MoonHare logo',
                    src: 'img/logo.svg'
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial'
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/ksenginew/moonhare',
                        label: 'GitHub',
                        position: 'right'
                    }
                ]
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro'
                            }
                        ]
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus'
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus'
                            }
                        ]
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog'
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/ksenginew/moonhare'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Kavindu Santhusa. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
}

module.exports = config

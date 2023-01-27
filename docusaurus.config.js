// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Precept',
    tagline:
        'A library of resources for building user interfaces in a regulated and consistent manner',
    url: 'https://marksmccann.github.io',
    baseUrl: '/precept/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'marksmccann',
    projectName: 'precept',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/marksmccann/precept',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/marksmccann/precept',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Precept',
                logo: {
                    alt: 'Precept Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: 'docs/',
                        position: 'right',
                        label: 'Docs',
                    },
                    {
                        href: 'https://github.com/marksmccann/precept',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} Mark McCann. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;

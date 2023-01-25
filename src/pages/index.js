/* eslint-disable */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description="A library of resources for building user interfaces in a regulated and consistent manner."
        >
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container margin-bottom--lg">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs"
                        >
                            Get Started →
                        </Link>
                    </div>
                </div>
            </header>
        </Layout>
    );
}

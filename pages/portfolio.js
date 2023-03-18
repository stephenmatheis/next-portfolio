import { useEffect } from 'react';
import Head from 'next/head';
import { Space_Mono, Space_Grotesk } from 'next/font/google';
import projects from '@/data/projects';
import styles from '../styles/portfolio.module.scss';
import classNames from 'classnames';

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ weight: ['400', '700'], subsets: ['latin'] })

export default function Portfolio() {
    useEffect(() => {
        document.body.classList.remove('hidden');
        document.documentElement.style.setProperty('--background-color', '#0f0f0f');
        document.documentElement.style.setProperty('--color', '#f0f0f0');
    }, []);

    return (
        <>
            <Head>
                <title>Stephen Matheis</title>
                <meta name="description" content="Stephen Matheis" />
            </Head>
            <div id={styles['portfolio']}>
                <div className={styles['ctr']}>
                    {projects.map(({ name, description }) => {
                        return (
                            <div key={name} className={styles['project']}>
                                <h2
                                    className={classNames(
                                        styles['name'],
                                        styles['paint-brush'],
                                        spaceMono.className
                                    )}
                                >
                                    {name}
                                </h2>
                                <div className={classNames(styles['description'], spaceGrotesk.className)}>{description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
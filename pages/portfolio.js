import { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/portfolio.module.scss';

export default function Home() {
    const ctr = useRef();

    const firstName = 'Stephen';
    const lastName = 'Matheis';
    const frontEnd = 'Front-end';
    const software = 'Software';
    const engineer = 'Engineer';

    const fromFirstName = useRef();
    const fromLastName = useRef();
    const fromFrontEnd = useRef();
    const fromSoftware = useRef();
    const fromEngineer = useRef();

    useEffect(() => {
        document.body.classList.remove('hidden');

        return () => document.body.removeAttribute('style');
    }, []);

    return (
        <>
            <Head>
                <title>Stephen Matheis</title>
                <meta name="description" content="Stephen Matheis" />
            </Head>
            <div id={styles['portfolio']}>
                <div ref={ctr} className={styles['ctr']}>
                    <span ref={fromFirstName} className={styles['name']}>{firstName}</span>
                    <span ref={fromLastName} className={styles['name']}>{lastName}</span>
                    <span ref={fromFrontEnd} className={styles['title']}>{frontEnd}</span>
                    <span ref={fromSoftware} className={styles['title']}>{software}</span>
                    <span ref={fromEngineer} className={styles['title']}>{engineer}</span>
                </div>
            </div>
        </>
    )
}
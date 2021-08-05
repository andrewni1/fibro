import React from 'react';
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_grid}>
                    <div className={styles.nav}>
                        <a className={styles.footer_header}>Navigation</a>
                        <div className={styles.content_container}>
                            <a className={styles.footer_link} href="/">Home</a>
                            <a className={styles.footer_link} href="/">Features</a>
                            <a className={styles.footer_link} href="/">FAQ</a>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <a className={styles.footer_header}>Useful Links</a>
                        <div className={styles.content_container}>
                            <a className={styles.footer_link} href="/dashboard">Dashboard</a>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <a className={styles.footer_header}>Contact</a>
                        <div className={styles.content_container}>
                            <a className={styles.footer_link}>Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import styles from '../styles/Footer.module.css'
import { GiKnot } from "react-icons/gi";

export default function Footer() {
    return (
        <>
            <div>
                <a href="/" className={styles.logo_container}>
                    <GiKnot className={styles.icon}/>
                    <a className={styles.nav_left}>Fibro</a>
                </a>
            </div>
            <div className={styles.footer}>
                <div className={styles.footer_grid}>
                    <div className={styles.nav}>
                        <a className={styles.footer_header}>Navigation</a>
                        <div className={styles.content_container}>
                            <a className={styles.footer_link} href="/">Home</a>
                            <a className={styles.footer_link} href="/">Features</a>
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
                            <a  href="mailto:niandrew1@gmail.com" className={styles.footer_link}>Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
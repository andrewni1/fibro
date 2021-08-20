import React from 'react';
import styles from '../styles/Footer.module.css'
import { GiKnot } from "react-icons/gi";
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div>
                <Link href="/">
                    <a className={styles.logo_container}>
                        <GiKnot className={styles.icon}/>
                        <a className={styles.nav_left}>Fibro</a>
                    </a>
                </Link>
            </div>
            <div className={styles.footer}>
                <div className={styles.footer_grid}>
                    <div className={styles.nav}>
                        <a className={styles.footer_header}>Navigation</a>
                        <div className={styles.content_container}>
                            <Link href="/">
                                <a className={styles.footer_link}>Home</a>
                            </Link>
                            <Link href="/">
                                <a className={styles.footer_link}>Features</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <a className={styles.footer_header}>Useful Links</a>
                        <div className={styles.content_container}>
                            <Link  href="/dashboard">
                                <a className={styles.footer_link}>Dashboard</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <a className={styles.footer_header}>Contact</a>
                        <div className={styles.content_container}>
                            <Link  href="mailto:niandrew1@gmail.com">
                                <a className={styles.footer_link}>Email</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
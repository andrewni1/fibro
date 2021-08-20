import React from 'react';
import styles from '../styles/Navbar.module.css'
import { HiOutlineViewGrid } from "react-icons/hi";
import { GiKnot } from "react-icons/gi";
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.nav_wrapper}>
            <div className={styles.nav_menu}>
                <div className={styles.nav_col_one}>
                    <div>
                        <Link href="/">
                            <a className={styles.logo_container}>
                                <GiKnot className={styles.icon}/>
                                <a className={styles.nav_left}>Fibro</a>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.nav_col_two}>
                    <Link href="/">
                        <a className={styles.nav_middle}>Home</a>
                    </Link>
                    <Link href="/features">
                        <a className={styles.nav_middle}>Features</a>
                    </Link>
                </div>
                <div className={styles.nav_col_three}>
                    <Link href="/dashboard">
                        <a className={styles.dash}>
                            <div className={styles.dash_wrapper}>
                                <div className={styles.dash_icon_wrapper}>
                                    <div className={styles.dash_icon}>
                                        <HiOutlineViewGrid />
                                    </div>
                                </div>
                                <div className={styles.dash_text}>
                                    <a className={styles.nav_right}>Dashboard</a>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
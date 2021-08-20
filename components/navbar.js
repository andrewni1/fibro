import React from 'react';
import styles from '../styles/Navbar.module.css'
import { HiOutlineViewGrid } from "react-icons/hi";
import { GiKnot } from "react-icons/gi";

export default function Navbar() {
    return (
        <div className={styles.nav_wrapper}>
            <div className={styles.nav_menu}>
                <div className={styles.nav_col_one}>
                    <div>
                        <a href="/" className={styles.logo_container}>
                            <GiKnot className={styles.icon}/>
                            <a className={styles.nav_left}>Fibro</a>
                        </a>
                    </div>
                </div>
                <div className={styles.nav_col_two}>
                    <a className={styles.nav_middle} href="/">Home</a>
                    <a className={styles.nav_middle} href="/features">Features</a>
                </div>
                <div className={styles.nav_col_three}>
                    <a className={styles.dash} href="/dashboard">
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
                </div>
            </div>
        </div>
    )
}
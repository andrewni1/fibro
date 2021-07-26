import React from 'react';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.nav_wrapper}>
            <div className={styles.nav_menu}>
                <a className="nav-left" href="/">Fibro</a>
                <a className="nav-middle" href="/">Home</a>
                <a className="nav-middle" href="/features">Features</a>
                <a className="nav-middle" href="/about">About</a>
                <a className="nav-middle" href="/faq">FAQ</a>
                <a className="nav-right" href="/dashboard">Dashboard</a>
            </div>
        </div>
    )
}
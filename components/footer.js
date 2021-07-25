import React from 'react';
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className="footer-grid">
                    <h4 className="footer-header">Navigation</h4>
                    <a className="footer-link" href="/">Home</a>
                    <a className="footer-link" href="/">Features</a>
                    <a className="footer-link" href="/">About</a>
                    <a className="footer-link" href="/">FAQ</a>
                    <h4 className="footer-header">Useful Links</h4>
                    <a className="footer-link" href="/dashboard">Dashboard</a>
                </div>
            </div>
        </>
    )
}
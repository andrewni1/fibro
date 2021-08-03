import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import styles from '../styles/Home.module.css'

export default function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.home}>
                <Navbar />
                <div className={styles.grid}>
                    <div className={styles.home_section}>
                        <h4 className={styles.title}>Inventory management made simpler and more enjoyable</h4>
                        <a className={styles.desc}>Track inventory and sales with a beautiful, simple to use interface.</a>
                        <br />
                        <a href="/login">
                            <button className={styles.home_buttons}>
                                Sign Up
                            </button >
                        </a>
                        <a href="/login">
                            <button className={styles.home_buttons}>
                                Log In
                            </button >
                        </a>
                    </div>
                    <div className={styles.feature}>
                        <a className={styles.featureHeader}>FEATURE</a>
                        <br />
                        <a></a>
                        <br />
                        <a className={styles.featureTitle}>Database Storage</a>
                        <br />
                        <a></a>
                        <br />
                        <a className={styles.featureDesc}>With the use of a database, all your entries will be saved for the next time you log in.</a>
                    </div>
                    <div className={styles.feature}>
                        <a className={styles.featureHeader}>FEATURE</a>
                        <br />
                        <a></a>
                        <br />
                        <a className={styles.featureTitle}>Database Storage</a>
                        <br />
                        <a></a>
                        <br />
                        <a className={styles.featureDesc}>With the use of database, all your entries will be saved for the next time you log in.</a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
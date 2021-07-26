import React from 'react';
import Link from 'next/link'
import styles from '../styles/SideNav.module.css'
import { FiGrid, FiPackage, FiBriefcase, FiCreditCard, FiInbox, FiKey } from "react-icons/fi";

export default function SideNav() {
    return (
        <div className={styles.nav_wrapper}>
            <div className={styles.nav_menu}>
                <Link as="/dashboard" href="/dashboard">
                    <button title="Dashboard" className={styles.nav_icon}><FiGrid /></button>
                </Link>
                <br />
                <Link as="/inventory" href="/inventory">
                    <button title="Inventory" className={styles.nav_icon}><FiPackage /></button>
                </Link>
                <br />
                <Link as="/sales" href="/sales">
                    <button title="Sales" className={styles.nav_icon}><FiBriefcase /></button>
                </Link>
                <br />
                <Link as="/expenses" href="/expenses">
                    <button title="Expenses" className={styles.nav_icon}><FiCreditCard /></button>
                </Link>
                <br />
                <Link as="/subscriptions" href="/subscriptions">
                    <button title="Subscriptions" className={styles.nav_icon}><FiInbox /></button>
                </Link>
                <br />
                <Link as="/bots" href="/bots">
                    <button title="Bots" className={styles.nav_icon}><FiKey /></button>
                </Link>
            </div>
        </div>
    )
}
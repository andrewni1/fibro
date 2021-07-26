import Inventory from './inventory'
import styles from '../styles/Test.module.css'
import SideNav from '../components/sidenav'

export default function Test() {
    return (
        <div className={styles.page}>
            <div className={styles.nav}>
                <SideNav />
            </div>
            <div className={styles.content}>
                <Inventory />
            </div>
        </div>
    )
}
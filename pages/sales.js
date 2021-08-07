import SalesContents from '../components/salesContents'
import styles from '../styles/Page.module.css'
import SideNav from '../components/sidenav'

export default function Sales() {
    return (
        <div className={styles.page}>
            <div className={styles.nav}>
                <SideNav />
            </div>
            <div className={styles.content}>
                <SalesContents />
            </div>
        </div>
    )
}
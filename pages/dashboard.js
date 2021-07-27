import DashboardContents from './dashboardContents'
import styles from '../styles/Page.module.css'
import SideNav from '../components/sidenav'

export default function Dashboard() {
    return (
        <div className={styles.page}>
            <div className={styles.nav}>
                <SideNav />
            </div>
            <div className={styles.content}>
                <DashboardContents />
            </div>
        </div>
    )
}
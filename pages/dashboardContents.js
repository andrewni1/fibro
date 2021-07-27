import styles from '../styles/DashboardContents.module.css'
import DashContentsOne from '../components/dashContentsOne'
import DashContentsTwo from '../components/dashContentsTwo'

export default function DashboardContents() {
    return (
        <div className={styles.page}>
            <div className={styles.dashboard_format}>
                <div className={styles.first_col}>
                    <DashContentsOne />
                </div>
                <div className={styles.second_col}>
                    <DashContentsTwo />
                </div>
            </div>
        </div>
    )
}
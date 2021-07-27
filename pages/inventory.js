import InventoryContents from './inventoryContents'
import styles from '../styles/Page.module.css'
import SideNav from '../components/sidenav'

export default function Inventory() {
    return (
        <div className={styles.page}>
            <div className={styles.nav}>
                <SideNav />
            </div>
            <div className={styles.content}>
                <InventoryContents />
            </div>
        </div>
    )
}
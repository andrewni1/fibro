import SalesContents from '../components/salesContents'
import styles from '../styles/Page.module.css'
import SideNav from '../components/sidenav'
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'

export default function Sales() {
    const [user, loading, error] = useAuthState(firebase.auth())
    
    if(user) {
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
    } else return (
        <Auth />
    )
}
import DashboardContents from '../components/dashboardContents'
import styles from '../styles/Page.module.css'
import SideNav from '../components/sidenav'
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [user, loading, error] = useAuthState(firebase.auth())
    const [items, setItems] = useState([])

    useEffect(() => {
        firebase.firestore()
            .collection('items')
            .get()
            .then(snap => {
            const items = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setItems(items);
            });
    }, []);

    if(user) {
        console.log(user.uid)
        return (
            <div className={styles.page}>
                <div className={styles.content}>
                    <h1>{user.uid}</h1>
                    <h1>{user.displayName}</h1>
                    {
                        items.map(item => {
                            <div>
                                <h1>{item.itemName}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    } else return (
        <Auth />
    )
}
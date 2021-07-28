import styles from '../styles/DashboardContents.module.css'
import firebase from "../firebase/clientApp";
import { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"

export default function DashContentsTwo() {
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
    return (
        <div>
            <div className={styles.recently_added_table}>
                <div className={styles.recently_added_table_header}>
                    <h4>Recently Added</h4>
                </div>
                <div className={styles.rows_container}>
                    <div className={styles.recently_added_table_rows}>
                        {
                            items.map(item => {
                                if(item.userId === user.uid) {
                                    return (
                                        <div key={item.id} className={styles.table_contents}>
                                            <div className={styles.recently_added_table_row}>
                                                <h2>{item.itemName}</h2>
                                            </div>
                                        </div>
                                    )
                                }   
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.recently_added_table}>
                <div className={styles.recently_added_table_header}>
                        <h4>Recent Sales</h4>
                    </div>
                    <div className={styles.rows_container}>
                        <div className={styles.recently_added_table_rows}>
                            {
                                items.map(item => {
                                    if(item.userId === user.uid) {
                                        return (
                                            <div key={item.id} className={styles.table_contents}>
                                                <div className={styles.recently_added_table_row}>
                                                    <h2>{item.itemName}</h2>
                                                </div>
                                            </div>
                                        )
                                    }   
                                })
                            }
                        </div>
                    </div>
            </div>
        </div>
    )
}
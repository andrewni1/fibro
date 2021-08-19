import styles from '../styles/DashboardContents.module.css'
import firebase from "../firebase/clientApp";
import { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from './Auth'

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

    if(user) {
        return (
            <div>
                <div className={styles.recently_added_table}>
                    <div className={styles.recently_added_table_header}>
                        <h4>Inventory</h4>
                    </div>
                    <div className={styles.rows_container}>
                        <div className={styles.recently_added_table_rows}>
                            <div className={styles.table_header}>
                                <div className={styles.table_col_one}>
                                    <a>Product</a>
                                </div>
                                <div className={styles.table_col_two}>
                                    <a>Price</a>
                                </div>
                            </div>
                            {
                                items.map(item => {
                                    if(item.userId === user.uid && item.sold == false) {
                                        return (
                                            <div key={item.id} className={styles.table_contents}>
                                                <div className={styles.recently_added_table_row}>
                                                    <div className={styles.table_col_one}>
                                                        <h4>{item.itemName}</h4>
                                                    </div>
                                                    <div className={styles.table_col_two}>
                                                        <h4>${item.pricePaid}</h4>
                                                    </div>
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
                            <h4>Sales</h4>
                        </div>
                        <div className={styles.rows_container}>
                            <div className={styles.recently_added_table_rows}>
                                <div className={styles.table_header}>
                                    <div className={styles.table_col_one}>
                                        <a>Product</a>
                                    </div>
                                    <div className={styles.table_col_two}>
                                        <a>Price</a>
                                    </div>
                                </div>
                                {
                                    items.map(item => {
                                        if(item.userId === user.uid && item.sold == true) {
                                            return (
                                                <div key={item.id} className={styles.table_contents}>
                                                    <div className={styles.recently_added_table_row}>
                                                        <div className={styles.table_col_one}>
                                                            <h4>{item.itemName}</h4>
                                                        </div>
                                                        <div className={styles.table_col_two}>
                                                            <h4>${item.pricePaid}</h4>
                                                        </div>
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
    } else return (
        <Auth />
    )
}
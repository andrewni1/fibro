import { useState, useEffect } from 'react';
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'
import styles from '../styles/Inventory.module.css'
import style from '../styles/Modal.module.css'
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import Modal from 'react-modal'

export default function Inventory () {
    const [user, loading, error] = useAuthState(firebase.auth())
    const [items, setItems] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)

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

    

    if (user) {
        return (
            <div className={styles.page}>
                <div>
                    <h1>Inventory Page</h1>
                    <button onClick={() => setModalIsOpen(true)} className={styles.add_button}>+</button>
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className={style.modal}>
                        <div className={style.modal_content}>
                            <h2>Modal Title</h2>
                            <p>Modal Body</p>
                            <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>
                </div>
                <div className={styles.table}>
                    <div className={styles.table_header}>
                        <div className={styles.name_header}>
                            <h2>Product</h2>
                        </div>
                        <div className={styles.size_header}>
                            <h2>Size</h2>
                        </div>
                        <div className={styles.group_header}>
                            <h2>Group</h2>
                        </div>
                        <div className={styles.price_header}>
                            <h2>Price</h2>
                        </div>
                        <div className={styles.actions_header}> 
                        </div>
                    </div>
                    {
                        items.map(item => {
                            return (
                                <div key={item.id} className={styles.table_contents}>
                                    <div className={styles.name_column}>
                                        <h2>{item.itemName}</h2>
                                    </div>
                                    <div className={styles.size_column}>
                                        <h2>{item.size}</h2>
                                    </div>
                                    <div className={styles.group_column}>
                                        <h2>{item.group}</h2>
                                    </div>
                                    <div className={styles.price_column}>
                                        <h2>${item.pricePaid}</h2>
                                    </div>
                                    <div className={styles.actions_column}>
                                        <button className={styles.edit_button}><FiEdit /></button>
                                        <button className={styles.delete_button} onClick={() => {
                                            firebase.firestore()
                                                .collection('items')
                                                .doc(item.id).delete().then(() => {
                                                    console.log(item.id)
                                                })
                                        }}><FiTrash /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
    else return (
        <Auth />
    )
}
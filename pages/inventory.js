import { useState, useEffect } from 'react';
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'

export default function Inventory () {
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

    if (user) {
        return (
            <div>
                <div>
                    <h1>Inventory Page</h1>
                </div>
                <div> 
                    {
                        items.map(item => {
                            return (
                                <div key={item.id}>
                                    <h2>{item.itemName}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        )
    }
    else return (
        <>
            <Auth />
        </>
    )
}
import React, { useState } from "react"
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'

export default function AddItem() {
    const [user, loading, error] = useAuthState(firebase.auth())
    const [itemName, setItemName] = useState('');
    const [size, setSize] = useState('');
    const [pricePaid, setPricePaid] = useState('');

    const submitForm = async e => {
        e.preventDefault();

        firebase
            .firestore()
                .collection('items')
                .add({
                    itemName: itemName,
                    size: size,
                    pricePaid: pricePaid,
                });

        setItemName('');
        setSize('');
        setPricePaid('');
    }

    if (user) {
        return (
            <>
                <h2>Add Item:</h2>
                <form onSubmit={submitForm}>
                    <label>Name</label> 
                    <br />
                    <input 
                        value={itemName} 
                        type="text" 
                        required
                        onChange={({target}) => setItemName(target.value)}
                    /> 
                    <br />
                    <label>Size</label> 
                    <br />
                    <input 
                        value={size} 
                        type="text" 
                        required 
                        onChange={({target}) => setSize(target.value)}
                    /> 
                    <br />
                    <label>Price Paid</label> 
                    <br />
                    <input 
                        value={pricePaid} 
                        type="number" 
                        required 
                        onChange={({target}) => setPricePaid(target.value)}
                    /> 
                    <br />
                    <button type="submit">+</button>
                </form>
            </>
        )
    }
    else return (
        <>
            <Auth />
        </>
    )
}
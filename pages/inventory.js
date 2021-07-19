import React, { useState } from "react"
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'
import { useCollection } from "react-firebase-hooks/firestore"

export default function Inventory () {
    const [user, loading, error] = useAuthState(firebase.auth())
    const db = firebase.firestore();

    const [items, itemsLoading, itemsError] = useCollection(
        firebase.firestore().collection("items"),
        {}
    )

    if (!itemsLoading && items) {
        items.docs.map((doc) => console.log(doc.data()));
    }

    if (user) {
        return (
            <>
                <h1>Inventory Page</h1>
            </>
        )
    }
    else return (
        <>
            <Auth />
        </>
    )
}
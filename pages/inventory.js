import { useState, useEffect } from 'react';
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

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

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };

    if (user) {
        return (
            <div className="inventory-container">
                <div>
                    <h1>Inventory</h1>
                </div>
                <Grid>

                </Grid>
                <div> 
                    {
                        items.map(item => {
                            return (
                                <List style={flexContainer}>
                                    <ListItem 
                                        primaryText={item.itemName}
                                        secondaryText={item.size}
                                        thirdText={item.pricePaid}
                                    />
                                </List>
                                //<div className="grid-container">
                                //    <Box sx={{ flexGrow: 1 }}>
                                //        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                //            <Grid item xs={3} sm={4} md={4} key={item.id}>
                                //                <div>
                                //                    <h4 className="item-title">{item.itemName}</h4>
                                //                    <a className="item-desc">{item.size}</a>
                                //                    <a className="item-desc">{item.pricePaid}</a>
                                //                </div>
                                //            </Grid>
                                //        </Grid>
                                //    </Box>
                                //</div>
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
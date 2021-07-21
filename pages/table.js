import React from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from 'react';
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export default function Table(props) {
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
            setData(items);
          });
    }, []);

    const [columns, setColumns] = useState([
      {
        title: 'Item', field: 'itemName',
        editComponent: props => (
          <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        )
      },
      {
        title: 'Size',
        field: 'size',
        lookup: {
            NA: 'N/A',
            3.5: '3.5',
            4: '4',
            4.5: '4.5',
            5: '5',
            5.5: '5.5',
            6: '6',
            6.5: '6.5',
            7: '7',
            7.5: '7.5',
            8: '8',
            8.5: '8.5',
            9: '9',
            9.5: '9.5',
            10: '10',
            10.5: '10.5',
            11: '1',
            11.5: '11.5',
            12: '12',
            12.5: '12.5',
            13: '13',
            13.5: '13.5',
            14: '14',
        },
      },
      {
        title: 'Group',
        field: 'group',
        lookup: {
            collectibles: 'Collectibles',
            electronics: 'Electronics',
            sneakers: 'Sneakers',
            streetwear: 'Streetwear',
            other: 'Other',
        },
      },
      { title: 'Price', field: 'pricePaid', type: 'numeric' },
    ]);

    const [data, setData] = useState([]);

    return (
      <MaterialTable className="table"
        title="Inventory"
        columns={columns}
        data={data}
        options={{
            rowStyle: {
              backgroundColor: '#181a2b',
            }
          }}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
              firebase
              .firestore()
                  .collection('items')
                  .add({
                      itemName: newData.itemName,
                      size: newData.size,
                      group: newData.group,
                      pricePaid: newData.pricePaid,
                  });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
  
                resolve();
              }, 1000)
            }),
            
        }}
        options={{
            actionsColumnIndex: -1
        }}
      />
    )
  }

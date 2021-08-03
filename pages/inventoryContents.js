import { useState, useEffect } from 'react';
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import Auth from '../components/Auth'
import styles from '../styles/InventoryContents.module.css'
import style from '../styles/Modal.module.css'
import { FiEdit, FiTrash, FiPackage, FiBox, FiCpu, FiArchive, FiGlobe, FiX } from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi"
import { IoShirtOutline } from "react-icons/io5"
import Modal from 'react-modal'
import { v4 as uuidv4 } from 'uuid';

export default function InventoryContents() {
    const [user, loading, error] = useAuthState(firebase.auth())
    const [items, setItems] = useState([])
    
    const [refreshPage, setRereshPage] = useState(true)

    const [itemName, setItemName] = useState([])
    const [size, setSize] = useState('')
    const [group, setGroup] = useState('')
    const [price, setPrice] = useState([])

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editModalOpen, setEditModalOpen] =useState(false)

    const uuid = uuidv4()

    var itemCount = 0;
    var sneakerCount = 0;
    var streetwearCount = 0;
    var electronicsCount = 0;
    var collectiblesCount = 0;
    var otherCount = 0;

    var allValue = 0;
    var sneakerValue = 0;
    var streetwearValue = 0;
    var electronicsValue = 0;
    var collectiblesValue = 0;
    var otherValue = 0;


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

    items.map(item => {
        if (item.userId === user.uid) {
            if (item.group == "Sneakers") {
                itemCount = itemCount + 1;
                sneakerCount = sneakerCount + 1;
                allValue = allValue + parseInt(item.pricePaid);
                sneakerValue = sneakerValue + parseInt(item.pricePaid);
            } else if (item.group == "Streetwear") {
                itemCount = itemCount + 1;
                streetwearCount = streetwearCount + 1;
                allValue = allValue + parseInt(item.pricePaid);
                streetwearValue = streetwearValue + parseInt(item.pricePaid);
            } else if (item.group == "Electronics") {
                itemCount = itemCount + 1;
                electronicsCount = electronicsCount + 1;
                allValue = allValue + parseInt(item.pricePaid);
                electronicsValue = electronicsValue + parseInt(item.pricePaid);
            } else if (item.group == "Collectibles") {
                itemCount = itemCount + 1;
                collectiblesCount = collectiblesCount + 1;
                allValue = allValue + parseInt(item.pricePaid);
                collectiblesValue = collectiblesValue + parseInt(item.pricePaid);
            } else if (item.group == "Other") {
                itemCount = itemCount + 1;
                otherCount = otherCount + 1;
                allValue = allValue + parseInt(item.pricePaid);
                otherValue = otherValue + parseInt(item.pricePaid);
            }
        }
    })

    const [activeGroup, setActiveGroup] = useState("All Groups")
    const [activeValue, setActiveValue] = useState(allValue)
    const [activeCount, setActiveCount] = useState(itemCount)

    const saveItemName = (e) => {
        setItemName(e.target.value)
    }

    const saveSize = (e) => {
        setSize(e.target.value)
    }

    const saveGroup = (e) => {
        setGroup(e.target.value)
    }

    const savePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        firebase
          .firestore()
            .collection('items')
            .doc(uuid)
            .set({
                userId: user.uid,
                itemName: itemName,
                size: size,
                group: group,
                pricePaid: price,
                date: new Date()
          });
    }

    const changeToAll = (e) => {
        e.preventDefault()

        setActiveGroup("All Groups");
        setActiveValue(allValue);
        setActiveCount(itemCount);
    }

    const changeToSneakers = (e) => {
        e.preventDefault()

        setActiveGroup("Sneakers");
        setActiveValue(sneakerValue);
        setActiveCount(sneakerCount);
    }

    const changeToStreetwear = (e) => {
        e.preventDefault()

        setActiveGroup("Streetwear");
        setActiveValue(streetwearValue);
        setActiveCount(streetwearCount);
    }

    const changeToElectronics = (e) => {
        e.preventDefault()

        setActiveGroup("Electronics");
        setActiveValue(electronicsValue);
        setActiveCount(electronicsCount);
    }

    const changeToCollectibles = (e) => {
        e.preventDefault()

        setActiveGroup("Collectibles");
        setActiveValue(collectiblesValue);
        setActiveCount(collectiblesCount);
    }

    const changeToOther = (e) => {
        e.preventDefault()

        setActiveGroup("Other");
        setActiveValue(otherValue);
        setActiveCount(otherCount);
    }

    if (user) {
        return (
            <div className={styles.page}>
                <div>
                    <div className={styles.table}>
                        <div className={styles.above_table}>
                            <div className={styles.above_one}>
                                <div className={styles.inventory_icon}>
                                    <FiPackage />
                                </div>
                            </div>
                            <div className={styles.above_two}>
                                <a className={styles.above_two_title}>Inventory</a>
                                <br />
                                <a className={styles.above_two_desc}>Value: ${allValue}</a>
                                <br />
                                <a className={styles.above_two_desc}>Items: {itemCount}</a>
                            </div>
                            <div className={styles.above_three}>
                                <div className={styles.inventory_icon}>
                                    {(() => {
                                        if (activeGroup == "All Groups"){
                                            return (
                                                <FiGlobe />
                                            )
                                        } else if (activeGroup == "Sneakers") {
                                            return (
                                                <div className={styles.sneakers_icon}>
                                                    <GiRunningShoe />
                                                </div>
                                            )
                                        } else if (activeGroup == "Streetwear") {
                                            return (
                                                <div className={styles.streetwear_icon}>
                                                    <IoShirtOutline />
                                                </div>
                                            )
                                        } else if (activeGroup == "Electronics") {
                                            return (
                                                <div className={styles.electronics_icon}>
                                                    <FiCpu />
                                                </div>
                                            )
                                        } else if (activeGroup == "Collectibles") {
                                            return (
                                                <div className={styles.collectibles_icon}>
                                                    <FiArchive />
                                                </div>
                                            )
                                        } else if (activeGroup == "Other") {
                                            return (
                                                <div className={styles.other_icon}>
                                                    <FiBox />
                                                </div>
                                            )
                                        }
                                        
                                        return null;
                                    })()}
                                </div>
                                <div className={styles.group_display}>
                                    {(() => {
                                        if (activeGroup == "All Groups"){
                                            return (
                                                <div>
                                                    <a className={styles.group_title}>All Groups</a>
                                                    <br />
                                                    <a className={styles.group_desc}>Value: ${allValue}</a>
                                                    <br />
                                                    <a className={styles.group_desc}>Items: {itemCount}</a>
                                                </div>
                                            )
                                        } else if (activeGroup != "All Groups") {
                                            return (
                                                <div>
                                                    <a className={styles.group_title}>{activeGroup}</a>
                                                    <br />
                                                    <a className={styles.group_desc}>Value: ${activeValue}</a>
                                                    <br />
                                                    <a className={styles.group_desc}>Items: {activeCount}</a>
                                                </div>
                                            )
                                        } 
                                        return null;
                                    })()}
                                </div>
                            </div>
                            <div className={styles.above_icons}>
                                <div>
                                    <button onClick={changeToAll} className={styles.group_button}>
                                        <div title="All" className={styles.button_contents}>
                                            <div title="All" className={styles.group_icon}>
                                                <FiGlobe />
                                            </div>
                                            <div title="All" className={styles.group_number}>
                                                {itemCount}
                                            </div>
                                        </div>
                                    </button>
                                    <button onClick={changeToSneakers} className={styles.group_button}>
                                        <div title="Sneakers" className={styles.button_contents}>
                                            <div title="Sneakers" className={styles.group_icon}>
                                                <div className={styles.sneakers_icon}>
                                                    <GiRunningShoe />
                                                </div>
                                            </div>
                                            <div title="Sneakers" className={styles.group_number}>
                                                {sneakerCount}
                                            </div>
                                        </div>
                                    </button>
                                    <button onClick={changeToStreetwear} className={styles.group_button}>
                                        <div title="Streetwear" className={styles.button_contents}>
                                            <div title="Streetwear" className={styles.group_icon}>
                                                <div className={styles.streetwear_icon}>
                                                    <IoShirtOutline />
                                                </div>
                                            </div>
                                            <div title="Streetwear" className={styles.group_number}>
                                                {streetwearCount}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button onClick={changeToElectronics} className={styles.group_button}>
                                        <div title="Electronics" className={styles.button_contents}>
                                            <div title="Electronics" className={styles.group_icon}>
                                                <div className={styles.electronics_icon}>
                                                    <FiCpu />
                                                </div>
                                            </div>
                                            <div title="Electronics" className={styles.group_number}>
                                                {electronicsCount}
                                            </div>
                                        </div>
                                    </button>
                                    <button onClick={changeToCollectibles} className={styles.group_button}>
                                        <div title="Collectibles" className={styles.button_contents}>
                                            <div title="Collectibles" className={styles.group_icon}>
                                                <div className={styles.collectibles_icon}>
                                                    <FiArchive />
                                                </div>
                                            </div>
                                            <div title="Collectibles" className={styles.group_number}>
                                                {collectiblesCount}
                                            </div>
                                        </div>
                                    </button>
                                    <button onClick={changeToOther} className={styles.group_button}>
                                        <div title="Other" className={styles.button_contents}>
                                            <div title="Other" className={styles.group_icon}>
                                                <div className={styles.other_icon}>
                                                    <FiBox />
                                                </div>
                                            </div>
                                            <div title="Other" className={styles.group_number}>
                                                {otherCount}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.utility_bar}>
                            <input className={styles.search_bar} type="text" placeholder="Search products" />
                            <button onClick={() => setModalIsOpen(true)} className={styles.add_button}>+</button>
                        </div>
                    </div>
                    <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className={style.modal}>
                        <div className={style.modal_content}>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div onClick={() => setModalIsOpen(false)} className={style.close_icon}>
                                        <FiX />
                                    </div>
                                    <div className={style.add_item}>
                                        <a>Item Adder</a>
                                    </div>
                                </div>
                                <a className={style.input_header}>PRODUCT NAME</a>
                                <input className={style.name_box} type="text" placeholder="Product name" onChange={saveItemName} required/>
                                <div className={style.input_grid}>
                                    <div className={style.price_col}>
                                        <a className={style.input_header}>PURCHASE PRICE</a>
                                        <input type="number" className={style.price_box} placeholder="Price" onChange={savePrice} required />
                                    </div>
                                    <div className={style.size_col}>
                                        <a className={style.input_header}>SIZE</a>
                                        <select className={style.size_box} onChange={saveSize} defaultValue="" required>
                                            <option disabled={true} value="">Size</option>
                                            <option onChange={saveSize}>N/A</option>
                                            <option onChange={saveSize}>XS</option>
                                            <option onChange={saveSize}>S</option>
                                            <option onChange={saveSize}>M</option>
                                            <option onChange={saveSize}>L</option>
                                            <option onChange={saveSize}>XL</option>
                                            <option onChange={saveSize}>XXL</option>
                                            <option onChange={saveSize}>3.5</option>
                                            <option onChange={saveSize}>4</option>
                                            <option onChange={saveSize}>4.5</option>
                                            <option onChange={saveSize}>5</option>
                                            <option onChange={saveSize}>5.5</option>
                                            <option onChange={saveSize}>6</option>
                                            <option onChange={saveSize}>6.5</option>
                                            <option onChange={saveSize}>7.5</option>
                                            <option onChange={saveSize}>8</option>
                                            <option onChange={saveSize}>8.5</option>
                                            <option onChange={saveSize}>9</option>
                                            <option onChange={saveSize}>9.5</option>
                                            <option onChange={saveSize}>10</option>
                                            <option onChange={saveSize}>10.5</option>
                                            <option onChange={saveSize}>11</option>
                                            <option onChange={saveSize}>11.5</option>
                                            <option onChange={saveSize}>12</option>
                                            <option onChange={saveSize}>12.5</option>
                                            <option onChange={saveSize}>13</option>
                                            <option onChange={saveSize}>13.5</option>
                                            <option onChange={saveSize}>14</option>
                                        </select>
                                    </div>
                                    <div className={style.group_col}>
                                        <a className={style.input_header}>GROUP</a>
                                        <select className={style.group_box} onChange={saveGroup} defaultValue="" required>
                                            <option disabled={true} value="">Group</option>
                                            <option onChange={saveGroup}>Sneakers</option>
                                            <option onChange={saveGroup}>Streetwear</option>
                                            <option onChange={saveGroup}>Electronics</option>
                                            <option onChange={saveGroup}>Collectibles</option>
                                            <option onChange={saveGroup}>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={style.buttons}>
                                    <button className={style.add_box} type="submit" >Add Item</button>
                                </div>
                            </form>
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
                    <div className={styles.content_container}>
                        {
                            items.map(item => {
                                if(item.userId === user.uid) {
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
                                            <button className={styles.edit_button} onClick={() => {
                                                setEditModalOpen(true)
                                            }}><FiEdit /></button>
                                            <Modal ariaHideApp={false} isOpen={editModalOpen} onRequestClose={() => setEditModalOpen(false)} className={style.modal}>
                                                <div className={style.modal_content}>
                                                    <form onSubmit={() => {
                                                        firebase
                                                            .firestore()
                                                            .collection('items')
                                                            .doc(item.id)
                                                            .update({
                                                                itemName: itemName,
                                                                size: size,
                                                                group: group,
                                                                pricePaid: price,
                                                        })
                                                    }}>
                                                        <input type="text" placeholder="Product Name" onChange={saveItemName} value={item.itemName} required />
                                                        <input type="text" placeholder="Size" onChange={saveSize} value={item.size} required />
                                                        <input type="text" placeholder="Group" onChange={saveGroup} value={item.group} required />
                                                        <input type="number" placeholder="Price Paid" onChange={savePrice} value={item.pricePaid} required />
                                                        <button type="submit" >Edit Item</button>
                                                    </form>
                                                    <button onClick={() => setEditModalOpen(false)}>Close</button>
                                                </div>
                                            </Modal>
                                            <button className={styles.delete_button} onClick={() => {
                                                firebase
                                                    .firestore()
                                                    .collection('items')
                                                    .doc(item.id)
                                                    .delete()
                                                    .then(() => {
                                                        console.log(item.id)
                                                    })
                                            }}><FiTrash /></button>
                                        </div>
                                        </div>
                                    )
                                    
                                }   
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    else return (
        <Auth />
    )
}
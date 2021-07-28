import styles from '../styles/DashboardContents.module.css'
import { FiPackage, FiBriefcase, FiTrendingUp, FiTag } from 'react-icons/fi'
import { useState, useEffect } from 'react';
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import { PieChart } from 'react-minimal-pie-chart';
import { BsDot } from 'react-icons/bs';

export default function DashContentsOne() {
    const [user, loading, error] = useAuthState(firebase.auth())
    const [items, setItems] = useState([])

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

    var sneakerPercent = (sneakerValue / allValue) * 100;

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

    return (
        <div>
            <div className={styles.user_card}>
                <a className={styles.user_card_greeting}>Welcome back,</a>
                <br />
                <a className={styles.user_card_name}>{user.displayName}!</a>
            </div>
            <div className={styles.summary_row}>
                <div className={styles.summary_card}>
                    <div className={styles.summary_card_first_col}>
                        <div className={styles.summary_card_icon}>
                            <div className={styles.icon}>
                                <FiPackage />
                            </div>
                        </div>
                    </div>
                    <div className={styles.summary_card_second_col}>
                        <a className={styles.content_title}>Items</a>
                        <br />
                        <a className={styles.content_main}>{itemCount}</a>
                        <br />
                        <a className={styles.content_desc}>Total Items</a>
                    </div>
                </div>
                <div className={styles.summary_card}>
                    <div className={styles.summary_card_first_col}>
                        <div className={styles.summary_card_icon}>
                            <div className={styles.icon}>
                                <FiBriefcase />
                            </div>
                        </div>
                    </div>
                    <div className={styles.summary_card_second_col}>
                        <a className={styles.content_title}>Inventory Value</a>
                        <br />
                        <a className={styles.content_main}>${allValue}</a>
                        <br />
                        <a className={styles.content_desc}>Total Inventory Value</a>
                    </div>
                </div>
                <div className={styles.summary_card}>
                    <div className={styles.summary_card_first_col}>
                        <div className={styles.summary_card_icon}>
                            <div className={styles.icon}>
                                <FiTrendingUp />
                            </div>
                        </div>
                    </div>
                    <div className={styles.summary_card_second_col}>
                        <a className={styles.content_title}>Sales</a>
                        <br />
                        <a className={styles.content_main}>20</a>
                        <br />
                        <a className={styles.content_desc}>Total Sales</a>
                    </div>
                </div>
                <div className={styles.summary_card}>
                    <div className={styles.summary_card_first_col}>
                        <div className={styles.summary_card_icon}>
                            <div className={styles.icon_tag}>
                                <FiTag />
                            </div>
                        </div>
                    </div>
                    <div className={styles.summary_card_second_col}>
                        <a className={styles.content_title}>Sales Value</a>
                        <br />
                        <a className={styles.content_main}>$92</a>
                        <br />
                        <a className={styles.content_desc}>Total Sales Value</a>
                    </div>
                </div>
            </div>
            <div className={styles.third_row_container}>
                <h1 className={styles.inventory_summary}>Inventory Summary</h1>
                <div className={styles.pie_row}>
                    <div className={styles.piechart}>
                        <PieChart
                            data={[
                                { title: 'Sneakers', value: sneakerValue, color: 'rgb(255, 80, 80)' },
                                { title: 'Streetwear', value: streetwearValue, color: 'rgb(255, 188, 62)' },
                                { title: 'Electronics', value: electronicsValue, color: 'rgb(93, 201, 93)' },
                                { title: 'Collectibles', value: collectiblesValue, color: 'rgb(163, 163, 163)' },
                                { title: 'Other', value: otherValue, color: 'rgb(179, 110, 206)' },
                            ]}
                            label={({ x, y, dx, dy, dataEntry }) => (
                                <text
                                x={x}
                                y={y}
                                dx={dx}
                                dy={dy}
                                dominant-baseline="central"
                                text-anchor="middle"
                                style={{
                                    fontSize: '5px',
                                    fontFamily: 'sans-serif',
                                    fontWeight: 'bold',
                                }}
                                >
                                {Math.round(dataEntry.percentage) + '%'}
                                </text>
                            )}
                        />
                    </div>
                </div>
                <div className={styles.legend}>
                    <div className={styles.legend_row_one}>
                        <div className={styles.legend_col}>
                            <div className={styles.sneakers_dot}>
                                <BsDot />
                            </div>
                            <a>Sneakers</a>
                        </div>
                        <div className={styles.legend_col}>
                            <div className={styles.streetwear_dot}>
                                <BsDot />
                            </div>
                            <a>Streetwear</a>
                        </div>
                        <div className={styles.legend_col}>
                            <div className={styles.electronics_dot}>
                                <BsDot />
                            </div>
                            <a>Electronics</a>
                        </div>
                    </div>
                    <div className={styles.legend_row_two}>
                        <div className={styles.legend_col}>
                            <div className={styles.collectibles_dot}>
                                <BsDot />
                            </div>
                            <a>Collectibles</a>
                        </div>
                        <div className={styles.legend_col}>
                            <div className={styles.other_dot}>
                                <BsDot />
                            </div>
                            <a>Other</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
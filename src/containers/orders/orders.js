import React, { useState, useEffect } from 'react';
import SingleOrder from './singleOrder/singleOrder';
import axios from "../../axios-order";
import withErrorHandler from "./../../components/hoc/withErrorModal"
const Orders = (props) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("/orders.json").then(res => {
            console.log('res.data', res)
            let fetchedOrders = []
            for (const key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            setOrders(fetchedOrders)
        })
            .catch(err => {
                setLoading(false);
            })
    }, [])

    return (
        <div>
            {orders.map(order => (
                <SingleOrder key={order.id} orderId={order.id} ingredients={order.ingredients} price={order.price} />
            ))}
        </div>
    )
}
export default withErrorHandler(Orders, axios);
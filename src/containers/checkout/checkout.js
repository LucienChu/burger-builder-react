import React, { useState, useEffect } from 'react'
import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './contactData/contactData';

const Checkout = (props) => {
    const [ingredient, setingredient] = useState({})
    const [totalPrice, setTotalPrice] = useState(0)
    const cancelCheckout = () => {
        props.history.goBack();
    }
    const continueCheckout = () => {
        props.history.replace(`${props.match.path}/contact-data`);
    }
    useEffect(() => {
        const ingredient = {}
        const query = new URLSearchParams(props.location.search);
        for (let param of query.entries()) {
            if (param[0] === "price") {
                setTotalPrice(param[1])
            }
            else {
                ingredient[param[0]] = +(param[1])
            }
        }
        console.log("ingredients", ingredient)
        setingredient(ingredient)
    }, [])

    return (
        <div>
            <CheckoutSummary
                ingredients={ingredient}
                handleCancel={cancelCheckout}
                handleContinue={continueCheckout}
            />
            {console.log('props.match.path', props.match.path)}
            <Route path={`${props.match.path}/contact-data`} render={() => (<ContactData {...props} ingredients={ingredient} price={totalPrice} />)} />
        </div>
    )
};

export default Checkout;
import React, { useState, useEffect } from 'react';
import Button from "../../../components/UI/button/Button"
import styles from "./contactData.module.css";
import axios from "../../../axios-order";
import spinner from '../../../components/UI/spinner/Spinner';
import Input from "../../../components/UI/input/input"
import { defaultOrderData } from "./defaultData";
const ContactData = (props) => {
    const [orderData, setOrderData] = useState(defaultOrderData)
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(null);
    const placeOrder = (event) => {
        event.preventDefault()
        setLoading(true)
        const formData = {};
        for (const key in orderData) {
            if (orderData.hasOwnProperty(key)) {
                formData[key] = orderData[key].value;

            }
        }
        const orderDetails = {
            ingredients: props.ingredients,
            price: props.price.toFixed(2),
            orderData: formData
        }
        debugger
        axios.post("/orders.json", orderDetails).then(response => {
            setLoading(false);
            goBack();
        }).catch(e => {
            console.log("error occurs", e)
            setLoading(false);
        })
    }
    const goBack = () => {
        props.history.push("/");
    }


    const onChangeHandler = (event, identifier) => {
        const copiedForm = { ...orderData };
        const value = event.target.value;
        copiedForm[identifier].value = value;
        setOrderData(copiedForm);
    }
    const renderForm = () => {
        let formElementArray = [];
        for (const key in orderData) {
            if (orderData.hasOwnProperty(key)) {
                const element = orderData[key];
                formElementArray.push({
                    id: key,
                    config: element
                });

            }
        }
        return (
            <div>
                <form className={styles.ContactData} onSubmit={placeOrder} >
                    {formElementArray.map((element) => {
                        return (
                            <Input
                                key={element.id}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.value}
                                onChange={(event) => onChangeHandler(event, element.id)}
                            />
                        )
                    })}
                    <Button btnType="Success" onClick={placeOrder}>Place Order</Button>
                </form>
            </div>
        )
    }

    useEffect(() => {
        if (loading) {
            setForm(spinner)
        }
        else {
            setForm(renderForm())
        }
    }, [loading, orderData])

    return (
        form
    )
}

export default ContactData;
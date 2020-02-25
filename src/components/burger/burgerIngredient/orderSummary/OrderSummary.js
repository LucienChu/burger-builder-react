import React from 'react'
import Button from "../../../UI/button/Button"
const OrderSummary = (props) => {
    const ingredientList = Object.keys(props.ingredients).map((objKey) => {
        if (props.ingredients[objKey] > 0) {
            return <li key={objKey}><span style={{ textTransform: "capitalize" }}>{objKey}: </span>{props.ingredients[objKey]}</li>
        }
        else {
            return null
        }
    })
    return (
        <div>
            <h1>Your order contains the following ingredients</h1>
            <ul>
                {ingredientList}
            </ul>
            <p>Total price: $<strong>{props.price}</strong></p>
            <p>Continue to checkout?</p>

            <Button btnType="Danger" onClick={props.cancelHandler}>Cancal</Button>
            <Button btnType="Success" onClick={props.continueHandler}>Continue</Button>
        </div>
    )
}

export default OrderSummary

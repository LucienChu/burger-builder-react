import React from 'react';
import styles from "./singleOrder.module.css";

const singleOrder = (props) => {
    const renderIngredients = () => {
        console.log('render ingredients is called', props.ingredients)
        for (const key in props.ingredients) {
            return (
                <h3>{key}: {props.ingredients[key]}</h3>
            )
        }
    }

    return (
        <div className={styles.Order}>
            <h1>order id: {props.orderId}</h1>
            <h2>Ingredients</h2>
            {renderIngredients()}
            <h3>price: ${props.price}</h3>
        </div>
    )
}
export default singleOrder;
import React from 'react';
import Burger from '../../burger/Burger';
import Button from "./../../UI/button/Button";
import styles from "./checkoutSummary.module.css"
const checkoutSummary = props => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: "100%", margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" onClick={props.handleCancel}>Cancel</Button>
            <Button btnType="Success" onClick={props.handleContinue}>Continue</Button>
        </div>
    )
}

export default checkoutSummary;
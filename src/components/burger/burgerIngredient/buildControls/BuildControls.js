import React from 'react'
import styles from "./BuildControls.module.css"
import BuildControl from "../buildControl/BuildControl"


const controls = [
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
]
const BuildControls = (props) => {
    return <div className={styles.BuildControls}>
        <div>Total price: <strong>{props.price}</strong></div>
        {
            controls.map(control => {
                return <BuildControl
                    key={control.type}
                    type={control.type}
                    label={control.label}
                    addIngredientHandler={() => props.addIngredient(control.type)}
                    removeIngredientHandler={() => props.subtractIngredient(control.type)}
                    disableButton={props.disableButtons[control.type]}
                />
            })
        }
        <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.toggleModal}>Confirm</button>
        <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.reset}>Restart</button>
    </div>
}


export default BuildControls
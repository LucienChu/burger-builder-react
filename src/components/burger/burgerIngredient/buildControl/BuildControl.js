import React from 'react'
import styles from "./BuildControl.module.css"
const BuildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less} onClick={props.removeIngredientHandler} disabled={props.disableButton}>Remove</button>
            <button className={styles.More} onClick={props.addIngredientHandler}>Add</button>
        </div>
    )
}

export default BuildControl

import React from 'react'
import styles from './BurgerIngredient.module.css'
import PropTypes from "prop-types"
const ingredient = (props) => {
    const type = props.type
    let burgerIngredient = null
    switch (type) {
        case "bread-bottom":
            burgerIngredient = <div className={styles.BreadBottom}></div>
            break
        case "bread-top":
            burgerIngredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            )
            break
        case "meat":
            burgerIngredient = <div className={styles.Meat}></div>
            break
        case "cheese":
            burgerIngredient = <div className={styles.Cheese}></div>
            break
        case "bacon":
            burgerIngredient = <div className={styles.Bacon}></div>
            break
        case "salad":
            burgerIngredient = <div className={styles.Salad}></div>
            break
        default:
            burgerIngredient = null
    }
    return burgerIngredient
}

ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default ingredient 
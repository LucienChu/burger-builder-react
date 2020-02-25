import React from 'react'
import Ingredient from "./burgerIngredient/BurgerIngredient"
import styles from "./Burger.module.css"
const Burger = ({ ingredients }) => {
    let ingredientsArray = Object.keys(
        ingredients).map(key => {
            return [...Array(ingredients[key])].map((_, i) => {
                return <Ingredient key={key + i} type={key} />
            })
        }).reduce((array, el) => {
            return array.concat(el)
        }, [])

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p>Please start to add some ingredients for you burger</p>
    }

    return (
        <div className={styles.Burger}>
            <Ingredient type="bread-top" />
            {
                ingredientsArray
            }
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger

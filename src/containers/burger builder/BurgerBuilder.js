import React, { Component } from 'react'
import Burger from '../../components/burger/Burger'
import BurgerControls from "../../components/burger/burgerIngredient/buildControls/BuildControls"
import Modal from '../../components/UI/modal/Modal';
import OrderSummary from '../../components/burger/burgerIngredient/orderSummary/OrderSummary';

import axios from "../../axios-order"
import Spinner from '../../components/UI/spinner/Spinner';
import withErrorModal from "../../components/hoc/withErrorModal"



const INGREDIENT_PRICE = {
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
    salad: 0.5
};
export class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        showConfirmOrderModal: false,
        loading: true,
        hasError: false
    };

    componentDidMount() {
        axios.get("/ingredients.json")
            .then(response => {
                console.log("response", response.data)
                this.setState({
                    ingredients: response.data,
                    loading: false
                })
            }).catch(error => {
                console.log("error in fetching data", error)
                this.setState({ loading: false, hasError: true })
            })
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = newCount;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type]

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        const newPrice = (this.state.totalPrice - INGREDIENT_PRICE[type])
        if (newCount < 0 || newPrice < 0) {
            return
        }

        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = newCount;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    resetStateHandler = () => {
        this.setState({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        })
    }

    toggleOrderModalhandler = () => {
        const toggleModal = this.state.showConfirmOrderModal
        this.setState({
            showConfirmOrderModal: !toggleModal
        })
    }

    orderConfirmed = () => {
        console.log('continue to order')
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push(`price=${this.state.totalPrice}`);
        const queryString = queryParams.join("&")
        this.props.history.push({
            pathname: "/checkout",
            search: `?${queryString}`
        })
    }
    render() {
        const disalbeKeys = {
            ...this.state.ingredients
        }

        for (let key in disalbeKeys) {
            disalbeKeys[key] = disalbeKeys[key] <= 0
        }

        let purchasable = false
        for (let key in disalbeKeys) {
            if (!disalbeKeys[key]) {
                purchasable = true
            }
        }
        let orderSummary = null

        let burgerContent = <Spinner />

        if (this.state.hasError) {
            burgerContent = (<p>There is an error</p>)
        }
        else if (this.state.ingredients && !this.state.hasError) {
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    cancelHandler={this.toggleOrderModalhandler}
                    continueHandler={this.orderConfirmed}
                    price={this.state.totalPrice.toFixed(2)} />
            );
            burgerContent = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerControls
                        price={this.state.totalPrice.toFixed(2)}
                        addIngredient={this.addIngredientHandler}
                        subtractIngredient={this.removeIngredientHandler}
                        disableButtons={disalbeKeys}
                        purchasable={purchasable}
                        reset={this.resetStateHandler}
                        toggleModal={this.toggleOrderModalhandler}
                    />
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>

                {burgerContent}
                <Modal show={this.state.showConfirmOrderModal} dismissModal={this.toggleOrderModalhandler}>
                    {orderSummary}
                </Modal>
            </React.Fragment>
        )
    }
}

export default withErrorModal(BurgerBuilder, axios)

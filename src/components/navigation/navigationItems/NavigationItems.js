import React from 'react';
import styles from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem"
const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact> Burger Builder </NavigationItem>
        <NavigationItem link="/orders" exact >Check out</NavigationItem>

    </ul>
)
export default navigationItems
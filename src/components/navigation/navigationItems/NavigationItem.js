import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from "./NavigationItem.module.css"
const navigationItem = (props) => (

    <li className={styles.Navigationitem} >
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={props.exact ? styles.active : null}>
            {props.children}
        </NavLink>
    </li>
)

export default navigationItem
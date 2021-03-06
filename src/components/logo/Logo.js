import React from 'react';
import styles from "./Logo.module.css"
import burgerLogo from "../../assets/images/logo/burger-logo.png";
const logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt="burger logo" />
        </div>
    )
};
export default logo;
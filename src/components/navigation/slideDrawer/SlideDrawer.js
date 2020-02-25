import React from 'react';
import Logo from "../../logo/Logo"
import NavigationItems from "../navigationItems/NavigationItems"
import styles from "./SlideDrawer.module.css"
import Backdrop from "../../UI/backdrop/Backdrop"
const slideDrawer = (props) => {
    let style = [styles.SlideDrawer, styles.Close]
    if (props.open) {
        style = [styles.SlideDrawer, styles.open]
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} onClick={props.dismissModal} />
            <div className={style.join(" ")}>

                <div className={styles.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </React.Fragment>

    )
}

export default slideDrawer
import React from 'react'
import styles from "./DrawerToggle.module.css"
const drawerToggle = (props) => {
    return (
        <React.Fragment>
            <div className={styles.MenuTag}>Menu</div>
            <div
                className={styles.DrawerToggle}
                onClick={props.onClick}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </React.Fragment>
    )
}

export default drawerToggle
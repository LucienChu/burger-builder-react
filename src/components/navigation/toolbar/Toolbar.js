import React from 'react';
import styles from "./Toolbar.module.css";
import DrawerToggle from "./drawToggle/DrawerToggle"
import Logo from "../../logo/Logo";
import NavigationItems from '../navigationItems/NavigationItems';
const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle onClick={props.slideDrawerToggler} />
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}
export default toolbar

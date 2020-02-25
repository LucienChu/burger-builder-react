import React from 'react';
import styles from "./Layout.module.css"
import Toolbar from "../navigation/toolbar/Toolbar"
import SlideDrawer from "../navigation/slideDrawer/SlideDrawer"
class layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    toggleSlideDrawer = () => {
        this.setState(prevState => ({
            showSideDrawer: !prevState.showSideDrawer
        }))
    }
    render() {
        return (<React.Fragment>
            <Toolbar slideDrawerToggler={this.toggleSlideDrawer} />
            <SlideDrawer open={this.state.showSideDrawer} dismissModal={this.toggleSlideDrawer} />
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </React.Fragment>
        )
    }
}
export default layout
//dependencies
import React, { Component } from 'react';
import './SideDrawer.css'
class SideDrawer extends Component {
    render() {
        let drawerClasses;
        if(this.props.show === true) {
             drawerClasses = 'side-drawer open'
        }else{
             drawerClasses = 'side-drawer';
        }
        console.log(this.props.show);
        return(
            <nav className={drawerClasses}>
                <ul>
                    <li><a href="/">To do list</a></li>
                    <li><a href="/">Profile</a></li>
                </ul>
            </nav>
        );
    }
}

export default SideDrawer;

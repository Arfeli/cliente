import React, { Component } from 'react';
import './Toolbar.css';
import DrawerToggle from '../sideDrawer/DrawerToggle'

class Toolbar extends Component {
    render() {
        return (
          <header className="toolbar">
              <nav className="toolbar__navigation">
                  <div>
                      <DrawerToggle click={this.props.drawerClickHandler} />
                  </div>
                  <div className="toolbar__logo"><a href="/">LOGO</a></div>
                  <div className="spacer"></div>
                  <div className="toolbar__navigation-items">
                      <ul>
                          <li><a href="/">To do list</a></li>
                          <li><a href="/"> Profile </a></li>
                      </ul>
                  </div>

              </nav>
          </header>

        );
    }
}
export default Toolbar;
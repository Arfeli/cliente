//dependencies
import React, { Component } from 'react';

//components
import './App.css';
import Toolbar from '../toolbar/Toolbar';
import SiteDrawer from '../sideDrawer/SideDrawer';
import Backdrop from "../backdrop/Backdrop";
class App extends Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
      this.setState((prevState)=> {
          return {sideDrawerOpen: !prevState.sideDrawerOpen }
      });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {

        let backDrop = null;

        if(this.state.sideDrawerOpen){

            backDrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return(
            <div className="App">
               <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SiteDrawer show ={this.state.sideDrawerOpen} />
               {backDrop}
               <main>
                   <p>page content</p>
               </main>
            </div>

        );
    }
}

export default App;

import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

import './App.css';

class App extends Component {
  state = {
    sidedrawerOpen: false
  };

  backdropClickHandler = () => {
    this.setState({ sidedrawerOpen: false });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidedrawerOpen: !prevState.sidedrawerOpen }
    });
  };

  closeDrawer = () => {
    this.setState({ sidedrawerOpen: false });
  }
  render() {
    let backdrop;

    if (this.state.sidedrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Router>
          <>
            <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sidedrawerOpen} click={this.backdropClickHandler} />
            {backdrop}
            <Container />
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

export default App;

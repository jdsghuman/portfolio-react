import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import ReactGA from 'react-ga';

import './App.css';

class App extends Component {
  state = {
    sidedrawerOpen: false
  };

  componentDidMount() {
    ReactGA.initialize('UA-78377127-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
          </>
        </Router>
      </div>
    );
  }
}

export default App;

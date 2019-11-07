import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

import './App.css';

const history = createHistory()
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

class App extends Component {
  state = {
    sidedrawerOpen: false
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname)
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

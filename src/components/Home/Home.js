import React, { Component } from 'react';
import InteractiveButtons from '../InteractiveButtons/InteractiveButtons';
import Terminal from '../Terminal/Terminal';
import HomeDetail from '../HomeDetail/HomeDetail';

import './Home.css';

class Home extends Component {
  state = {
    maximize: false,
    minimize: false,
    open: true,
    page: 'home'
  }

  render() {
    return (
      <div className={this.state.maximize === false ? 'wrapper' : 'wrapper__maximize'}>
        <div className="large-hero">
          <div className={this.state.open === true ? 'large-hero__text-content' : 'large-hero__text-content--closed' }>
            <InteractiveButtons 
              maximizeTerminal={this.maximizeTerminal}
              minimizeTerminal={this.minimizeTerminal} 
              closeTerminal={this.closeTerminal}
              open={this.state.open}
              page="home" />
            <HomeDetail minimize={this.state.minimize} open={this.state.open} />
            <Terminal clear={this.minimizeTerminal} page={this.state.page} openTerminal={this.state.open} />
          </div>
        </div>
      </div>
    );
  }

  maximizeTerminal = () => this.setState({ maximize: true });
  minimizeTerminal = () => {
    this.state.maximize ? this.setState({ maximize: false }) : this.setState({ minimize: true });
  };
  closeTerminal = () => {
    this.setState({ 
      open: false,
      maximize: false 
    })
  };
}



export default Home;
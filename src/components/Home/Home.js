import React, { Component } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import InteractiveButtons from '../InteractiveButtons/InteractiveButtons';

import './Home.css';

class Home extends Component {
  state = {
    maximize: false,
    open: true
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
            <p className="primary__intro">&#47;&#47; Hi, my name is</p>
            <p className="primary__name">JD Ghuman</p><br/>
            <p className="primary__description">I build things with software.</p>
            <p className={this.state.open === true ? 'primary__detail' : 'primary__detail primary__detail--closed'}>I'm a software engineer based out of Minneapolis, MN and build web applications for desktop and mobile.</p>
            <Link to="/projects">
              <Button classes="btn btn__home">Projects</Button>
            </Link>
            <p className="terminal__home">>></p>
          </div>
        </div>
      </div>
    );
  }

  maximizeTerminal = () => this.setState({ maximize: true });
  minimizeTerminal = () => this.setState({ maximize: false });
  closeTerminal = () => {
    this.setState({ 
      open: false,
      maximize: false 
    })
  };
}



export default Home;
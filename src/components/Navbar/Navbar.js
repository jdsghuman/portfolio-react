import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <nav>
        <div>
          <Link to="/">
            <img src="/images/JD-Develop.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">
                <button>Resume</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
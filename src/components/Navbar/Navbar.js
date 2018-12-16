import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
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
        <div className="nav__primary">
        <div>
          <Link to="/">
            <img src="/images/JD-Develop-white.png" alt="Logo" />
          </Link>
        </div>
        <div className="menu--desktop">
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
                <Button>Resume</Button>
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
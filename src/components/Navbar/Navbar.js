import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarDesktop from './NavbarDesktop';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav>
        <div className="nav nav__primary">
          <div className="nav-left">
            <Link to="/">
              <img src="/images/JD-Develop-white.png" alt="Logo" />
            </Link>
          </div>
          <div className="nav-right">
            <div className="menu--mobile">
            {/* Mobile/Tablet menu icon */}
              <DrawerToggleButton click={this.props.drawerToggleClickHandler} />
            </div>
            <div className="menu--desktop">
              <NavbarDesktop />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <div>
        <ul onClick={props.click} className="site-header">
          <li>
            <Link className="nav-link__mobile" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link__mobile" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="nav-link__mobile" to="/about">About</Link>
          </li>
          <li className="side-drawer__border--none">
            <Link to="/resume">
              <Button classes="btn btn__resume--mobile">Resume</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav >
  );
}

export default sideDrawer;


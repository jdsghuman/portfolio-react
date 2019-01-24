import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const navbarDesktop = props => (
  <>
    <ul className="nav__desktop-links">
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
          <Button classes="btn">Resume</Button>
        </Link>
      </li>
    </ul>
  </>
)

export default navbarDesktop;


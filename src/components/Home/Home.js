import React, { Component } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import './Home.css';

const btnStyle = {
  marginBottom: '100px',
  border: '2px solid #2cbadb',
  padding: '9px 14px',
  fontSize: '1rem',
}

class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="large-hero">
          <div className="large-hero__text-content">
            <p className="primary__intro">&#47;&#47; Hi, my name is</p>
            <p className="primary__name">JD Ghuman</p>
            <p className="primary__description">I build things with software.</p>
            <p className="primary__detail">I'm a software developer based out of Minneapolis, MN and build web applications for desktop and mobile.</p>
            <Link to="/projects">
              <Button style={btnStyle}>Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}



export default Home;
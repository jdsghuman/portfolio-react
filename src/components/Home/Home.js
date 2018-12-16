import React, { Component } from 'react';
import Button from '../Button/Button';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="large-hero">
          <div className="large-hero__text-content">
          <p className="primary__intro">&#47;&#47; Hi, my name is</p>
          <p className="primary__name">JD Ghuman</p>
          <p className="primary__description">I build software applications.</p>
          <p className="primary__detail">I'm a software developer based out of Minneapolis, MN and build web applications for desktop and mobile.</p>
          <Button id="btn--dark">Contact Me</Button>
          </div>
        </div>
      </div>
    );
  }
}



export default Home;
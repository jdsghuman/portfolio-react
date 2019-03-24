import React, { Component } from 'react';
import Title from '../Title/Title';
import './About.css';

class About extends Component {
  render() {
    return (
      <>
        <Title>ABOUT</Title>
        <div className="about__container">
          <div className="about__description">
            <div>
              <p>
                I am a Full Stack Software Engineer with a background in software automation,
              located in Minneapolis, MN. I enjoy turning concepts and ideas into
              beautiful, responsive, user intuitive designs.
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <p>
                When I am not building websites or automating all the things,
                I can be found hanging out with my family, walking my yappy dog,
                or drinking coffee…. I’m always drinking coffee!
              </p>
              <p className="terminal">>></p>
            </div>
          </div>
          <div className="about__links">
            <a href="https://www.linkedin.com/in/jdghuman/" target="_blank" rel="noopener noreferrer"><img className="img__about" alt="linkedin icon" src="images/linkedin-brands.svg" /></a>
            <a className="link__email" href="mailto:jdsghuman@gmail.com"><img className="img__about" alt="email icon" src="images/envelope-regular.svg" /></a>
            <a href="https://github.com/jdsghuman" target="_blank" rel="noopener noreferrer"><img className="img__about" alt="github icon" src="images/github-square-brands.svg" /></a>
          </div>
        </div>
      </>
    );
  }
}

export default About;
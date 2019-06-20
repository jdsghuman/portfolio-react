import React, { Component } from 'react';
import Title from '../Title/Title';
import InteractiveButtons from '../InteractiveButtons/InteractiveButtons';
import Terminal from '../Terminal/Terminal';
import './About.css';
import EmptyTerminal from '../EmptyTerminal/EmptyTerminal';

class About extends Component {
  state = {
    maximize: false,
    minimize: false,
    open: true,
    page: 'about'
  }
  render() {
    return (
      <>
        <Title>ABOUT</Title>
        <div className={this.state.maximize === false ? 'about__container' : 'about__container about__container--maximize'}>
          <InteractiveButtons 
            page="about" 
            maximizeTerminal={this.maximizeTerminal}
            minimizeTerminal={this.minimizeTerminal}
          />
          {!this.state.minimize && (
            <div className="about__description">
            <div className="about__links">
              <a href="https://www.linkedin.com/in/jdghuman/" target="_blank" rel="noopener noreferrer"><img className="img__about" alt="linkedin icon" src="images/linkedin-brands.svg" /></a>
              <a className="link__email" href="mailto:jdsghuman@gmail.com"><img className="img__about" alt="email icon" src="images/envelope-regular.svg" /></a>
              <a href="https://github.com/jdsghuman" target="_blank" rel="noopener noreferrer"><img className="img__about" alt="github icon" src="images/github-square-brands.svg" /></a>
            </div>
            <div>
              <p>
                I am a Full Stack Software Engineer with a background in software automation,
              located in Minneapolis, MN. I enjoy turning concepts and designs into
              front end UI and solving complex problems with code.
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <p>
                When I am not building web applications or coding,
                I can be found hanging out with my family, walking my yappy dog,
                or drinking coffee…. I’m always drinking coffee!
              </p>
            </div>
          </div>
          )}
          {this.state.minimize && this.state.open && 
            <EmptyTerminal />
          }
          <Terminal clear={this.minimizeTerminal} page={this.state.page} openTerminal={this.state.open} />
        </div>
      </>
    );
  }

  maximizeTerminal = () => this.setState({ maximize: true });
  minimizeTerminal = () => {
    this.state.maximize ? this.setState({ maximize: false }) : this.setState({ minimize: true });
  };
}

export default About;
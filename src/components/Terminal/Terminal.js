import React, { Component } from 'react';
import './Terminal.css';

class Terminal extends Component {
  state = {
    clickedTerminal: false
  }
  render() {
    return (
      <span onClick={this.clickTerminal}>
        {this.props.openTerminal && this.props.page === 'home' &&
          <p id="terminal__border" className={!this.state.clickedTerminal ? 'terminal__blink terminal__blink-home' : 'terminal__blink terminal__blink--clicked terminal__blink-home'}><span contentEditable="true" className="terminal__text--clicked"></span></p>}
          {this.state.showTerminal && <input styles={{display: 'inline'}} type="text" />}
        {this.props.openTerminal && this.props.page === 'about' &&
          <p id="terminal__border" className={!this.state.clickedTerminal ? 'terminal__blink terminal__blink-about' : 'terminal__blink terminal__blink--clicked terminal__blink-about'}><span contentEditable="true" className="terminal__text--clicked"></span></p>}
      </span>
    )
  }

  clickTerminal = () => {
    this.setState({ clickedTerminal: true });
  }
}

export default Terminal;
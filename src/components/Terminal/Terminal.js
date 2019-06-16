import React, { Component } from 'react';
import './Terminal.css';

class Terminal extends Component {
  render() {
    return (
      <>
        {this.props.openTerminal && this.props.page === 'home' &&
          <p className="terminal__blink terminal__blink-home">>></p>}

        {this.props.openTerminal && this.props.page === 'about' &&
          <p className="terminal__blink terminal__blink-about">>></p>}
      </>
    )
  }
}

export default Terminal;
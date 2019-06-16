import React, { Component } from 'react';
import './Terminal.css';

class Terminal extends Component {
  render() {
    return (
      <>
        {this.props.openTerminal && <p className="terminal__home">>></p>}
      </>
    )
  }
}

export default Terminal;
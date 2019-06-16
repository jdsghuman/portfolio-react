import React, { Component } from 'react';
import moment from 'moment';
import './EmptyTerminal.css';

class EmptyTerminal extends Component {
  render() {
    return (
      <>
        <p className="terminal__text">Last login: {moment().format('llll')}</p>
        <p className="terminal__text">>></p>
        <p className="terminal__text">>></p>
        <p className="terminal__text">>></p>
        <p className="terminal__text">>></p>
      </>
    )
  }
}

export default EmptyTerminal;
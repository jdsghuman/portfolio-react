import React, { Component } from 'react';
import './InteractiveButtons.css';

class InteractiveButtons extends Component {
  render() {
    return (
      <>
        <span className={this.props.class}></span>
        <span className={this.props.class}></span>
        <span className={this.props.class}></span>
      </>
    )
  }
}

export default InteractiveButtons;
import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button style={this.props.style}>{this.props.children}</button>
    );
  }
}

export default Button;
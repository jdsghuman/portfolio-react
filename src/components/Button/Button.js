import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  onClick = (url) => {
    if (url) {
      console.log('clicked');
      window.open(url, "_blank");
    }
  }

  render() {
    return (
      <button onClick={() => this.onClick(this.props.url)} className="btn" style={this.props.style}>{this.props.children}</button>
    );
  }
}

export default Button;
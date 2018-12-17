import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  // Open URL in new tab
  onClick = (url) => {
    if (url) {
      console.log('clicked');
      window.open(url, "_blank");
    }
  }

  delete = (id) => {
    
  }

  render() {
    return (
      <button onClick={() => this.onClick(this.props.url)} 
        className="btn" 
        style={this.props.style}>{this.props.children}</button>
    );
  }
}

export default Button;
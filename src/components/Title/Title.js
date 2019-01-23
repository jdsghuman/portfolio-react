import React, { Component } from 'react';

const title = {
  display: 'block',
  margin: '20px auto',
  width: '140px',
  textAlign: 'center',
  color: '#2cbadb',
  paddingBottom: '5px',
  borderBottom: '3px solid rgb(3, 31, 37)'
}

class Title extends Component {
  render() {
    return (
      <h2 style={title}>{this.props.children}</h2>
    );
  }
}

export default Title;
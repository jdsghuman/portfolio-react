import React from 'react';

const title = {
  display: 'block',
  margin: '20px auto',
  width: '140px',
  textAlign: 'center',
  color: '#2cbadb',
  paddingBottom: '5px',
  borderBottom: '3px solid rgb(3, 31, 37)'
}

const Title = (props) => {
    return (
      <h2 style={title}>{props.children}</h2>
    );
}

export default Title;
import React, { Component } from 'react';
import './InteractiveButtons.css';

class InteractiveButtons extends Component {
  state = {
    about: false
  }
  render() {
    return (
      <>
        <span className={this.state.about === false ? 'dot dot--red' : 'dot dot__about dot--red'}><span className="sign sign--red">x</span></span>
        <span className="dot dot--yellow"><span className="sign sign--yellow">-</span></span>
        <span className={this.state.about === false ? 'dot dot--green' : 'dot dot__about dot--green'}>
          <span className="sign sign--green">
            <svg height="8px" viewBox="0 0 32 32" width="8px"><path d="M28,2h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h1.2l-4.6,4.601C18.28,10.921,18,11.344,18,12c0,1.094,0.859,2,2,2  c0.641,0,1.049-0.248,1.4-0.6L26,8.8V10c0,1.104,0.896,2,2,2s2-0.896,2-2V4C30,2.896,29.104,2,28,2z M12,18  c-0.641,0-1.049,0.248-1.4,0.6L6,23.2V22c0-1.104-0.896-2-2-2s-2,0.896-2,2v6c0,1.104,0.896,2,2,2h6c1.104,0,2-0.896,2-2  s-0.896-2-2-2H8.8l4.6-4.601C13.72,21.079,14,20.656,14,20C14,18.906,13.141,18,12,18z" /></svg>
          </span>
        </span>
      </>
    )
  }

  componentDidMount() {
    return this.props.page === 'about' ? this.setState({ about: true }) : null;
  }
}

export default InteractiveButtons;
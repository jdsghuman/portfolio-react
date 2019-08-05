import React, { Component } from 'react';

class ImageDisplay extends Component {
  state = {
    isLoaded: false
  }
  imageLoaded = () => {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      })
    }, 800);
  }

  render() {
    return (
      <>
        {!this.state.isLoaded ? <div className="loader"></div> : null}
        <img className={this.state.isLoaded ? 'project-item__img' : '' } style={this.state.isLoaded ? {} : {display: 'none'}} alt="project" src={this.props.thumbnail} onLoad={this.imageLoaded} />
      </>
    );
  }
}

export default ImageDisplay;
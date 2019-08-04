import React, { Component } from 'react';

class ImageDisplay extends Component {
  state = {
    isLoaded: false
  }
  imageLoaded = () => {
    this.setState({
      isLoaded: true
    })
  }

  renderSpinner = (image) => {
      if(!this.state.isLoaded) {
        return <p style={{ color: '#fff' }}>Is Loading...</p>
      } else {
        return <img className="project-item__img" alt="project" src={image} onLoad={this.imageLoaded} />
      }
  }
  render() {
    let { thumbnail } = this.props;
    let image = this.renderSpinner(thumbnail)
    return (
      <>
        {!this.state.isLoaded ? <div className="loader"></div> : null}
        <img className={this.state.isLoaded ? 'project-item__img' : 'loader' } style={this.state.isLoaded ? {} : {display: 'none'}} alt="project" src={thumbnail} onLoad={this.imageLoaded} />
      </>
    );
  }
}

export default ImageDisplay;
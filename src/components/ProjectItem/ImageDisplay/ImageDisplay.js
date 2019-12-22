import React, { useState } from 'react';

const ImageDisplay = ({ thumbnail }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageLoaded = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);
  }
  return (
    <>
      {!isLoaded ? <div className="loader"></div> : null}
      <img className={isLoaded ? 'project-item__img' : ''} style={isLoaded ? {} : { display: 'none' }} alt="project" src={thumbnail} onLoad={imageLoaded} />
    </>
  );
}

export default ImageDisplay;
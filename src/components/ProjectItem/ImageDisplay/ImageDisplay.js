import React, { useState } from 'react';

const ImageDisplay = ({ thumbnail }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageLoaded = () => {
      setIsLoaded(true);
  }

  return (
    <>
      {!isLoaded && <div className="loader"></div>}
      <img className={isLoaded ? 'project-item__img' : ''} style={isLoaded ? {} : { display: 'none' }} alt="project" src={thumbnail} onLoad={imageLoaded} />
    </>
  );
}

export default ImageDisplay;

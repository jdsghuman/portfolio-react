import React, { useState } from 'react';
import className from 'classnames/bind';
import Spinner from '../../Shared/Spinner/Spinner'
import styles from './ImageDisplay.module.scss';

const cx = className.bind(styles);

const ImageDisplay = ({ thumbnail }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageLoaded = () => {
      setIsLoaded(true);
  }

  return (
    <>
      {!isLoaded && <Spinner />}
      <img className={cx({
        'img': isLoaded,
        'img--hide': !isLoaded
      })} alt="project" src={thumbnail} onLoad={imageLoaded} />
    </>
  );
}

export default ImageDisplay;

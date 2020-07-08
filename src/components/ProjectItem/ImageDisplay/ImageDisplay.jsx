import React, { useState } from 'react'
import className from 'classnames/bind'
import Spinner from '../../Shared/Spinner/Spinner'
import styles from './ImageDisplay.module.scss'

const cx = className.bind(styles)

const ImageDisplay = ({ showModal, thumbnail }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const imageLoaded = () => {
    setIsLoaded(true)
  }

  return (
    <div onClick={showModal} className={styles.image__container}>
      {!isLoaded && <Spinner />}
      <img
        className={cx('image__display', {
          'image--show': isLoaded,
          'image--hide': !isLoaded,
        })}
        alt="project"
        src={thumbnail}
        onLoad={imageLoaded}
      />
    </div>
  )
}

export default ImageDisplay

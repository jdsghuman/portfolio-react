import React from 'react'
import './Button.css'

const Button = props => {
  const handleClick = url => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <button
      type="button"
      onClick={() => handleClick(props.url)}
      className={props.classes}
      style={props.style}
    >
      {props.children}
    </button>
  )
}

export default Button

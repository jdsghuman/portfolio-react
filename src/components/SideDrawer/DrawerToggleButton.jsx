import React from 'react'
import './DrawerToggle.css'

const drawerToggleButton = props => (
  <button type="button" className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
)

export default drawerToggleButton

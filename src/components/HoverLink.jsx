import React from 'react'
import { Motion, spring, presets } from 'react-motion'

import pink from '../layouts/images/pink.jpg'

class HoverLink extends React.Component {
  state = {
    hover: false
  }
  
  render () {
    const {
      hover
    } = this.state
    
    const {
      children,
      url
    } = this.props
      
    return (
      <Motion
        defaultStyle={{ z: 0 }}
        style={{ z: !hover ? spring(0, presets.wobbly) : spring(1, presets.wobbly) }}>
        { computedStyles => (
          <a
            href={url}
            target="_blank"
            onMouseOver={this.mouseOverHandler}
            onMouseOut={this.mouseOutHandler}
            style={{ transform: `translateZ(${computedStyles.z}px)` }}>
            {children}
          </a>
        )}
      </Motion>
    )
  }

  mouseOverHandler = () => {
    this.setState({
      hover: true
    })
  }

  mouseOutHandler = () => {
    this.setState({
      hover: false
    })
  }
}

export default HoverLink
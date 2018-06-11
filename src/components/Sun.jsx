import React from 'react'
import { Motion, spring, presets } from 'react-motion'

import Svg from '../layouts/images/Sun.svg'

class Sun extends React.Component {
  render () {
    const {
      mousePosition,
      screenCenter
    } = this.props
    
    const defaultStyles = {
      translationY: 0,
      translationZ: 0
    }
    
    const style = {
      translationY: mousePosition.top,
      translationZ: mousePosition.left
    }
    
    return (
      <Motion
        defaultStyles={defaultStyles}
        style={style}>
        {computedStyle => (
          <img src={Svg}
            style={{
              position: 'absolute',
              bottom: 0,
              width: 250,
              left: '10%',
              transform: `perspective(1500px) translate3d(0px, ${computedStyle.translationY}px, ${computedStyle.translationZ}px)`
            }} />
        )}
      </Motion>
    )
  }
}

export default Sun
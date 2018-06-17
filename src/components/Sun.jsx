import React from 'react'
import { Motion, spring, presets } from 'react-motion'

import Svg from '../layouts/images/sun.svg'

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

    const css = {
      position: 'absolute',
      width: 250,
      left: '10%'
    }

    if (this.props.reverse) {
      css.top = 0
      css.opacity = 0.1
    } else {
      css.bottom = 0
    }
    
    return (
      <Motion
        defaultStyles={defaultStyles}
        style={style}>
        {computedStyle => (
          <img
            alt="Floating sun"
            src={Svg}
            style={{
              ...css,
              transform: this.props.reverse ?
                `perspective(1500px) translate3d(0px, ${computedStyle.translationY}px, ${computedStyle.translationZ}px) scale(1, -1)` :
                `perspective(1500px) translate3d(0px, ${-computedStyle.translationY}px, ${computedStyle.translationZ}px)`
            }} />
        )}
      </Motion>
    )
  }
}

export default Sun
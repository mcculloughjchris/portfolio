import React from 'react'
import { Motion, spring } from 'react-motion'

class Line extends React.Component {
  state = {
    mounted: false
  }
  
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        mounted: true
      })
    }, 10)
  }
  
  render () {
    const {
      height
    } = this.props
    
    const {
      mounted
    } = this.state
    
    const style = {
      top: spring(mounted ? 0 : height, { stiffness: 5 }),
      opacity: spring(mounted ? 0 : 1, { stiffness: 5 })
    }
    
    return (
      <Motion style={style}>
        {computedStyle => (
          <div className='line' style={{ opacity: computedStyle.opacity, transform: `translate3d(0, ${computedStyle.top}px, 0)`}} />
        )}
      </Motion>
    )
  }
}

export default Line
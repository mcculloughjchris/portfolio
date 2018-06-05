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
    
    return (
      <div className='line' />
    )
  }
}

export default Line
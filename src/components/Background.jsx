// http://imgs.abduzeedo.com/files/tutorials/80s_Artwork_in_Photoshop/media_1433742631801.png

import React from 'react'

import Line from './Line'
import Sun from './Sun'

class Background extends React.Component {
  state = {
    lines: []
  }
  
  componentDidMount () {
    setInterval(this.addLine, 1000)
    setTimeout(this.startRemovingLines, 20000)
  }
  
  render () {
    const {
      scrollTop
    } = this.props

    let {
      height
    } = this.props
    height *= 2
    
    let darkActivity = ''

    if (scrollTop > (height / 2)) {
      darkActivity = 'half-active'
    }

    if (scrollTop > (height - 100)) {
      darkActivity = 'active'
    }
    
    return (
      <div className='background'>
        <div className={`top-half`}>
          <Sun mousePosition={this.props.mousePosition} screenCenter={this.props.screenCenter} />
        </div>
        <div className={`bottom-half`}>
          <Sun reverse mousePosition={this.props.mousePosition} screenCenter={this.props.screenCenter} />
          <div className='horizontal-lines'>
            {this.horizontalLines()}
          </div>
        </div>
        <div className={`darken ${darkActivity}`} />
      </div>
    )
  }

  addLine = () => {
    const {
      height
    } = this.props
    
    this.setState({
      lines: [
        ...this.state.lines,
        <Line key={`line-${new Date()}`} height={height} />
      ]
    })
  }

  startRemovingLines = () => {
    setInterval(this.removeLine, 1000)
  }

  removeLine = () => {
    let newState = Object.assign({}, this.state)
    newState.lines.splice(0, 1)

    this.setState(newState)
  }

  horizontalLines = () => {
    return this.state.lines
  }
}

export default Background
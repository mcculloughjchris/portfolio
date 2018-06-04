import React from 'react'
import Link from 'gatsby-link'
import { Motion, spring, presets } from 'react-motion'

import Background from '../components/Background'
import Me from '../components/Me'
import Articles from '../components/Articles'
import Projects from '../components/Projects'
import MyConfiguration from '../components/MyConfiguration'

import pink from '../layouts/images/pink.jpg'

class IndexPage extends React.Component {
  state = {
    window: {
      height: 0,
      width: 0
    },
    screenCenter: {
      x: 0,
      y: 0
    },
    mousePosition: {
      left: 0,
      top: 0
    },
    scrollTop: 0
  }
  
  componentDidMount () {
    window.addEventListener('load', this.findScreenCenter)
    window.addEventListener('resize', this.findScreenCenter)
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('scroll', this.getScrollTop)
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.findScreenCenter)
    window.removeEventListener('resize', this.findScreenCenter)
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('scroll', this.getScrollTop)
  }

  render () {
    const {
      window,
      screenCenter,
      mousePosition,
      scrollTop
    } = this.state
    
    return (
      <div className="full">
        <Background
          height={window.height / 2}
          width={window.width}
          scrollTop={scrollTop} />
        <Me
          height={window.height}
          width={window.width}
          screenCenter={screenCenter}
          mousePosition={mousePosition} />
        <Articles />
        <Projects />
        <MyConfiguration
          mousePosition={mousePosition} />
      </div>
    )
  }

  findScreenCenter = (e) => {
    const {
      innerWidth,
      innerHeight,
    } = e.currentTarget

    this.setState({
      window: {
        width: innerWidth,
        height: innerHeight
      },
      screenCenter: {
        x: innerWidth / 2,
        y: innerHeight / 2
      }
    })
  }

  posish = (base, to) => {
    return base - to
  }
  
  handleMouseMove = (e) => {
    this.setState({
      mousePosition: {
        left: spring(this.posish(this.state.screenCenter.x, e.clientX) / 3, presets.wobbly),
        top: spring(this.posish(this.state.screenCenter.y, e.clientY) / 3, presets.wobbly)
      }
    })
  }

  getScrollTop = () => {
    this.setState({
      scrollTop: window.scrollY
    })
  }
}

export default IndexPage

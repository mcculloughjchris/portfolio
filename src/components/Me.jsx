import React from 'react'
import { Motion, spring } from 'react-motion'

import HoverLink from '../components/HoverLink'
import GithubLogo from '../components/GithubLogo'
import LinkedInLogo from '../components/LinkedInLogo'
import MediumLogo from '../components/MediumLogo'

import pink from '../layouts/images/pink.jpg'

class Me extends React.Component {
  render () {
    const {
      screenCenter,
      mousePosition,
      width,
      height
    } = this.props

    const defaultStyle = {
      translationX: screenCenter.x,
      translationY: screenCenter.y
    }

    let xy = {
      x: screenCenter.x,
      y: screenCenter.y
    }

    let style = {
      translationX: mousePosition.left,
      translationY: mousePosition.top
    }

    if (width <= 715) {
      style = {
        translationX: 0,
        translationY: 0
      }

      xy = {
        x: 0,
        y: 0
      }
    }
    
    return (
      <div className={`me-page ${width <= 715 ? 'mobile' : ''}`} style={{ height: height }}>
        <div className='name-wrapper' style={{ left: xy.x, top: xy.y }}>
          <Motion
            defaultStyles={defaultStyle}
            style={style}>
            { computedStyle => (
              <div style={{ transform: `translate3d(${computedStyle.translationX}px, ${computedStyle.translationY}px, 0)` }}>
                <div
                className='name'
                style={{ background: `url(${pink})` }}>
                  <h1>Chris McCullough</h1>
                  <h2>Front End Developer</h2>
                </div>
                <div
                  className='links'>
                  <HoverLink url="http://github.com/mcculloughjchris">
                    <GithubLogo />
                  </HoverLink>
                  <HoverLink url="https://www.linkedin.com/in/mcculloughjchris/">
                    <LinkedInLogo />
                  </HoverLink>
                  <HoverLink url="https://medium.com/@mcculloughjchris">
                    <MediumLogo />
                  </HoverLink>
                </div>
              </div>
            )}
          </Motion>
        </div>
      </div>
    )
  }
}

export default Me
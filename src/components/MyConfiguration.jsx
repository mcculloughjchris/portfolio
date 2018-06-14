import React from 'react'
import { Motion, Spring } from 'react-motion'

import Full from './Full'
import MetaImage from './MetaImage'

import HTML5 from '../layouts/images/HTML5_logo_and_wordmark.svg'
import CSS3 from '../layouts/images/CSS3_logo_and_wordmark.svg'
import JS from '../layouts/images/js.svg'
import jQuery from '../layouts/images/jquery.svg'
import Bootstrap from '../layouts/images/Bootstrap_logo.svg'
import ReactLogo from '../layouts/images/React-icon.svg'
import Redux from '../layouts/images/redux.svg'
import Vue from '../layouts/images/Vue.js_Logo.svg'
import PHP from '../layouts/images/PHP-logo.svg'
import Laravel from '../layouts/images/LaravelLogo.png'
import Rails from '../layouts/images/Ruby_On_Rails_Logo.svg'
import Mysql from '../layouts/images/mysql.svg'
import Git from '../layouts/images/Git-Icon.png'
import Webpack from '../layouts/images/webpack.svg'
import Mocha from '../layouts/images/mocha.svg'
import Chai from '../layouts/images/chai.svg'
import Selenium from '../layouts/images/Selenium.svg'

class MyConfigurations extends React.Component {
  render () {
    const {
      left,
      top
    } = this.props.mousePosition

    return (
      <Full
        className='my-configurations'
        name='I do these things'>

        <Motion
          defaultStyles={{
            x: 0,
            z: 0
          }}
          style={{
            x: left,
            z: top
          }}>
          {computedStyle => (
            <div className="images" style={{
              transform: `perspective(1000px) translate3d(${computedStyle.x}px, 0, ${computedStyle.z}px)`
            }}>
              <div className='icon icon-html' />
              <div className='icon icon-css' />
              <div className='icon icon-js' />
              <div className='icon icon-jquery' />
              <div className='icon icon-bootstrap' />
              <div className='icon icon-react' />
              <div className='icon icon-redux' />
              <div className='icon icon-vue' />
              <div className='icon icon-php' />
              <div className='icon icon-laravel' />
              <div className='icon icon-rails' />
              <div className='icon icon-mysql' />
              <div className='icon icon-git' />
              <div className='icon icon-webpack' />
              <div className='icon icon-mocha' />
              <div className='icon icon-chai' />
              <div className='icon icon-selenium' />
            </div>
          )}
        </Motion>

      </Full>
    )
  }
}

export default MyConfigurations
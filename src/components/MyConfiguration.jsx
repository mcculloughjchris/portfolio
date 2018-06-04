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
            <div class="images" style={{
              transform: `perspective(1000px) translate3d(${computedStyle.x}px, 0, ${computedStyle.z}px)`
            }}>
              <MetaImage src={HTML5} name='HTML5' />
              <MetaImage src={CSS3} name='CSS3' />
              <MetaImage src={JS} name='JS' />
              <MetaImage src={jQuery} name='jQuery' />
              <MetaImage src={Bootstrap} name='Bootstrap' />
              <MetaImage src={ReactLogo} name='React' />
              <MetaImage src={Redux} name='Redux' />
              <MetaImage src={Vue} name='Vue' />
              <MetaImage src={PHP} name='PHP' />
              <MetaImage src={Laravel} name='Laravel' />
              <MetaImage src={Rails} name='Rails' />
              <MetaImage src={Mysql} name='MySQL' />
              <MetaImage src={Git} name='Git' />
              <MetaImage src={Webpack} name='Webpack' />
              <MetaImage src={Mocha} name='Mocha' />
              <MetaImage src={Chai} name='Chai' />
              <MetaImage src={Selenium} name='Selenium' />
            </div>
          )}
        </Motion>

      </Full>
    )
  }
}

export default MyConfigurations
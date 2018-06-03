import React from 'react'

import Full from './Full'

import HTML5 from '../layouts/images/HTML5_logo_and_wordmark.svg'
import CSS3 from '../layouts/images/CSS3_logo_and_wordmark.svg'
import JS from '../layouts/images/Unofficial_Javascript_logo_2.svg'
import jQuery from '../layouts/images/jquery.svg'
import Bootstrap from '../layouts/images/Bootstrap_logo.svg'
import ReactLogo from '../layouts/images/React-icon.svg'
import PHP from '../layouts/images/PHP-logo.svg'
import Laravel from '../layouts/images/LaravelLogo.png'
import Rails from '../layouts/images/Ruby_On_Rails_Logo.svg'
import Mysql from '../layouts/images/mysql.svg'
import Git from '../layouts/images/Git-Icon.png'

class MyConfigurations extends React.Component {
  render () {
    return (
      <Full
        className='my-configurations'
        name='My Configurations'>

        <div class="images">
          <img src={HTML5} />
          <img src={CSS3} />
          <img src={JS} />
          <img src={jQuery} />
          <img src={Bootstrap} />
          <img src={ReactLogo} />
          <img src={PHP} />
          <img src={Laravel} />
          <img src={Rails} />
          <img src={Mysql} />
          <img src={Git} />
        </div>

      </Full>
    )
  }
}

export default MyConfigurations
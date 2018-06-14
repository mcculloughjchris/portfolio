import React from 'react'

import Full from './Full'

class Contact extends React.Component {
  render () {
    return (
      <Full
        className='contact'
        name='Contact'>
        
        <form name='contact' method="POST" netlify="true" action="/#submitted">
          <label>Your Name:<br /><input type='text' name='name' placeholder='Your Name' /></label>

          <label>Your Email:<br /><input type='email' name='email' placeholder='Your Email' /></label>

          <label>What's up?<br /><textarea name='message' placeholder="What's up?" /></label>

          <button type="submit">Send</button>
        </form>

      </Full>
    )
  }
}

export default Contact
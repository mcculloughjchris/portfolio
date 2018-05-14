import React from 'react'
import PropTypes from 'prop-types'

import Window from './Window'

class Article extends React.Component {
  render () {
    const {
      title,
      date,
      snippet,
      url
    } = this.props
    
    return (
      <div className='article'>
        <Window
          title={title}
          description={snippet}
          url={url}
          buttonText='Read More' />
      </div>
    )
  }
}

Article.defaultProps = {
  title: '',
  url: '',
  snippet: ''
}

export default Article
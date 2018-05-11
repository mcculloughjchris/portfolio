import React from 'react'
import PropTypes from 'prop-types'

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
        <h3><a href={url} target="_blank">{title}</a></h3>
        <p>{snippet}...</p>
        <div style={{ textAlign: 'center' }}>
          <a href={url} target="_blank" className='button'><span>Read More</span></a>
        </div>
      </div>
    )
  }
}

Article.propTypes = {
  title: '',
  url: '',
  snippet: ''
}

export default Article
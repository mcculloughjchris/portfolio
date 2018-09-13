import React from 'react'
import PropTypes from 'prop-types'

class Window extends React.Component {
  render () {
    const {
      title
    } = this.props
    
    return (
      <div className='window'>
        <div className='title'>
          <h3>{title}</h3>

          {this.options()}
        </div>

        {this.body()}...
      </div>
    )
  }

  options = () => {
    const {
      withOptions
    } = this.props

    if (withOptions) {
      return (
        <div className='options'>
          <div className='option'>_</div>
          <div className='option'><span className='box' /></div>
          <div className='option'>X</div>
        </div>
      )
    }
    
    return null
  }

  body = () => {
    const {
      description
    } = this.props

    if (description) {
      return (
        <div className='body'>
          <p>{description}</p>

          {this.button()}
        </div>
      )
    }

    return null
  }

  button = () => {
    const {
      url,
      buttonText
    } = this.props

    if (url) {
      return (
        <div style={{ textAlign: 'center' }}>
          <a href={url} target="_blank" className='button'><span>{buttonText}</span></a>
        </div>
      )
    }

    return null
  }
}

Window.defaultProps = {
  withOptions: false
}

Window.propTypes = {
  withOptions: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  buttonText: PropTypes.string
}

export default Window
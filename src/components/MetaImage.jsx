import React from 'react'
import PropTypes from 'prop-types'

class MetaImage extends React.Component {
  render () {
    const {
      src,
      name
    } = this.props
    
    return (
      <img src={src} alt={name} title={name} />
    )
  }
}

MetaImage.defualtValues = {
  name: ''
}

MetaImage.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default MetaImage
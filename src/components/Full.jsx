import React from 'react'
import PropTypes from 'prop-types'

class Full extends React.Component {
  render () {
    const {
      className,
      name,
      children
    } = this.props
    
    return (
      <div className={`full ${className}`} id={className}>
        <h2>{name}</h2>

        {children}
      </div>
    )
  }
}

Full.defaultProps = {
  className: '',
  name: ''
}

Full.propTypes = {
  children: PropTypes.node
}

export default Full
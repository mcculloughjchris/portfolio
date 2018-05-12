import React from 'react'

class Project extends React.Component {
  render () {
    const {
      title,
      description,
      url
    } = this.props

    return (
      <div className='project'>
        <div className='title'>
          <h3>{title}</h3>

          <div className='options'>
            <div className='option'>_</div>
            <div className='option'><span className='box' /></div>
            <div className='option'>X</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
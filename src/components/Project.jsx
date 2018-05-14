import React from 'react'

import Window from './Window'

class Project extends React.Component {
  render () {
    const {
      title,
      description,
      url
    } = this.props

    return (
      <div class='project'>
        <Window
          withOptions
          title={title}
          description={description}
          url={url}
          buttonText='Look at Code' />     
      </div>
    )
  }
}

export default Project
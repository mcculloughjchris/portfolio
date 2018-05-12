import React from 'react'

import Project from './Project'

class Projects extends React.Component {
  render () {
    return (
      <div className='full projects'>
        <h2>Projects</h2>

        <Project
          title='Wordpress React Theme'
          description='Theme for Wordpress that uses React and the Wordpress REST API'
          url='https://github.com/mcculloughjchris/wp-react-theme' />
      </div>
    )
  }
}

export default Projects
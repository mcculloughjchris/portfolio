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

        <Project
          title='Frugal Recipes'
          description="Small project I started working on (not finished yet) for /r/frugal and /r/mealplans to post recipes. This site was built with React and Bootstrap, compiled through Webpack and served with Express.js. I also implemented a login system using Reddit's OAuth2 service. There are still a few things that need to be done before launch, so keep in mind that it's a work in progress."
          url='https://github.com/mcculloughjchris/frugal-recipes' />
      </div>
    )
  }
}

export default Projects
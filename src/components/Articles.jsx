import React from 'react'

import Full from './Full'
import Article from './Article'

class Articles extends React.Component {
  render () {
    return (
      <Full
        className='articles'
        name='Articles'>
        <Article
          title='Free articles from subscription news websites?'
          date='September 13th, 2018'
          snippet='When you visit your limit of monthly Medium articles the website will yell at you and ask you to subscribe. I do not feel like I would get'
          url='https://medium.com/@mcculloughjchris/free-articles-from-subscription-news-websites-63a10b31ce87'
        />

        <Article
          title='Testing Applications using Selenium and Mocha'
          date='May 7th, 2018'
          snippet='Selenium seems to be a major player in the world of automated testing, right next to Nightwatch and PhantomJS. With the DevOps field'
          url='https://medium.com/@mcculloughjchris/testing-applications-using-selenium-and-mocha-2463323f8153'
        />

        <Article
          title='Fetching Data with a Higher Order Component in React'
          date='Apr 29th, 2018'
          snippet='Let us say you are building a sick application in React, and Redux is managing your application’s data. Maybe not Redux, you could also be'
          url='https://medium.com/@mcculloughjchris/fetching-data-with-a-higher-order-component-in-react-43c622c30a82'
        />
      </Full>
    )
  }
}

export default Articles
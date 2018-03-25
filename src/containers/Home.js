import React from 'react'
import { withSiteData } from 'react-static'
import Video from './Video'
import MainPage from './Main'
//

export default withSiteData(() => (
  <div className="homepage">
    <Video />
    <MainPage />
  </div>
))

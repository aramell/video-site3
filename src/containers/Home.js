import React from 'react'
import { withSiteData } from 'react-static'
import Video from './Video'
//

export default withSiteData(() => (
  <div className="homepage">
    <Video />
  </div>
))

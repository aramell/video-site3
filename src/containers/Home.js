import React from 'react'
import { withSiteData } from 'react-static'
import Video from './Video'
import Footer from './Footer'
//

export default withSiteData(() => (
  <div className="homepage">
    <Video />
    <Footer />
  </div>
))

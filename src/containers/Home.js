import React from 'react'
import { withSiteData } from 'react-static'
import Video from './Video'
import Footer from './Footer'
// import '../simple-grid.css'
//

export default withSiteData(() => (
  <div className="homepage">
    <Video />
    <div className="col-12">
      <Footer />
    </div>
  </div>
))

import React from 'react'
import { withSiteData } from 'react-static'
import Video from './Video'
//
import PLlogo from '../PLlogo.png'

export default withSiteData(() => (
  <div className="homepage">
    <img src={PLlogo} alt="" id="logo" />
    <Video />
  </div>
))

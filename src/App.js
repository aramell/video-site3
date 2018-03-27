import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import PLlogo from './PLlogo.png'
import Home from './containers/Home'
import { SocialIcons } from 'react-social-icons';
import Routes from 'react-static-routes'
import Video from './containers/Video'

import './app.css'

const urls = [
  'https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q',
  'https://www.facebook.com/PhantomLand-Media-418287681891035/'
]

const App = () => (
  
  <Router>
    <div className="wrapper">
    <img src={PLlogo} alt="" id="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/weddings">Weddings</Link>
        <Link to="/realestate">Real Estate</Link>
        <Link to="/promotional">Promotional</Link>
        <Link to="/contact">Contact</Link>
        <SocialIcons urls={urls} color="grey" />
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
  
)

export default hot(module)(App)

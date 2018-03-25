import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import PLlogo from './PLlogo.png'
// import './simple-grid.css'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div className="wrapper">
    <img src={PLlogo} alt="" id="logo" />

      <nav >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/weddings">Weddings</Link>
        <Link to="/realestate">Real Estate</Link>
        <Link to="/promotional">Promotional</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)

import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import PLlogo from './PLlogo.png'
import Routes from 'react-static-routes'
import Video from './containers/Video'
import './theme/assets/css/main.css'

// import './app.css'
import Nav from './containers/Nav'

const urls = [
  'https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q',
  'https://www.facebook.com/PhantomLand-Media-418287681891035/',
]

class App extends React.Component {


render() {

  return(
  
  <Router>
    <div id="page-wrapper">
      <header id="header" className="alt">
        <img src={PLlogo} alt="" id="logo" />
        <Nav />
      </header>
      <div className="content">
        <Routes />

      </div>
    </div>
  </Router>


  )
}
}

export default hot(module)(App)

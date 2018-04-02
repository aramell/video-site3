import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import PLlogo from './PLlogo.png'
import Home from './containers/Home'
import { SocialIcons } from 'react-social-icons';
import Routes from 'react-static-routes'
import Video from './containers/Video'
import { slide as Menu } from 'react-burger-menu'

import './theme/assets/css/main.css'

// import './app.css'

const urls = [
  'https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q',
  'https://www.facebook.com/PhantomLand-Media-418287681891035/'
]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden: true
    }
  }
  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

}
  render = () => {
    return (
  
  <Router>
    <div id="page-wrapper">
    <header id="header" className="alt">
    <img src={PLlogo} alt="" id="logo" />
     <nav id="nav">
      <ul>
								<li className="special">
									<a href="#menu" className="menuToggle" onClick={(event) => this.toggleHidden(event)}><span>Menu</span></a>
                  <div id="menu">
                  
										<ul>
											<li><a><Link to="/">Home</Link></a></li>
											<li><a><Link to="/about">About</Link></a></li> 
											<li><a><Link to="/weddings">Weddings</Link></a></li>
											<li><a><Link to="/promotional">Promotional</Link></a></li>
											<li><a><Link to="/contact">Contact</Link></a></li>
										</ul>
									</div>
								</li>
							</ul>
      </nav>
    </header>
      <div className="content">
        <Routes />

      </div>
    </div>
  </Router>

  )
}
const Menu = () => (

)


export default hot(module)(App)

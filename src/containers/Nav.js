import React from 'react'
import { Router, Link } from 'react-static'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: false,
    }
  }
  // isHidden(){
  //   e.preventDefault()

  // }
  toggleHidden (e) {
    e.preventDefault()
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }
  render () {
    const { isHidden } = this.state

    return (
      <nav id="nav">
        <ul>
        <li className="special">
            <a href="#menu" className="menuToggle" onClick={(e) => this.toggleHidden(e)}><span>Menu</span></a>
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
    )
  }
}

export default Nav

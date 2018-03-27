
import React from 'react'
import Video from './Video'



const MainPage = () => (
  <div className="main-page" >
    <h3>We are a Central Pennsylvania based video services company specializing in custom videos tailored to your needs
    </h3>
    <div className="sub-main">
      <div className="meet-team">
        <button >About Us </button>
      </div>
      <div className="example-video" >
        <Video />
      </div>
    </div>
    <div className="footer">
      This is the footer!
    </div>
  </div>
)

export default MainPage
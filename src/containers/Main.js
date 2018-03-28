
import React from 'react'
import Video from './Video'



const MainPage = () => (
  <div className="wrapper style1 special" id="one" >
    <h3>We are a Central Pennsylvania based video services company specializing in custom videos tailored to your needs
    </h3>
    <div className="inner">
      <div className="meet-team">
          <a href="/about" class="btn"> Meet Us </a>
        </div>
      <div className="example-video" >
        {/* <Video /> */}
      </div>
    </div>
   
  </div>
)

export default MainPage
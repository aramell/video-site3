
import React from 'react'
import YouTube from 'react-youtube'
import Footer from './Footer';


class Promotional extends React.Component {
  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
        
      }

    }
   
  
return(
  <div className="service-wrapper" >
    <div className="promotional">
      <div className="video" id="service-video2">
        <YouTube 
          videoId="hvjgFAY8Vf0"
          opts={opts} 
         onReady={this._onReady}
        />
      </div>
    </div>
    <Footer />
    </div>
    
  )
  }
  _onReady(e){
    e.target.mute()
  }
}
export default Promotional

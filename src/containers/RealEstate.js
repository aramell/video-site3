
import React from 'react'
import YouTube from 'react-youtube'
import Footer from './Footer';

class RealEstate extends React.Component {
    render(){
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1
          
        }

      }
     
    
  return(
    <div className="service-wrapper">
    <div className="realestate">
      <div className="video">
          <YouTube 
            videoId="kNZWd_cow_Y"
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
export default RealEstate


import React from 'react'
import YouTube from 'react-youtube'
import Footer from './Footer';
class Weddings extends React.Component {


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
    <div className="weddings">
        <div className="video" id="wedding-video">
        <YouTube 
          videoId="pV7nmwQwJPo"
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
export default Weddings

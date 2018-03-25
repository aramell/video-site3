
import React from 'react'
import YouTube from 'react-youtube'


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
  <div className="promotional">
    <div className="video">
  <YouTube 
    videoId="hvjgFAY8Vf0"
    opts={opts} 
    onReady={this._onReady}
  />
  </div>
    </div>
  )
  }
  _onReady(e){
    e.target.mute()
  }
}
export default Promotional

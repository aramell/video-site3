
import React from 'react'
import YouTube from 'react-youtube'

class RealEstate extends React.Component {
    render(){
      const opts = {
        height: '390',
        width: '640',

      }
     
    
  return(
    <div className="realestate">
    <YouTube 
      videoId="pV7nmwQwJPo"
      opts={opts} 
    />
      </div>
    )
  }
}
export default RealEstate

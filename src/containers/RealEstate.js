
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
      <div className="video">
    <YouTube 
      videoId="kNZWd_cow_Y"
      opts={opts} 
    />
    </div>
      </div>
    )
  }
}
export default RealEstate

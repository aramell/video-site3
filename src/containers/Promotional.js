
import React from 'react'
import YouTube from 'react-youtube'


class Promotional extends React.Component {
  render(){
    const opts = {
      height: '390',
      width: '640',

    }
   
  
return(
  <div className="promotional">
    <div className="video">
    <h1>Promotional</h1>
  <YouTube 
    videoId="pV7nmwQwJPo"
    opts={opts} 
  />
  </div>
    </div>
  )
}
}
export default Promotional

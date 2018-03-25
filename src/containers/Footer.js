import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  
  return(
    <div className="footer">
     <ul>
        <li>Facebook</li>
        <li><SocialIcon url="https://www.facebook.com/PhantomLand-Media-418287681891035" /></li>
        <li><SocialIcon url="https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q" /></li>    
      </ul>    
   </div>
  )
}

export default Footer

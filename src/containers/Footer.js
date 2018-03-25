import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcons } from 'react-social-icons';
import '../simple-grid.css'


const Footer = () => {
  var urls = [
    'https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q',
    'https://www.facebook.com/PhantomLand-Media-418287681891035'
  ];
  return(
    
    <div id="footer" className="footer col-12">
    
      <SocialIcons urls={urls} />
        
   </div>
  )
}

export default Footer

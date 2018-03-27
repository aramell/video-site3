import React from 'react'
import { SocialIcons } from 'react-social-icons';

const urls = [
  'https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q',
  'https://www.facebook.com/PhantomLand-Media-418287681891035/'
]

const Footer = () => (
  <div className="footer">
      This is the footer!
      <SocialIcons urls={urls} color="grey" />
  </div>
  )


export default Footer
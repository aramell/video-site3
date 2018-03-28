import React from 'react'
import { SocialIcons } from 'react-social-icons';
const urls = [
  'https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q',
  'https://www.facebook.com/PhantomLand-Media-418287681891035/'
]

const Footer = () => (
  <div className="footer">
      <footer id="footer">
						<ul class="icons">
							<li><a href="https://www.facebook.com/PhantomLand-Media-418287681891035/?ref=br_rs" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							{/* <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li> */}
							<li><a href="https://www.youtube.com/channel/UCea2VORP4TMnpVCVrBg4p-Q" class="icon fa-youtube"><span class="label">Dribbble</span></a></li>
							<li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
						</ul>
						<ul class="copyright">
							<li>&copy; PhantomLand Media 2018</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>
  </div>
  )


export default Footer
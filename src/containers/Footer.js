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
							<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
							<li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
						</ul>
						<ul class="copyright">
							<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>
  </div>
  )


export default Footer
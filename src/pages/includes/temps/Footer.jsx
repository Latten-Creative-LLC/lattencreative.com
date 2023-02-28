import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

export default function Footer({url}) {

  return (
    <>
    <div className='scrolling-callout'>
      <Marquee gradient={false}  speed={150}>
        <h1>Lets make something amazing</h1>
      </Marquee>
    </div>
    <div className='line'></div>
    <footer className='website-footer'>
        <div className='footer-inner container'>
          <div class="footer-branding">
            <h1><span className='word-one'>Latten</span> <span className='word-two'>Creative</span></h1>
            <p>LLC / est. 2023</p>
          </div>
          <div className='footer-links'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/work'>Work</Link></li>
                <li><Link to='mailto:business@lattencreative.com'>Contact</Link></li>
              </ul>
          </div>
          <div className='footer-credits'>
            <p>&copy; { new Date().getFullYear() } - { url }</p>
          </div>
        </div>
    </footer>
    </>
  )
}

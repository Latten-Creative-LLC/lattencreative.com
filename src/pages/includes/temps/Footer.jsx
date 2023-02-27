import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer({url}) {

  return (
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
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
          </div>
          <div className='footer-credits'>
            <p>&copy; { new Date().getFullYear() } - { url }</p>
          </div>
        </div>
    </footer>
  )
}

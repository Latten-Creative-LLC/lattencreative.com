import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  const nav = {
    'Home' : { title: 'Home', url: '/' },
  } 

  return (
    <header className='website-header'>
        <div className='website-header-inner container-fluid'>
            <div className='row'>
                <div className='website-header-branding col-lg-6'>
                    <h2>
                        <Link to='/'>Latten Creative</Link>
                    </h2>
                </div>
                <div className='website-header-navigation col-lg-6'>
                    <nav className='header-navigation-main'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/work'>Work</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}


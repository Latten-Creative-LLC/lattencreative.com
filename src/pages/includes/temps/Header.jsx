import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  const nav = {
    'Home' : { title: 'Home', url: '/' },
  } 

  return (
    <header className='website-header'>
        <div className='website-header-inner container'>
            <div className='row'>
                <div className='website-header-branding col-lg-2'>
                    <h2>
                        <Link to='/'>
                            <img src='/images/logo-lc-black-solid.png' alt='Logo' />
                        </Link>
                    </h2>
                </div>
                <div className='website-header-desc col-lg-4'>
                    <p>EST. 2023</p>
                </div>
                <div className='website-header-navigation col-lg-6'>
                    <nav className='header-navigation-main'>
                        <ul>
                            <li><Link to='/'><sub>01</sub> Home</Link></li>
                            <li><Link to='/about'><sub>02</sub> About</Link></li>
                            <li><Link to='mailto:business@lattencreative.com'><sub>03</sub> Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

